import React from "react";
import ToggleTheme from "../theme-toggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { VscGithubAlt } from "react-icons/vsc";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      <ToggleTheme />
      <div className="flex font-title items-center gap-3">
        <Link href="/">Home</Link>
        <Button variant={"outline"} className="flex text-sm items-center gap-2">
          <VscGithubAlt strokeWidth={1.5} />
          Login
        </Button>
      </div>
    </nav>
  );
}
