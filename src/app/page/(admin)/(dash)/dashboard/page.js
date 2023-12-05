"use client";
import { Contex } from "@/context/admin/store";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxesStacked,
  faGear,
  faRotate,
  faTableCells,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Page() {
  const { email, name, toko } = useContext(Contex);
  console.log(toko);
  return (
    <div className="mx-15 text-slate-500 max-h-full min-h-screen ">
      <div className="mb-10">
        <p className="text-3xl font-semibold pt-10 text-center">Dashboard</p>
      </div>
      <div className="pb-16 max-[800px]:mb-10">
        <div className="w-11/12 m-auto bg-white flex flex-row max-[800px]:grid-cols-1 rounded-md max-[800px]:block ">
          <div className="flex px-5 border-r border-slate-200 py-5 basis-6/12">
            <p className="text-3xl w-20 text-center py-2 text-slate-100 bg-blue-500 rounded-md h-fit">
              <FontAwesomeIcon icon={faUser} />
            </p>
            <div className="w-full ml-2">
              <p className="text-sm">Admin account</p>
              <p className="text-xl max-[800px]:text-xl">{email}</p>
            </div>
          </div>
          <div className="flex px-5 border-r border-slate-200 py-5 basis-6/12">
            <p className="text-3xl w-20 text-center  text-slate-100 bg-blue-500 rounded-md  h-fit ">
              <FontAwesomeIcon className="logo py-3" icon={faBoxesStacked} />
            </p>
            <div className="w-full ml-2">
              <p className="text-sm">Data Jumlah Barang</p>
              <p className="text-xl max-[800px]:text-xl">
                {toko && toko.barang.length}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white w-11/12 m-auto rounded-lg mt-10 flex">
          <div className="px-5 border-r border-slate-200 py-5 basis-6/12">
            <div className="flex py-2">
              <h1 className="basis-6/12 text-xl font-bold text_blue">
                Detail Profile Admin
              </h1>
              <p className="basis-6/12 text-right font-bold text-lg text_blue">
                <FontAwesomeIcon icon={faGear} />
              </p>
            </div>
            <div className="flex">
              <div className="basis-1/2">
                <p className="py-1">
                  <span className="text-[15px] font-black">email</span>
                  <br /> {email}
                </p>
                <p className="py-1">
                  <span className="text-[15px] font-black">password</span>
                  <br /> **********
                </p>
              </div>
              <div className="basis-1/2">
                <p>
                  <span className="text-[15px] font-black">nama</span>
                  <br /> {name}
                </p>
              </div>
            </div>
          </div>
          <div className="px-5 border-r border-slate-200 py-5 basis-6/12">
            <div className="flex py-2">
              <h1 className="basis-6/12 text-xl font-bold text_blue">
                Detail Profile Toko
              </h1>
              <p className="basis-6/12 text-right font-bold text-lg text_blue">
                <FontAwesomeIcon icon={faGear} />
              </p>
            </div>
            <div className="flex">
              <div className="basis-1/2">
                <p className="py-1">
                  <span className="text-[15px] font-black">nama toko</span>
                  <br />
                  {toko && toko.namatoko}
                </p>
                <p className="py-1">
                  <span className="text-[15px] font-black">nomor</span> <br />
                  {toko && toko.nomor}
                </p>
                <p className="py-1">
                  <span className="text-[15px] font-black">provinsi</span>
                  <br />
                  {toko && toko.provinsi}
                </p>
              </div>
              <div className="basis-1/2">
                <p className="py-1">
                  <span className="text-[15px] font-black">kota</span>
                  <br />
                  {toko && toko.kota}
                </p>
                <p className="py-1">
                  <span className="text-[15px] font-black">kecamatan</span>
                  <br />
                  {toko && toko.kecamatan}
                </p>
                <p className="py-2">
                  <span className="text-[15px] font-black">alamat</span>
                  <br />
                  {toko && toko.alamat}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`pb-16 max-[800px]:mb-10 bg-white w-11/12 m-auto rounded-lg ${
          toko === undefined ? "hidden" : ""
        }`}
      >
        <p className="text-3xl font-semibold pt-10 text-center">Product</p>
        <div className="px-4">
          <div className="my-5 py-5 border-b border-t border-gray-300 flex max-[550px]:block">
            <Link
              href={""}
              className="blue text-slate-100 p-2 rounded-lg ml-5"
              fdprocessedid="true"
            >
              Add item
            </Link>
            <Link
              href={""}
              className="blue text-slate-100 p-2 rounded-lg ml-5"
              fdprocessedid="true"
            >
              Add category
            </Link>
            <div className="flex flex-row-reverse ml-auto max-[550px]:mt-10">
              <p className="p-1 cursor-pointer w-20 text-center" onClick={""}>
                <FontAwesomeIcon icon={faRotate} onClick={""} />
              </p>
              <p
                className={`p-1 cursor-pointer w-20 text-center ${""}`}
                onClick={() => (col == 1 ? setCol(0) : setCol(1))}
              >
                <FontAwesomeIcon icon={faTableCells} />
              </p>
              <input
                onChange={(e) => {
                  get(e.target.value || "");
                }}
                type="text"
                placeholder="Search"
                className="rounded-md p-1 border border-gray-300"
                fdprocessedid="true"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
            <img
              className="h-48 w-full object-cover object-center"
              src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="Product Image"
            />
            <div className="p-4">
              <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                Product Name
              </h2>
              <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
                Product description goes here.
              </p>
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                  $20.00
                </p>

                <button className="ml-auto text-base font-medium bg-green-500 text-white rounded-lg w-[80px] py-2">
                  edit
                </button>
                <button className="ml-auto text-base font-medium bg-red-500 text-white rounded-lg w-[80px] py-2">
                  hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
