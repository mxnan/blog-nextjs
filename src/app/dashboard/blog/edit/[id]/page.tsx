import { readBlogContentbyId } from "@/lib/actions/blog";
import React from "react";
import EditForm from "../components/edit-form";

export default async function page({ params }: { params: { id: string } }) {
  const { data: blog } = await readBlogContentbyId(params.id);

  return <EditForm blog={blog} />;
}
