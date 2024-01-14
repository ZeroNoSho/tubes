"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { Contex } from "@/context/user/store";

export default function Katalog() {
  const { datas, setDatas, kategori, data } = useContext(Contex);
  const [clik, setclik] = useState(1);
  return (
    <main className="items-center min-h-screen justify-between px-24 py-16">
      {/* awal */}
      <div>
        <p className="text-center text-white font-bold text-4xl">
          Jelajahi Tanaman
        </p>

        <div className="pt-16 flex justify-center flex-wrap mx-auto gap-10 w-auto">
          <button
            className={`p-3 m-auto w-[290px] rounded-lg ${
              clik === 1
                ? "bg-[#F3F25B]"
                : "border-2 border-[#F3F25B] text-[#F3F25B]"
            }`}
            onClick={() => {
              setDatas(data);
              setclik(1);
            }}
          >
            {`Semua`}
          </button>
          {kategori &&
            kategori.category?.map((e, i) => (
              <button
                key={i}
                className={`p-3 m-auto w-[290px] rounded-lg ${
                  clik === i + 2
                    ? "bg-[#F3F25B]"
                    : "border-2 border-[#F3F25B] text-[#F3F25B]"
                }`}
                onClick={() => {
                  setDatas(e.products);
                  setclik(i + 2);
                }}
              >
                {e.categoryTitle}
              </button>
            ))}
        </div>
      </div>
      <div className="pt-16 grid grid-cols-3 gap-10 w-auto">
        {datas
          ? datas &&
            datas?.map((e, i) => (
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
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "80%",
                      height: "100%",
                    }}
                    className={`mx-auto py-10`}
                    src={e.image}
                  ></Image>
                  <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    Rp. {e.harga}
                  </h5>
                </div>
              </Link>
            ))
          : data &&
            data?.map((e, i) => (
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
                    alt="logo"
                    width={0}
                    height={0}
                    sizes="100vw"
                    style={{
                      width: "80%",
                      height: "100%",
                    }}
                    className={`mx-auto py-10`}
                    src={e.image}
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
