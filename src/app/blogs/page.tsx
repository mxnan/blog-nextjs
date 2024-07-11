import { Separator } from "@/components/ui/separator";
import { readBlog } from "@/lib/actions/blog";
import { formattedDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function page() {
  const { data: blogs } = await readBlog();

  return (
    <section className="space-y-8">
      <h1 className="text-7xl font-title uppercase font-bold ">blogs</h1>

      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 max-lg:p-5 lg:py-5">
        {blogs?.map((blog, index) => (
          <Link
            href={"/blog/" + blog.id}
            key={index}
            className="w-full 
            space-y-5 first:lg:col-span-2 first:md:col-span-3
           rounded-md group
            "
          >
            <div className="relative w-full h-72 md:h-64 xl:h-96">
              <Image
                priority
                src={blog.image_url}
                alt="cover"
                fill
                sizes="(max-width: 768px) 100vw,(max-width:1200px): 50vw,33vw"
                className="object-cover object-center rounded-xl
                transition-transform duration-1000 ease-in-out group-hover:scale-[99%]
                image-border
                "
              />
            </div>
            <div className="flex max-md:items-center max-md:justify-between md:flex-col">
              <h1 className="font-title capitalize text-lg sm:text-xl lg:text-2xl font-bold">
                {blog.title}
              </h1>
              <Separator
                className="max-md:hidden max-w-24 my-2
               bg-lightmode dark:bg-darkmode"
              />
              <p
                className="text-sm  font-bold 
               group-hover:text-lightmode dark:group-hover:text-darkmode
              transition-colors ease-in-out duration-1000 "
              >
                {formattedDate(blog.created_at)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
