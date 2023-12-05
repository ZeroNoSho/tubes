import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Provider } from "@/context/admin/store";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={inter.className}>{children}</body>
      </Provider>
    </html>
  );
}
