import { Separator } from "@/components/ui/separator";
import { IBlog } from "@/lib/types";
import { formattedDate } from "@/lib/utils";
import React from "react";

export default async function page({ params }: { params: { id: string } }) {
  const { data: blog } = (await fetch(
    process.env.SITE_URL + "/api/blog?id=" + params.id
  ).then((res) => res.json())) as { data: IBlog };
  return (
    <section>
      <div className="flex items-center gap-8">
        <h1 className="text-3xl font-semibold">{blog?.title}</h1>
        <Separator
          orientation="vertical"
          className="bg-lightmode dark:bg-darkmode h-6"
        />
        <p className="text-sm ">{formattedDate(blog?.created_at || "")}</p>
      </div>
    </section>
  );
}
