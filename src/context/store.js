"use client";
import { useState, createContext } from "react";
const Contex = createContext(null);

const Provider = ({ children }) => {
  const [menus, setMenu] = useState("hidden");
  return (
    <Contex.Provider
      value={{
        menus,
        setMenu,
      }}
    >
      {children}
    </Contex.Provider>
  );
};

export { Contex, Provider };
