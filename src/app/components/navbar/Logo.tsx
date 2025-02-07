"use client";

import Image from "next/image";
// import { useRouter } from "next/navigation";

const Logo = () => {
  return (
    <Image
      alt="Logo"
      className="md:block cursor-pointer"
      height="100"
      width="100"
      src="/Images/airbnb-logo.png"
    />
  );
};

export default Logo;
