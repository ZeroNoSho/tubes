"use client";
import axios from "axios";
import Link from "next/link";
import { Contex } from "@/context/admin/store";
import { useState, useContext } from "react";
import { useParams } from "next/navigation";
axios.defaults.withCredentials = true;

export default function Home() {
  const params = useParams();
  const { token, router, mutatedatas, ctr } = useContext(Contex);
  const [harga, setHarga] = useState();
  const [nama, setNama] = useState();
  const [des, setDes] = useState();
  const [file, setFile] = useState();
  const [cheakbox, setCheakbox] = useState([]);
  const [jenisValue, setJenisValue] = useState(false);

  const postData = async (e) => {
    e.preventDefault();
    setJenisValue(true);
    const formData = new FormData();
    formData.append("title", nama);
    formData.append("upload_preset", "llhlfihh");
    formData.append("harga", harga);
    formData.append("desc", des);
    formData.append("categoryid", JSON.stringify(cheakbox));
    formData.append("file", file);

    const res = await axios.patch(
      `/api/admin/product/update/${params.slug}`,
      formData,
      {
        headers: {
          Accept: "application/json",
          "Cache-Control": "no-cache",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setJenisValue(false);
    console.log(res.data.msg);
    setNama("");
    setDes("");
    setHarga("");

    mutatedatas("/api/admin/product/get");
    router.push(`/admin/dashboard`);
  };

  return (
    <div className={`mx-15 text-slate-500 pb-20`}>
      <div className="mb-10">
        <p className="text-3xl font-semibold pt-16 text-center">
          Update Barang
        </p>
      </div>

      <div className="bg-white py-5 w-11/12 m-auto rounded-lg pb-10">
        <form
          className="w-11/12 mx-auto"
          fdprocessedid="true"
          onSubmit={postData}
        >
          <label>
            Nama Tanaman
            <input
              value={nama || ""}
              type="text"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setNama(e.target.value)}
            />
          </label>

          <label>
            Harga
            <input
              value={harga || ""}
              type="number"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setHarga(e.target.value)}
            />
          </label>
          <label>
            desc
            <input
              value={des || ""}
              type="text"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setDes(e.target.value)}
            />
          </label>

          <div>
            Kategori
            <div className="w-full p-2 my-5 flex fe">
              {ctr &&
                ctr.category?.map((item, i) => (
                  <label key={i}>
                    <input
                      className="cheakboxs"
                      type="checkbox"
                      checked={cheakbox[0] === item.categoryid}
                      onChange={() => setCheakbox([item.categoryid])}
                    />
                    <span className="blue bg-white text-slate-100 py-2 rounded-lg mr-2 px-10">
                      {item.categoryTitle}
                    </span>
                  </label>
                ))}
            </div>
          </div>

          <label>
            File
            <input
              type="file"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>

          <button
            className="bg-[#F3F25B] py-2 rounded-lg mr-2 px-10"
            fdprocessedid="true"
            disabled={jenisValue}
          >
            {jenisValue ? "Loding..." : "Save"}
          </button>
          <Link
            href={"/admin/dashboard"}
            className="color_body text-slate-500 py-2 rounded-lg px-10"
            fdprocessedid="true"
          >
            Cancel
          </Link>
        </form>
      </div>
    </div>
  );
}
