"use client";
import Foot from "@/components/user/foot";
import Nav from "@/components/user/nav";
import { Provider } from "@/context/user/store";
import { usePathname } from "next/navigation";

export default function MenuLayout({
  children, // will be a page or nested layout
}) {
  const pathname = usePathname();

  return (
    <div className="flex">
      <Provider>
        <div className="w-full">
          {pathname === "/" ? "" : <Nav></Nav>}
          {children}
          {pathname === "/" ? "" : <Foot></Foot>}
        </div>
      </Provider>
    </div>
  );
}
