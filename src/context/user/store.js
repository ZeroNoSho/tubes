"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useState } from "react";
import useSWR from "swr";
axios.defaults.withCredentials = true;
const Contex = createContext(null);

const Provider = ({ children }) => {
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
    ([url, token]) => fetcher(url, token)
  );

  const [datas, setDatas] = useState(data);
  // const {
  //   data: ctr,
  //   error: errorctr,
  //   mutate: mutatectr,
  // } = useSWR([`/api/admin/category/get`, token], ([url, token]) =>
  //   fetcher1(url, token)
  // );

  return (
    <Contex.Provider value={{ token, datas, setDatas, kategori, data }}>
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
