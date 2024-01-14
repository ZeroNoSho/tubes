"use client";
import Image from "next/image";
import Link from "next/link";

export default function Profile() {
  return (
    <main className="items-center min-h-screen p-24">
      <div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
        <div className="p-8 flex">
          <div>
            <h5 className=" block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Salsa Dila
            </h5>
            <p>salsadilaputri09@gmail.com</p>
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
        <div className="relative flex w-[200px] h-[200px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Likes
            </h5>
          </div>
        </div>
        <div className="relative flex w-[200px] h-[200px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Notification
            </h5>
          </div>
        </div>
        <div className="relative flex w-[200px] h-[200px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              Settings
            </h5>
          </div>
        </div>
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
      <input
        type="file"
        onChange={(e) => console.log(e.target.files[0])}
      ></input>
    </main>
  );
}
