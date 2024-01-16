"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useContext } from "react";
import { Contex } from "@/context/user/store";
export default function Profile() {
  const { decode } = useContext(Contex);
  const [clik, setclik] = useState(1);

  return (
    <main className="items-center min-h-screen p-24">
      <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
        <div className="p-8 flex">
          <div>
            <h5 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {decode && decode.name}
            </h5>
            <p>{decode && decode.email}</p>
          </div>
          <div className="ml-auto">
            <Image
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
              className={` rounded-lg`}
              src={"/asset/user/profile/1.png"}
            ></Image>
          </div>
        </div>
      </div>
      <div className="py-16 grid grid-cols-3 gap-10 w-auto">
        <div className="relative flex w-[200px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 512 512"
              className="m-auto"
            >
              <path
                className="m-auto"
                d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"
              />
            </svg>
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Likes
            </h5>
          </div>
        </div>
        <div className="relative flex w-[200px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 448 512"
              className="m-auto"
            >
              <path
                className="m-auto"
                d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
              />
            </svg>
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Notification
            </h5>
          </div>
        </div>
        <Link href={"/user/seting"} className="relative flex w-[200px]  text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="50"
              width="50"
              viewBox="0 0 512 512"
              className="m-auto"
            >
              <path
                className="m-auto"
                d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
              />
            </svg>
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Settings
            </h5>
          </div>
        </Link>
      </div>
      <div className="text-white">
        <div className="py-5 flex border-b-2 border-grey-500">
          <p>Riwayat pembelian Anda</p>
          <p className="ml-auto">{`>`}</p>
        </div>
        <div className="py-5 flex border-b-2 border-grey-500">
          <p>Bantuan & FAQ</p>
          <p className="ml-auto">{`>`}</p>
        </div>
        <div className="py-5 flex border-b-2 border-grey-500">
          <p>Kirim masukan</p>
          <p className="ml-auto">{`>`}</p>
        </div>
        <div className="py-5 flex border-b-2 border-grey-500">
          <p>Tentang</p>
          <p className="ml-auto">{`>`}</p>
        </div>
      </div>
    </main>
  );
}
