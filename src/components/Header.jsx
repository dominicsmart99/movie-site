import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import SearchBox from "./SearchBox";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import ThemeSwitch from "./ThemeSwitch";

export default function Header() {
  return (
    <div className="grid grid-cols-3 items-center w-full mx-auto p-4">
      <div className="flex gap-4">
        <MenuItem title="Home" href="/" Icon={AiFillHome} />
        <MenuItem title="About" href="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex justify-center w-full">
        <SearchBox />
      </div>
      <div className="flex justify-end items-center gap-4">
        <ThemeSwitch />
        <Link href={"/"} className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-400 py-1 px-2 rounded-lg">
            KinoSphere
          </span>
        </Link>
      </div>
    </div>
  );
}
