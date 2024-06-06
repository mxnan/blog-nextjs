"use client";
import React from "react";
import BlogForm from "../../components/blog-form";
import { BlogFormSchemaType } from "../../schema";
import { toast } from "sonner";
import { createBlog } from "@/lib/actions/blog";

export default function page() {
  const handleCreate = async (data: BlogFormSchemaType) => {
    const result = await createBlog(data);
    const { error } = JSON.parse(result);

    if (error?.message) {
      console.log(error.message);
    } else {
      toast.success("Blog created successfully");
    }
  };
  return (
    <>
      <BlogForm onHandleSubmit={handleCreate} />
    </>
  );
}

// video 2:14 blog submitted
