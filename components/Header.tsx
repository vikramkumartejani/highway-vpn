import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <div className="max-w-[1240px] w-full mx-auto">
      <Image
        src="/hero-logo.svg"
        alt="logo"
        width={200}
        height={80}
        className="relative z-20 pt-8 md:pt-[50px]"
      />
    </div>
  );
};

export default Header;
