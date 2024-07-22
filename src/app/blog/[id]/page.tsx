import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { IBlog } from "@/lib/types";
import { formattedDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogContent from "./components/blog-content";

export default async function page({ params }: { params: { id: string } }) {
  const response = await fetch(
    process.env.SITE_URL + "/api/blog?id=" + params.id
  );

  if (!response.ok) {
    // Handle server errors
    return (
      <div className="flexcenter min-h-screen flex-col gap-8">
        <h1 className="text-4xl font-title font-bold">An error occurred</h1>
        <Link href={"/dashboard"}>
          <Button className="flex items-center gap-2">Go to Dashboard</Button>
        </Link>
      </div>
    );
  }

  const { data: blog } = (await response.json()) as { data: IBlog | null };

  if (!blog?.id) {
    // Handle unpublished blog
    return (
      <div className="flexcenter min-h-screen flex-col gap-8">
        <h1 className="text-4xl font-title font-bold">Blog not found!</h1>
        <Link href={"/dashboard"}>
          <Button className="flex items-center gap-2">Go to Dashboard</Button>
        </Link>
      </div>
    );
  }

  return (
    <section>
      <div className="flex items-center gap-8">
        <h1 className="text-3xl font-semibold">{blog?.title || ""}</h1>
        <Separator
          orientation="vertical"
          className="bg-lightmode dark:bg-darkmode h-6"
        />
        <p className="text-sm ">{formattedDate(blog?.created_at || "")}</p>
      </div>
      <div className="w-full h-96 relative">
        <Image
          priority
          src={blog?.image_url || ""}
          alt="cover"
          fill
          sizes="(max-width: 768px) 100vw,(max-width:1200px): 50vw,33vw"
          className="object-cover object-center rounded-xl
                transition-transform duration-1000 ease-in-out group-hover:scale-[99%]
                image-border
                "
        />
      </div>
      <BlogContent blogId={blog?.id || ""} />
    </section>
  );
}
