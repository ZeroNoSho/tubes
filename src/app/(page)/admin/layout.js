"use client";
import Foot from "@/components/user/foot";
import Nav from "@/components/user/nav";
import { usePathname } from "next/navigation";

export default function MenuLayout({
  children, // will be a page or nested layout
}) {
  const pathname = usePathname();

  return (
    <div className="flex">
      <div className="w-full">{children}</div>
    </div>
  );
}
