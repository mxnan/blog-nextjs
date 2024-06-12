"use server";

import { BlogFormSchemaType } from "@/app/dashboard/schema";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { Database } from "../types/supabase";
import { revalidatePath } from "next/cache";

const DASHBOARD = "/dashboard";
const cookieStore = cookies();
const supabase = createServerClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
    },
  }
);

//function to create blog and save to supabase
export async function createBlog(data: BlogFormSchemaType) {
  const { content, ...blogData } = data;

  const resultBlog = await supabase
    .from("blog")
    .insert(blogData)
    .select("id")
    .single();

  if (resultBlog.error) {
    return JSON.stringify(resultBlog);
  } else {
    const result = await supabase
      .from("blog_content")
      .insert({ blog_id: resultBlog.data.id!, content });
    //revalidation
    return JSON.stringify(result);
  }
}

//function to read blog and display on dashboard
export async function readBlog() {
  return supabase
    .from("blog")
    .select("*")
    .order("created_at", { ascending: true });
}

//function to delete
export async function deleteBlogbyId(blog_id: string) {
  const result = await supabase.from("blog").delete().eq("id", blog_id);
  revalidatePath(DASHBOARD);
  return JSON.stringify(result);
}


//function for switch form
export async function updateBlogbyId(blog_id: string, data: BlogFormSchemaType) {
  const result = await supabase.from("blog").update(data).eq("id", blog_id);
  revalidatePath(DASHBOARD);
  return JSON.stringify(result);
}
