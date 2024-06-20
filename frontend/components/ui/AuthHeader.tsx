import React from "react";
import Image from "next/image";

interface AuthHeaderProps {
  children: React.ReactNode;
  logo?: StaticImageData;
  className?: string;
}

const AuthHeader = ({ children, logo }: AuthHeaderProps) => {
  return (
    <header className={`flex h-16 px-5 w-full ${className}`}>
      <Image src={logo} alt="logo" style={{ objectFit: "contain" }} />
      {children}
    </header>
  );
};

export default AuthHeader;
