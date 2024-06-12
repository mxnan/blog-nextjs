"use client";
import BlogForm from "@/app/dashboard/components/blog-form";
import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { updateBlogDetailbyId } from "@/lib/actions/blog";
import { IBlogDetail } from "@/lib/types";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

export default function EditForm({ blog }: { blog: IBlogDetail }) {
  const router = useRouter();
  const handleEdit = async (data: BlogFormSchemaType) => {
    const result = await updateBlogDetailbyId(blog?.id!, data);
    const { error } = JSON.parse(result);

    if (error?.message) {
      console.log(error.message);
    } else {
      toast.success("Blog edited successfully : " + `${blog?.title}`);
      router.push("/dashboard");
    }
  };

  return <BlogForm onHandleSubmit={handleEdit} blog={blog} />;
}
