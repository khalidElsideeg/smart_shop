import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <h3 className="text-3xl font-semibold hover:text-orange-500 cursor-pointer duration-200 group">
        <span className="text-orange-500 group-hover:text-black font-bold">
          S
        </span>
        mart.
      </h3>
    </Link>
  );
};

export default Logo;
