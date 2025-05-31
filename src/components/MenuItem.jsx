import React from "react";
import Link from "next/link";

export default function MenuItem({ title, href, Icon }) {
  return (
    <Link href={href} className="hover:text-amber-400">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase hidden sm:inline text-sm">{title}</p>
    </Link>
  );
}
