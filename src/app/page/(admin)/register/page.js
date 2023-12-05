"use client";
import axios from "axios";
import { Contex } from "@/context/admin/store";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
axios.defaults.withCredentials = true;

export default function Home() {
  const router = useRouter();
  const { toat } = useContext(Contex);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const auth = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/admin/user/post", {
        name: name,
        email: email,
        password: password,
        confpass: confirmpassword,
      })
      .then((res) => {
        router.push(`/page/login`);
        toat("success register", "success");
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          const errorMsg = error.response.data.msg;
          toat(errorMsg, "error");
        }
      });
  };

  return (
    <div className="h-screen blue text-slate-500 containers w-auto">
      <div className="m-auto center-top-left login-form">
        <p className="text-3xl font-bold text-center">Registrasi Admin</p>

        <form onSubmit={auth} className="py-2" fdprocessedid="true">
          <label className="p-2">Username</label>
          <input
            value={name}
            className="p-2 rounded-md w-full border border-gray-300"
            type="text"
            placeholder="username"
            onChange={(e) => setName(e.target.value)}
          />
          <label className="p-2">Email</label>
          <input
            value={email}
            className="p-2 rounded-md w-full border border-gray-300"
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="p-2">Password</label>
          <input
            value={password}
            className="p-2 rounded-md w-full border border-gray-300"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="p-2">Confirm Password</label>
          <input
            value={confirmpassword}
            className="p-2 rounded-md w-full border border-gray-300"
            type="password"
            placeholder="Password"
            onChange={(e) => setConfirmpassword(e.target.value)}
          />

          <button className="p-2 mt-2 w-full blue rounded-md text-slate-100">
            Registrasi
          </button>
        </form>

        <div>
          <p className="text-center">
            untuk Login klik&nbsp;
            <Link href={"/page/login"} className="text_blue">
              disini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
