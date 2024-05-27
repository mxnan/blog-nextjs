"use client";
import React from "react";
import { TfiSettings } from "react-icons/tfi";
import { FiUser } from "react-icons/fi";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const links = [
    {
      href: "/dashboard",
      text: "/dashboard",
      Icon: TfiSettings,
    },
    {
      href: "/dashboard/user",
      text: "/user",
      Icon: FiUser,
    },
  ];

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
              "text-sky-600 dark:text-emerald-600 border-sky-600 dark:border-emerald-600":
                pathname === href,
            })}
          />
          {text}
        </Link>
      ))}
    </div>
  );
}
