import React from "react";
import ToggleTheme from "../theme-toggle";
import Link from "next/link";
import AuthButton from "./auth-button";


export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <ToggleTheme />
      <div className="flex font-title font-semibold items-center gap-3">
        <Link href="/" className="">
          Home
        </Link>
        <AuthButton />
      </div>
    </nav>
  );
}
