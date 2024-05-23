import React from "react";
import ToggleTheme from "../theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { VscGithubAlt } from "react-icons/vsc";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <ToggleTheme />
      <div className="flex font-title font-semibold items-center gap-3">
        <Link href="/" className="">
          Home
        </Link>
        <Button size={"icon"} variant={"default"} className="p-2 rounded-full ">
          <VscGithubAlt className="h-6 w-6" strokeWidth={1.2} />
        </Button>
      </div>
    </nav>
  );
}
