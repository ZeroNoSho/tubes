"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import { Contex } from "@/context/user/store";
import { useState, useContext, useEffect } from "react";
import { useParams } from "next/navigation";
export default function Detail() {
  const params = useParams();
  const { decode, token, carts, mutatecart, router } = useContext(Contex);
  const [clik, setclik] = useState(0);
  const fetcher = (url) => axios.get(url).then((res) => res.data);

  useEffect(() => {
    if (carts?.msg === "notfound") {
      router.push("/user/seting");
    }
  }, [carts]);

  const {
    data: dataid,
    error,
    mutate: mutatedatas,
  } = useSWR(`/api/admin/product/get/${params.slug}`, fetcher);

  const postData = async () => {
    const res = await axios.post(
      `/api/users/cart/post`,
      {
        total: clik,
        ProfileId: carts?.profile?.[0]?.id,
        productId: params.slug,
      },
      {
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    mutatecart(`/api/users/profile/get/${decode && decode.UserId}`);
  };
  return (
    <main className="items-center min-h-screen px-24 py-24">
      <div className="flex m-auto">
        <div className="w-1/2 ">
          <div className="bg-white rounded-lg">
            <Image
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "50%",
                height: "50%",
              }}
              className={`mx-auto py-10`}
              src={dataid?.product?.[0]?.image}
            ></Image>
          </div>
          <div className="w-full text-center mt-10">
            <p className="my-3"> Kategori :</p>
            <button
              href={"/user/katalog"}
              className="p-3 m-auto rounded-full bg-[#F3F25B] w-32"
            >
              {dataid && dataid.product[0].categorys[0].categoryTitle}
            </button>
          </div>
        </div>
        <div className="w-1/2 px-10 text-white">
          <p className="py-5 font-bold text-5xl ">
            {dataid && dataid.product[0].title}
          </p>
          <p className="text-xl">{dataid && dataid.product[0].desc}</p>
          <p className="py-5 font-bold text-2xl ">
            Rp {dataid && dataid.product[0].harga}
          </p>
          <div className="flex">
            <div className="flex flex-row border h-10 w-24 rounded-lg relative">
              <button
                className="font-semibold border-r bg-white  h-full w-20 flex rounded-l focus:outline-none cursor-pointer"
                onClick={() => setclik(clik + 1)}
              >
                <span className="m-auto text-black">+</span>
              </button>
              <input
                type="hidden"
                className="md:p-2 p-1 text-xs md:text-bas focus:outline-none text-center"
                readOnly
                name="custom-input-number"
              />
              <div className="bg-none w-24 text-xs md:text-base flex items-center justify-center cursor-default">
                <span>{clik}</span>
              </div>

              <button
                className="font-semibold border-l  bg-white  h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                onClick={() => (clik == 0 ? "" : setclik(clik - 1))}
              >
                <span className="m-auto text-black">-</span>
              </button>
            </div>
            <div className="w-full text-center">
              <button
                onClick={() => postData()}
                href={"/user/katalog"}
                className="p-3 m-auto rounded-full bg-[#F3F25B] text-black"
              >
                Tambahkan Keranjang
              </button>
            </div>
          </div>
        </div>
      </div>
      <p className="text-right">
        <Link
          href={"/user/katalog"}
          className=" text-white font-semibold text-xl"
        >
          Lihat semua
        </Link>
      </p>
      <div className="pt-16 grid grid-cols-3 gap-10 w-auto">
        {dataid &&
          dataid.product[0].categorys[0].products?.map((e, i) => (
            <Link
              href={`/user/detail/${e.productid}`}
              key={i}
              className="relative flex w-[290px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto"
            >
              <div className="p-6">
                <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {e.title}
                </h5>
                <Image
                  alt="logo2"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{
                    width: "80%",
                    height: "100%",
                  }}
                  className={`mx-auto py-10`}
                  src={e.image || ""}
                ></Image>
                <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  Rp. {e.harga}
                </h5>
              </div>
            </Link>
          ))}
      </div>
    </main>
  );
}
