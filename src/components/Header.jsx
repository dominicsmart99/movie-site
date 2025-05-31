import React from "react";
import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItem title="Home" href="/" Icon={AiFillHome} />
        <MenuItem title="About" href="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={"/"} className="flex gap-1 items-center">
        <span className="text-2xl font-bold bg-amber-400 py-1 px-2 rounded-lg text-black">
          Next.js
        </span>
        <span className="text-xl hidden sm:inline">Movie Database</span>
      </Link>
    </div>
  );
}
