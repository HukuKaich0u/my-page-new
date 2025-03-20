"use client";
import MainButton from "@/components/MainButton";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <div>
      <p className="text-center my-1  p-3 text-[14px] text-white">
        Here is my profile. Last updated: march 2025
      </p>
      <div className="flex justify-center items-center mb-2">
        <Link href="/about">
          <MainButton isActive={pathName === "/about"}>ABOUT</MainButton>
        </Link>
        <Link href="/">
          <MainButton isActive={pathName === "/"}>HOME</MainButton>
        </Link>
        <Link href="/etc">
          <MainButton isActive={pathName === "/etc"}>ETC</MainButton>
        </Link>
      </div>
    </div>
  );
};

export default Header;
