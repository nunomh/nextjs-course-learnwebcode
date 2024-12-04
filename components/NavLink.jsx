"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink(props) {
  const pathname = usePathname();
  const active = pathname === props.customPath;

  return (
    <Link
      className={active ? "opacity-100" : "opacity-50 hover:opacity-65"}
      href={props.customPath}
    >
      {props.textToDisplay}
    </Link>
  );
}
