import Image from "next/image";
import Link from "next/link";
export default function Login() {
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
        <p className="py-5 font-bold text-5xl">Selamat Datang</p>
        <form action="">
          <div className="py-10">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Username"
              className="w-full h-[60px] border-b-4 border-slate-400 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
            />
          </div>

          <div className="py-10">
            <input
              type="text"
              name="password"
              id="password"
              placeholder="password"
              className="w-full h-[60px] border-b-4 border-slate-400 py-2 pl-3 rounded mt-2 outline-none focus:ring-indigo-600 :ring-indigo-600"
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
