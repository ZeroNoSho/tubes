"use client";
import { useState, createContext, useEffect } from "react";
const Contex = createContext(null);
import { jwtDecode } from "jwt-decode";
import Swal from "sweetalert2";
import axios from "axios";
import { useRouter } from "next/navigation";
import withReactContent from "sweetalert2-react-content";
axios.defaults.withCredentials = true;

const Provider = ({ children }) => {
  const router = useRouter();
  const MySwal = withReactContent(Swal);
  const [menus, setMenu] = useState("hidden");
  //api
  const [token, setToken] = useState("");
  const [exp, setExp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  //toko
  const [toko, setToko] = useState("");
  const [prov, setProv] = useState("");
  const [kotas, setKota] = useState([]);
  const [kecas, setKeca] = useState([]);

  useEffect(() => {
    const getToken = async () => {
      axios
        .get(`http://localhost:3000/api/admin/refreshToken`)
        .then((res) => {
          setToken(res.data.accessToken);
          const decode = jwtDecode(res.data.accessToken);
          axios
            .get(`http://localhost:3000/api/admin/toko/get/${decode.UserId}`)
            .then((res) => {
              setToko(res.data.toko[0]);
              setExp(decode.exp);
              setName(decode.name);
              setEmail(decode.email);
              setId(decode.UserId);
            })
            .catch((err) => {
              if (err.response) {
                console.log(err.response);
              }
            });
        })
        .catch((err) => {
          // if (err.response) {
          //   router.push(`/`);
          // }
        });
    };
    getToken();
  }, [router]);

  const provinsi = async () => {
    axios
      .get(`/api/daerah/prov`)
      .then((res) => {
        setProv(res.data.prov);
      })
      .catch((err) => {
        if (err.response) {
          router.push(`/page/login`);
        }
      });
  };

  const kota = async (id) => {
    await axios
      .get(`http://localhost:3000/api/daerah/kota/${id}`)
      .then((res) => {
        if (res.data.code !== 400) {
          setKota(res.data.prov.value);
        }
      })
      .catch((err) => {
        if (err.response) {
          router.push(`/page/login`);
        }
      });
  };

  const keca = async (id) => {
    await axios
      .get(`http://localhost:3000/api/daerah/keca/${id}`)
      .then((res) => {
        setKeca(res.data.prov.value);
      })
      .catch((err) => {
        if (err.response) {
          router.push(`/page/login`);
        }
      });
  };

  const toat = (title, icon) => {
    const Toast = MySwal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: icon,
      title: title,
    });
    getToken();
  };

  return (
    <Contex.Provider
      value={{
        id,
        kecas,
        keca,
        kotas,
        kota,
        prov,
        toko,
        toat,
        menus,
        setMenu,
        provinsi,
        name,
        email,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
