import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { HiMiniPlusCircle } from "react-icons/hi2";
import BlogTable from "./components/blog-table";

export default function Dashboard() {
  return (
    <section className="space-y-16">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Blogs</h1>
        <Link href={"/dashboard/blog/create"}>
          <Button className="relative rounded-full flex gap-2">
            <HiMiniPlusCircle className="w-6 h-6 text-sky-400 dark:text-emerald-600" />
            <span className="">Add blog</span>
          </Button>
        </Link>
      </div>
      <BlogTable />
    </section>
  );
}
