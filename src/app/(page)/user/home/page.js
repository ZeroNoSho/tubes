import Image from "next/image";
import Link from "next/link";

export default function Homeuser() {
  const arry = [1, 2, 3, 4, 5, 6];
  return (
    <main className="items-center min-h-screen justify-between p-24">
      {/* screen awal */}
      <div className="flex">
        <div className="w-[60%] text-white pr-10">
          <h1 className="py-5 font-bold">~pencintanaman.id</h1>
          <p className="py-5 font-bold text-5xl">
            Mulailah menanam. Setiap tanaman yang Anda tanam adalah kontribusi
            positif bagi lingkungan. Jadilah bagian dari solusi, bukan masalah.
          </p>
          <p className="py-5">
            Pencintanaman.id menyediakan berbagai jenis tanaman hias. Siap
            menjadi mitra anda untuk menyediakan berbagai jenis kebutuhan
            tanaman, baik untuk kebutuhan pribadi maupun proyek. Berapapun
            kebutuhan anda, kami siap melayani.
          </p>
          <p className="py-5">Ciptakan bumi hijau bersama pencintanaman.id</p>
        </div>
        <div className="w-[40%]">
          <div className="bg-white mx-auto ">
            <Image
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
              className={`p-3`}
              src={"/asset/user/home/tumbuhan.png"}
            ></Image>
          </div>

          <div className="w-full text-center  mt-12">
            <Link
              href={"/user/katalog"}
              className=" p-3 m-auto rounded-full bg-[#F3F25B]"
            >
              {`Jelajahi Tanaman > `}
            </Link>
          </div>
        </div>
      </div>
      {/* Beranda Alasan */}
      <div className="py-32">
        <p className="text-center text-white font-bold text-4xl">
          6 Alasan Anda harus Memilih pencintanaman.id
        </p>
        <p className="text-center py-10 text-white">
          Berikut alasan mengapa anda harus membeli produk kami.
        </p>
        <div className="flex justify-center flex-wrap mx-auto gap-10 w-auto">
          {arry.map((e) => (
            <div
              key={e}
              className=" relative flex w-96 h-52 text-center flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
            >
              <div className="p-6">
                <h5 className="mb-2 py-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  UI/UX Review Check
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to where you can enjoy the main night
                  life in Barcelona.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Deskripsi */}
      <div>
        <div className="flex">
          <div className="w-[50%] text-white pr-10 mr-auto">
            <h1 className="py-5 font-bold">~pencintanaman.id</h1>
            <p className="py-5 font-bold text-5xl">Jual Bibit Tanaman Hias </p>
            <p className="py-5 text-xl">
              ~pencintanaman.id merupakah Website yang berfokus pada pasar
              tanaman hias, yang mencakup berbagai jenis tanaman yang digunakan
              untuk tujuan estetika dan dekoratif. Pengguna dapat menjelajahi,
              mencari, dan membeli tanaman hias melalui website ini.
            </p>
          </div>
          <div className="w-[40%]">
            <div className=" mx-auto ">
              <Image
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                style={{
                  width: "100%",
                  height: "100%",
                }}
                className={`p-3`}
                src={"/asset/user/home/Frame.png"}
              ></Image>
            </div>
          </div>
        </div>
        <div className="w-full text-center ml-auto mt-12">
          <Link
            href={"/user/katalog"}
            className=" p-3 m-auto rounded-full bg-[#F3F25B]"
          >
            {`Lihat Semua Tanaman > `}
          </Link>
        </div>
      </div>
      {/* Cara Merawat Tanaman */}{" "}
      <div className="flex py-[200px]">
        <div className="w-[40%]">
          <div className=" mx-auto">
            <Image
              alt="logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{
                width: "100%",
                height: "100%",
              }}
              className={`p-3 my-auto`}
              src={"/asset/user/home/Frame.png"}
            ></Image>
          </div>
        </div>
        <div className="w-[55%] text-white pr-10 ml-auto">
          <p className="py-5 font-bold text-5xl">Cara Merawat Tanaman Hias</p>
          <p className="py-5 text-lg text-justify">
            Pastikan tanaman Anda ditempatkan di lokasi yang sesuai dengan
            kebutuhannya terhadap cahaya. Beberapa tanaman memerlukan sinar
            matahari langsung, sementara yang lain lebih baik ditempatkan di
            tempat yang teduh.
            <br></br>
            <br></br>Bersihkan daun tanaman secara teratur untuk menghindari
            penumpukan debu dan memungkinkan tanaman bernapas dengan baik. Ini
            juga membantu mencegah serangan hama.
            <br></br>
            <br></br>Air adalah faktor kunci dalam merawat tanaman hias.
            Pastikan tanaman Anda tidak kekurangan air atau terlalu banyak air.
            Setiap jenis tanaman memiliki kebutuhan air yang berbeda, jadi
            sebaiknya Anda memahami kebutuhan tanaman Anda.
            <br></br>
            <br></br>Beberapa tanaman hias mungkin memiliki kebutuhan khusus.
            Pastikan Anda memahami kebutuhan khusus tanaman tersebut dan
            memberikan perawatan yang sesuai.
            <br></br>
            <br></br>Memberikan cinta dan perhatian ekstra kepada tanaman Anda.
            Sentuh dan berbicara dengan mereka, jika Anda mau. Penyayangannya
            akan tercermin dalam pertumbuhan dan kesehatan tanaman.
          </p>
        </div>
      </div>
    </main>
  );
}
