import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <main className="items-center min-h-screen p-24">
      <div className="flex py-[100px]">
        <div className="w-[30%] ">
          <div className={`mx-auto`}>
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
              src={"/asset/user/about/logo.png"}
            ></Image>
          </div>
        </div>
        <div className="w-[50%] text-white pr-10 mx-auto text-center">
          <p className="py-5 font-bold text-7xl">About Us</p>
          <p className="py-5 text-xl text-justify">
            Website ini berfokus pada pasar tanaman hias, yang mencakup berbagai
            jenis tanaman yang digunakan untuk tujuan estetika dan dekoratif.
            Pengguna dapat menjelajahi, mencari, dan membeli tanaman hias
            melalui website ini. (pencintanaman.id)
          </p>

          <div className="w-full text-center ml-auto mt-12">
            <button className=" p-3 m-auto rounded-full bg-[#F3F25B] text-black w-[200px]">
              {`See More`}
            </button>
          </div>
        </div>
      </div>
      <div className="flex text-white ">
        <div className=" w-[40%] mx-auto">
          <p className="my-5 font-bold text-3xl border-b-4 border-[#F3F25B] w-[60%]">
            Sejarah
          </p>
          <p className="text-justify ">
            Pencinta Tanaman didirikan dengan cinta dan gairah terhadap
            keindahan alam dan tanaman hias. Awalnya hanya sebagai sebuah hobi
            yang berkembang dari kecintaan mendalam terhadap tanaman, perusahaan
            kami telah tumbuh menjadi sumber terkemuka bagi pecinta tanaman di
            seluruh dunia. Dalam perjalanan panjang ini, kami telah menyaksikan
            evolusi dari pasar tanaman hias, dan kami bangga menjadi bagian dari
            masyarakat yang semakin sadar akan pentingnya alam dalam kehidupan
            kita.
          </p>
        </div>
        <div className=" w-[40%] mx-auto mt-[120px]">
          <p className="my-5 font-bold text-3xl border-b-4 border-[#F3F25B] w-[60%]">
            Visi
          </p>
          <p className="text-justify">
            Visi kami adalah untuk menginspirasi dan mendukung pecinta tanaman
            di seluruh dunia. Kami ingin membawa keindahan alam ke dalam rumah
            dan taman Anda, memberikan akses kepada semua orang untuk menikmati
            manfaat kesehatan, ketenangan, dan kecantikan yang tanaman hias
            dapat bawa. Kami juga berkomitmen untuk mendukung lingkungan dengan
            menyediakan tanaman yang ditanam dan dipelihara dengan tanggung
            jawab lingkungan serta memberikan sumber daya untuk membantu orang
            merawat tanaman mereka dengan benar.
          </p>
        </div>
      </div>
      <div className="flex text-white pt-[200px]">
        <div className="w-[50%] ">
          <div className={`mx-auto`}>
            <Image
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "80%",
                height: "100%",
              }}
              className={`mx-auto py-10 rounded-lg`}
              src={"/asset/user/about/map.png"}
            ></Image>
          </div>
        </div>
        <div className="w-[50%] text-white pr-10 mx-auto ">
          <p className="py-3 font-bold text-5xl">Hubungi Kami </p>
          <p className="py-3 text-xl text-justify">
            Anda dapat menghubungi kami melalui kontak di bawah ini :
          </p>
          <div>
            <p className="py-2 text-xl text-justify">
              <span className="font-bold">Alamat:</span> <br></br> Jl. DI
              Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec. Purwokerto
              Selatan Kabupaten Banyumas, Jawa Tengah 53147
            </p>
            <p className="py-2 text-xl text-justify">
              <span className="font-bold">E-Mail:</span> <br></br>{" "}
              officialpencintanaman.co.id
            </p>
            <p className="py-2 text-xl text-justify">
              <span className="font-bold">Telepon:</span> <br></br>{" "}
              0856-4161-9643
            </p>
            <p className="py-2 text-xl text-justify">
              <span className="font-bold">Website:</span> <br></br>{" "}
              pencintanaman.id
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
