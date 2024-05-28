import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";
import BlogTable from "./components/blog-table";

export default function Dashboard() {
  return (
    <section className="space-y-12">
      <div className="flex items-center justify-between lg:px-6">
        <h1 className="text-7xl font-title uppercase font-bold">Blogs</h1>
        <Link href={"/dashboard/blog/create"}>
          <Button className="relative rounded-full flex gap-2">
            <HiMiniPlusCircle className="w-6 h-6 text-lightmode dark:text-darkmode" />
            <span className="">Add blog</span>
          </Button>
        </Link>
      </div>
      <BlogTable />
    </section>
  );
}
