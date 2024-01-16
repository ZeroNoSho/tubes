"use client";
import { Contex } from "@/context/user/store";
import axios from "axios";
import Link from "next/link";
import { useState, useContext, useEffect } from "react";
export default function Seting() {
  const { carts, decode, token, mutatecart } = useContext(Contex);
  const [nomor, setNomor] = useState();
  const [provinsi, setProvinsi] = useState();
  const [kota, setKota] = useState();
  const [kecamatan, setKecamatan] = useState();
  const [kodepos, setKodepos] = useState();
  const [alamat, setAlamat] = useState();

  const postData = async () => {
    if (carts?.msg === "notfound") {
      const res = await axios.post(
        `/api/users/profile/post`,
        {
          nomor: nomor,
          provinsi: provinsi,
          kota: kota,
          kecamatan: kecamatan,
          kodepos: kodepos,
          alamat: alamat,
          userId: decode && decode.UserId,
        },
        {
          headers: {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } else {
      const res = await axios.patch(
        `/api/users/profile/update/${decode && decode.UserId}`,
        {
          nomor: nomor,
          provinsi: provinsi,
          kota: kota,
          kecamatan: kecamatan,
          kodepos: kodepos,
          alamat: alamat,
        },
        {
          headers: {
            Accept: "application/json",
            "Cache-Control": "no-cache",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data);
    }

    mutatecart(`/api/users/profile/get/${decode && decode.UserId}`);
  };

  return (
    <main className="items-center min-h-screen p-24 ">
      <div className="flex">
        {carts && carts?.msg !== "notfound" ? (
          <div className="w-[50%] mx-10">
            <p className="text-center">Real Profile</p>
            <label>
              Nomor
              <input
                disabled
                value={carts.profile?.[0].nomor || ""}
                type="text"
                className="w-full p-2 my-5 border border-gray-300 rounded-lg"
                fdprocessedid="false"
                onChange={(e) => setNomor(e.target.value)}
              />
            </label>
            <label>
              Provinsi
              <input
                disabled
                value={carts.profile?.[0].provinsi || ""}
                type="text"
                className="w-full p-2 my-5 border border-gray-300 rounded-lg"
                fdprocessedid="false"
                onChange={(e) => setProvinsi(e.target.value)}
              />
            </label>
            <label>
              Kota
              <input
                disabled
                value={carts.profile?.[0].kota || ""}
                type="text"
                className="w-full p-2 my-5 border border-gray-300 rounded-lg"
                fdprocessedid="false"
                onChange={(e) => setKota(e.target.value)}
              />
            </label>
            <label>
              kecamatan
              <input
                disabled
                value={carts.profile?.[0].kecamatan || ""}
                type="text"
                className="w-full p-2 my-5 border border-gray-300 rounded-lg"
                fdprocessedid="false"
                onChange={(e) => setKecamatan(e.target.value)}
              />
            </label>
            <label>
              Kodepos
              <input
                disabled
                value={carts.profile?.[0].kodepos || ""}
                type="number"
                className="w-full p-2 my-5 border border-gray-300 rounded-lg"
                fdprocessedid="false"
                onChange={(e) => setKodepos(e.target.value)}
              />
            </label>
            <label>
              Alamat
              <textarea
                disabled
                value={carts.profile?.[0].alamat || ""}
                type="text"
                className="w-full p-2 my-5 border border-gray-300 rounded-lg"
                fdprocessedid="false"
                onChange={(e) => setAlamat(e.target.value)}
              />
            </label>
          </div>
        ) : (
          ""
        )}

        <div className={`mx-10 ${carts?.msg !== "notfound" ? "w-[50%]" : ""}`}>
          <p className="text-center">Edit Profile</p>
          <label>
            Nomor
            <input
              value={"" || nomor}
              type="text"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setNomor(e.target.value)}
            />
          </label>
          <label>
            Provinsi
            <input
              value={provinsi || ""}
              type="text"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setProvinsi(e.target.value)}
            />
          </label>
          <label>
            Kota
            <input
              value={kota || ""}
              type="text"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setKota(e.target.value)}
            />
          </label>
          <label>
            kecamatan
            <input
              value={kecamatan || ""}
              type="text"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setKecamatan(e.target.value)}
            />
          </label>
          <label>
            Kodepos
            <input
              value={kodepos || ""}
              type="number"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setKodepos(e.target.value)}
            />
          </label>
          <label>
            Alamat
            <textarea
              value={alamat || ""}
              type="text"
              className="w-full p-2 my-5 border border-gray-300 rounded-lg"
              fdprocessedid="false"
              onChange={(e) => setAlamat(e.target.value)}
            />
          </label>
        </div>
      </div>
      <div className="w-full text-center  mt-12">
        <button
          onClick={() => postData()}
          className=" p-3 m-auto rounded-full bg-[#F3F25B] w-44"
        >
          {`Simpan Profile`}
        </button>
      </div>
    </main>
  );
}
