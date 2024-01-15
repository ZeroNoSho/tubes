"use client";
import Image from "next/image";
import Link from "next/link";
import useSWR from "swr";
import axios from "axios";
import { Contex } from "@/context/user/store";
import { useState, useContext } from "react";

export default function Cart() {
  const { decode } = useContext(Contex);
  const [clik, setclik] = useState(1);

  const fetcher = (url) =>
    axios.get(url).then((res) => res.data.profile[0].cart);

  const { data: dataid, error } = useSWR(
    `/api/users/profile/get/${decode && decode.UserId}`,
    fetcher
  );
  let totalQuantity = 0;
  let totalPrice = 0;
  
  // dataid &&
  //   dataid.forEach((cart) => {
  //     totalQuantity += cart.total;

  //     // Menggunakan perulangan karena setiap objek cart dapat memiliki beberapa produk
  //     cart.product.forEach((product) => {
  //       totalPrice += product.harga;
  //     });
  //   });
  console.log(dataid);
  return (
    <main className="items-center min-h-screen px-24 py-24">
      <div className="flex">
        <div className="text-white w-1/2">
          {dataid &&
            dataid.map((e, i) => (
              <div key={i} className="flex m-5">
                <div className="bg-white rounded-lg">
                  <Image
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "80%",
                      height: "100%",
                    }}
                    className={`mx-auto py-10`}
                    src={e.product[0].image}
                  ></Image>
                </div>
                <div className="px-10">
                  <p className="font-bold text-2xl">{e.product[0].title}</p>
                  <p className="">
                    Harga Tanaman : {e.product[0].harga} ({e.total})
                  </p>
                  <p>Total : {e.product[0].harga * e.total}</p>
                  <div className="py-5 flex">
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
                        <span>{e.total}</span>
                      </div>

                      <button
                        className="font-semibold border-l  bg-white  h-full w-20 flex rounded-r focus:outline-none cursor-pointer"
                        onClick={() => (clik == 0 ? "" : setclik(clik - 1))}
                      >
                        <span className="m-auto text-black">-</span>
                      </button>
                    </div>
                    <div className="w-full text-center ml-10">
                      <button
                        href={"/user/katalog"}
                        className="p-3 m-auto w-32 rounded-full bg-white text-black"
                      >
                        Hapus
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="bg-white w-1/2 rounded-lg">
          <div className="p-10 ">
            <p className="font-bold text-2xl">Ringkasan Belanja</p>
            <div className="flex">
              <div>
                <p className="text-lg my-10">Total barang</p>
                <p className="text-lg my-10">Total Diskon</p>
                <p className="text-lg mt-44">Total Harga</p>
              </div>
              <div className="ml-auto">
                <p className="font-bold text-2xl"> </p>
                <p className="text-lg my-10">8</p>
                <p className="text-lg my-10">0%</p>
                <p className="text-lg mt-44">Rp {150000 + 450000}</p>
              </div>
            </div>
            <div className="w-full text-center mt-10">
              <button
                href={"/user/katalog"}
                className="p-3 m-auto rounded-lg w-44 bg-[#F3F25B] text-black"
              >
                Beli
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
