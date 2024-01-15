"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
import useSWR from "swr";
import { jwtDecode } from "jwt-decode";
axios.defaults.withCredentials = true;
const Contex = createContext(null);

const Provider = ({ children }) => {
  const [decode, setDecode] = useState();
  const [datas, setDatas] = useState();
  useEffect(() => {
    axios.get("/api/users/refreshToken").then((res) => {
      const prof = jwtDecode(res.data.accessToken);
      setDecode(prof);
    });
  }, []);

  const router = useRouter();
  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { data: token, error } = useSWR("/api/users/refreshToken", fetcher);

  const fetcher1 = (url, token) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then((res) => res.data);
  const fetcher2 = (url, token) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
      })
      .then((res) => res.data.product);

  const { data: data, error: errordata } = useSWR(
    [`/api/admin/product/get`, token],
    ([url, token]) => fetcher2(url, token)
  );

  const { data: kategori, error: errorkategori } = useSWR(
    [`/api/admin/category/get`, token],
    ([url, token]) => fetcher1(url, token)
  );

  const {
    data: ctr,
    error: errorctr,
    mutate: mutatectr,
  } = useSWR([`/api/admin/category/get`, token], ([url, token]) =>
    fetcher1(url, token)
  );

  const {
    data: carts,
    error: errorcarts,
    mutate: mutatecart,
  } = useSWR(`/api/users/profile/get/${decode?.UserId}`, fetcher);

  return (
    <Contex.Provider
      value={{
        token,
        datas,
        setDatas,
        kategori,
        data,
        decode,
        carts,
        mutatecart,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
