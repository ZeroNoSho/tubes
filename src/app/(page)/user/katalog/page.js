import Image from "next/image";
import Link from "next/link";
export default function Katalog() {
  return (
    <main className="items-center min-h-screen justify-between px-24 py-16">
      {/* awal */}
      <div>
        <p className="text-center text-white font-bold text-4xl">
          Jelajahi Tanaman
        </p>

        <div className="pt-16 flex justify-center flex-wrap mx-auto gap-10 w-auto">
          <button className=" p-3 m-auto w-[290px] rounded-lg bg-[#F3F25B]">
            {`Semua`}
          </button>
          <button className=" p-3 m-auto w-[290px] rounded-lg bg-[#F3F25B]">
            {`Kaktus`}
          </button>
          <button className=" p-3 m-auto w-[290px] rounded-lg bg-[#F3F25B]">
            {`Plant`}
          </button>
          <button className=" p-3 m-auto w-[290px] rounded-lg bg-[#F3F25B]">
            {`Sansevieria`}
          </button>
        </div>
      </div>
      <div className="pt-16 grid grid-cols-3 gap-10 w-auto">
        <div className="relative flex w-[290px] h-[312px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
          </div>
        </div>
        <div className="relative flex w-[290px] h-[312px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
          </div>
        </div>
        <div className="relative flex w-[290px] h-[312px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
          </div>
        </div>
        <div className="relative flex w-[290px] h-[312px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
          </div>
        </div>
        <div className="relative flex w-[290px] h-[312px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
          </div>
        </div>
        <div className="relative flex w-[290px] h-[312px] text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mx-auto my-auto">
          <div className="p-6">
            <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              UI/UX Review Check
            </h5>
          </div>
        </div>
      </div>
    </main>
  );
}
