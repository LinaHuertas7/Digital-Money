"use client";

import React from "react";
import Image from "next/image";
import "../app/globals.css";
import { usePathname } from "next/navigation";
import logo from "@/public/images/logo-dmh-dark.png";
import Footer from "@/components/ui/Footer";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();
  //const Layout = pathname("/auth") ? AuthLayout : OtherLayout;
  return (
    <div className="flex bg-custom-dark-gray flex-col h-screen w-screen">
      <header className="flex bg-custom-green h-16 px-5 w-full">
        <Image src={logo} alt="logo" style={{ objectFit: "contain" }} />
      </header>
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
