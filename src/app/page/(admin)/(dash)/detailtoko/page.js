"use client";
import { Contex } from "@/context/admin/store";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
  const router = useRouter();
  const { prov, kotas, kota, kecas, keca, id, toat, provinsi } =
    useContext(Contex);

  const [provid, setProvid] = useState("");
  const [kotasid, setKotaid] = useState("");
  const [kecasid, setKecaid] = useState("");
  const [alamat, setAlamat] = useState("");
  const [nama, setNama] = useState("");
  const [nomor, seNomor] = useState("");

  useEffect(() => {
    provinsi();
  }, [provinsi]);

  const post = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/admin/toko/post", {
        namatoko: nama,
        nomor: nomor,
        provinsi: provid,
        kota: kotasid,
        kecamatan: kecasid,
        alamat: alamat,
        adminId: id,
      })
      .then((res) => {
        router.push(`/page/dashboard`);
        toat("success membuat toko", "success");
      })
      .catch((error) => {
        const errorMsg = error.response.data.msg;
        toat(errorMsg, "error");
      });
  };
  return (
    <div className="mx-15 text-slate-500 max-h-full min-h-screen ">
      <div className="mb-10">
        <p className="text-3xl font-semibold pt-10 text-center">
          Isi Profile Toko Kamu
        </p>
      </div>
      <div className="pb-16 max-[800px]:mb-10">
        <div className="w-11/12 m-auto bg-white max-[800px]:grid-cols-1 rounded-md max-[800px]:block ">
          <div className="px-5 border-r border-slate-200 py-5 basis-6/12">
            <form onSubmit={post}>
              <div className="flex">
                <div className="basis-1/2">
                  <label className="py-1 text-[15px] font-black py-2">
                    nama toko
                    <br />
                    <input
                      type="text"
                      className="w-[80%] font-normal h-[30px] border rounded"
                      onChange={(e) => setNama(e.target.value)}
                    ></input>
                  </label>
                  <br />
                  <label className="py-1 text-[15px] font-black">
                    nomor
                    <br />
                    <input
                      type="text"
                      className="w-[80%] font-normal h-[30px] border rounded"
                      onChange={(e) => seNomor(e.target.value)}
                    ></input>
                  </label>
                  <br />
                  <label className="py-1 text-[15px] font-black">
                    provinsi
                    <br />
                    <select
                      type="text"
                      className="w-[80%] border rounded font-normal h-[30px] pl-2"
                      onChange={(e) => {
                        kota(e.target.value.split(",")[0]);
                        setProvid(e.target.value.split(",")[1]);
                      }}
                    >
                      <option className="font-normal">Pilih</option>
                      {prov &&
                        prov.map((item, i) => (
                          <option
                            className="font-normal"
                            key={i}
                            value={[item.id, item.name]}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </label>
                </div>
                <div className="basis-1/2">
                  <label className="py-1 text-[15px] font-black">
                    kota
                    <br />
                    <select
                      type="text"
                      className="w-[80%] border rounded font-normal h-[30px] pl-2"
                      onChange={(e) => {
                        keca(e.target.value.split(",")[0]);
                        setKotaid(e.target.value.split(",")[1]);
                      }}
                    >
                      <option className="font-normal">Pilih</option>
                      {kotas &&
                        kotas?.map((item, i) => (
                          <option
                            className="font-normal"
                            key={i}
                            value={[item.id, item.name]}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </label>
                  <br />
                  <label className="py-1 text-[15px] font-black">
                    kecamatan
                    <br />
                    <select
                      type="text"
                      className="w-[80%] border rounded font-normal h-[30px] pl-2"
                      onChange={(e) => setKecaid(e.target.value.split(",")[1])}
                    >
                      <option className="font-normal">Pilih</option>
                      {kecas &&
                        kecas?.map((item, i) => (
                          <option
                            className="font-normal"
                            key={i}
                            value={[item.id, item.name]}
                          >
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </label>
                  <br />
                  <label className="py-1 text-[15px] font-black">
                    alamat
                    <br />
                    <textarea
                      onChange={(e) => setAlamat(e.target.value)}
                      className="w-[80%]  border rounded font-normal"
                    ></textarea>
                  </label>
                </div>
              </div>
              <button className="p-2 mt-10 w-full blue rounded-md text-slate-100">
                Create Store
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
