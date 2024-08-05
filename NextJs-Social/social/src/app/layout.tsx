import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./layouts/header";
import Sidebar from "./layouts/Sidebar";
import Switcher from "./layouts/switcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Social",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="w-full flex">
          <Sidebar />
          {children}
        {/* <Switcher/> */}
        </div>
      </body>
    </html>
  );
}
