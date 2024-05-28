import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { TiLocationArrow } from "react-icons/ti";
import { Footerlinks } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="relative pb-10">
      <div className="flex-1 space-y-8 max-w-xl mx-auto">
        <div className=" relative flex justify-around">
          <ul className="space-y-4">
            {Footerlinks.left.map((item, index: number) => (
              <li
                className="pb-4 hover:bg-[url('/icons/custom-underline.svg')] group"
                key={index}
              >
                <Link
                  className="p-1 flex items-center gap-2 text-secondary "
                  href={item.href}
                >
                  {item.name}
                  <TiLocationArrow className="group-hover:translate-x-4 text-lightmode dark:text-darkmode group-hover:rotate-45 transition-transform ease-in-out duration-500" />
                </Link>
              </li>
            ))}
          </ul>
          <Separator
            orientation="vertical"
            className=" absolute"
          />
          <ul className="space-y-4">
            {Footerlinks.right.map((item, index: number) => (
              <li
                className="pb-4 hover:bg-[url('/icons/custom-underline.svg')] group"
                key={index}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 flex items-center gap-2 text-secondary "
                  href={item.href}
                >
                  {item.name}
                  <TiLocationArrow className="group-hover:translate-x-4 text-lightmode dark:text-darkmode group-hover:rotate-45 transition-transform ease-in-out duration-500" />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="text-center ">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/mxnan"
            className="mr-2 pb-2 font-title hover:bg-[url('/icons/custom-underline.svg')]"
          >
            mxnan
          </a>
          © 2024
        </p>
      </div>
    </footer>
  );
}
