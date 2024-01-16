"use client";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export default function Login() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const auth = async (e) => {
    e.preventDefault();
    axios
      .post("/api/users/user/login", {
        email: name,
        password: password,
      })
      .then((res) => {
        if (res.data.accessToken) {
          router.push(`/user/home`);
        }
      })
      .catch((error) => {
        if (error.response) {
          const errorMsg = error.response.data.msg; // Anda perlu menyesuaikan dengan struktur respons dari server
        }
      });
  };
  return (
    <main className="flex min-h-screen max-h-full">
      <div className="w-[50%] h-full m-auto min-h-screen ">
        <div className={`mx-auto p-10`}>
          <p className="py-5 font-bold text-center text-2xl mx-auto text-white">
            ~pencintanaman.id
          </p>
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
            src={"/asset/user/home/Frame.png"}
          ></Image>
          <Image
            alt="logo"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "50%",
              height: "100%",
            }}
            className={`mx-auto`}
            src={"/asset/user/login/1.png"}
          ></Image>
        </div>
      </div>
      <div className="w-[50%] h-full text-center p-24 bg-white min-h-screen ">
        <p className="py-5 font-bold text-5xl">Selamat Datang </p>
        <form onSubmit={auth}>
          <div className="py-10">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Username"
              className="w-full h-[60px] border-b-4 border-slate-400 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="py-10">
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              className="w-full h-[60px] border-b-4 border-slate-400 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full text-center ml-auto mt-12">
            <button className="w-[200px] p-3 m-auto rounded-full bg-[#F3F25B]">
              {`Masuk`}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
