"use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { links } from "@/lib/constants";

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex gap-6">
      {links.map(({ href, text, Icon }, index) => (
        <Link
          href={href}
          key={index}
          className={cn(
            "flex items-center gap-2 font-title hover:underline underline-offset-4",
            { "text-zinc-400 dark:text-stone-500": pathname === href }
          )}
        >
          <Icon
            className={cn("rounded-full border p-1 w-6 h-6", {
              "text-lightmode dark:text-darkmode border-lightmode dark:border-darkmode":
                pathname === href,
            })}
          />
          {text}
        </Link>
      ))}
    </div>
  );
}
