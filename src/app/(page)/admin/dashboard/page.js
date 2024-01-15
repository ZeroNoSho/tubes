"use client";
import axios from "axios";
import { Contex } from "@/context/admin/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
axios.defaults.withCredentials = true;
import Image from "next/image";

export default function Home() {
  const { datas, mutatedatas, token } = useContext(Contex);

  const delet = async (e) => {
    const id = e.target.dataset.key;
    const res = await axios.delete(`/api/admin/product/delet/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
        "Cache-Control": "no-cache",
      },
    });
    console.log(res.data.msg);
    mutatedatas("/api/admin/product/get");
  };

  return (
    <div className={`mx-15 max-h-full min-h-screen pb-10`}>
      <div className=" py-5 my-32 w-11/12 m-auto rounded-lg pb-10 text-black bg-white">
        <div className="mb-10 ">
          <p className="text-3xl font-semibold pt-10 text-center">
            Data Tanaman
          </p>
        </div>
        <div className="mb-10 text-center">
          <Link
            href={"/admin/dashboard/add"}
            className=" py-3 px-5 m-auto rounded-full bg-[#F3F25B] text-black"
          >
            tambah tanaman
          </Link>
        </div>
        <div className="wrapper ">
          <table className=" table-auto text-sm w-11/12 mx-auto text-center">
            <thead className=" text-slate-600">
              <tr className="text-black">
                <th
                  className={` bg-[#F3F25B] text-center border border-gray-500 font-medium p-4 pb-3 rounded-t-lg  `}
                >
                  Title
                </th>
                <th
                  className={` bg-[#F3F25B] text-center border border-gray-500 font-medium p-4 pb-3 rounded-t-lg `}
                >
                  Harga
                </th>{" "}
                <th
                  className={`bg-[#F3F25B] border border-gray-500 font-medium p-4 pl-8 pb-3 rounded-t-lg  `}
                >
                  Kategoti
                </th>
                <th
                  className={`bg-[#F3F25B] text-center border border-gray-500 font-medium p-4 pb-3 rounded-t-lg `}
                >
                  Desc
                </th>
                <th
                  className={`bg-[#F3F25B] text-center border border-gray-500 font-medium p-4 pb-3 rounded-t-lg `}
                >
                  Image
                </th>
                <th
                  className={`bg-[#F3F25B] text-center border border-gray-500 font-medium p-4 pb-3 rounded-t-lg`}
                >
                  action
                </th>
              </tr>
            </thead>
            <tbody className="">
              {datas &&
                datas.product?.map(
                  (item, i) =>
                    datas && (
                      <tr key={i} className="rounded-b-lg text-black">
                        <td className={`border border-gray-500 p-4   `}>
                          <p>{item.title}</p>
                        </td>
                        <td className={`border border-gray-500 p-4  `}>
                          <p>{item.harga}</p>
                        </td>
                        <td className={`border border-gray-500 p-4   `}>
                          <p>
                            {item.categorys[0].categoryTitle &&
                              item.categorys[0].categoryTitle}
                          </p>
                        </td>
                        <td className={`border border-gray-500 p-4   `}>
                          <p>{item.desc}</p>
                        </td>
                        <td className={`border border-gray-500 p-4   `}>
                          <p>
                            <Image
                              alt="logo"
                              width={0}
                              height={0}
                              sizes="100vw"
                              style={{
                                width: "50%",
                                height: "50%",
                              }}
                              className={`m-auto`}
                              src={item.image}
                            ></Image>
                          </p>
                        </td>
                        <td className={`border border-gray-500 p-4  `}>
                          <div className="flex">
                            <Link
                              href={`/admin/dashboard/add/${item.productid}`}
                              className="basis-1/2 cursor-pointer"
                            >
                              <FontAwesomeIcon icon={faPencil} />
                            </Link>
                            <p
                              className="basis-1/2 cursor-pointer text-center"
                              data-key={item.productid}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 448 512"
                                className="m-auto"
                                data-key={item.productid}
                                onClick={delet}
                              >
                                <path
                                  data-key={item.productid}
                                  onClick={delet}
                                  fill="currentColor"
                                  d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                                />
                              </svg>
                            </p>
                          </div>
                        </td>
                      </tr>
                    )
                )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
