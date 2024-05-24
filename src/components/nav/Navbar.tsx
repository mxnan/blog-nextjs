"use client";
import React from "react";
import ToggleTheme from "../theme-toggle";
import Link from "next/link";
import Login from "./login";
import { useUser } from "@/lib/store/user";
import Profile from "./profile";

export default function Navbar() {
  const user = useUser((state) => state.user);
  console.log(user);
  return (
    <nav className="flex items-center justify-between">
      <ToggleTheme />
      <div className="flex font-title font-semibold items-center gap-3">
        <Link href="/" className="">
          Home
        </Link>
        {user ? <Profile /> : <Login />}
      </div>
    </nav>
  );
}
