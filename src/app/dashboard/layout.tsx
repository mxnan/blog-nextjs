import React from "react";
import NavLinks from "./components/nav-links";
import { Separator } from "@/components/ui/separator";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-8">
      <NavLinks />
      <Separator
        orientation="horizontal"
        className="bg-lightmode dark:bg-darkmode max-w-2xl"
      />
      {children}
    </div>
  );
}
