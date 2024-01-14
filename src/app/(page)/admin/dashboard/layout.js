"use client";
import { Provider } from "@/context/user/store";

export default function MenuLayout({
  children, // will be a page or nested layout
}) {
  return (
    <div>
      <Provider>
        <div className="w-full">{children}</div>
      </Provider>
    </div>
  );
}
