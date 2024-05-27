import React from "react";
import NavLinks from "./components/nav-links";
import { Separator } from "@/components/ui/separator";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <NavLinks />
      <Separator
        orientation="horizontal"
        className="bg-sky-200 dark:bg-emerald-900 max-w-2xl"
      />
      {children}
    </div>
  );
}
