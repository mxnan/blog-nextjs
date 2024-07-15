import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { readBlogAdmin, updateBlogbyId } from "@/lib/actions/blog";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { PiEyeglassesLight } from "react-icons/pi";
import DeleteAlert from "./delete-alert";
import SwitchForm from "./switch-form";
import { BlogFormSchemaType } from "../schema";
import Link from "next/link";

const BlogTable = async () => {
  const { data: blogs } = await readBlogAdmin();

  return (
    <div className="relative overflow-x-auto p-5 rounded-md">
      <div className="sm:w-[675px] md:w-full">
        <div className="grid grid-cols-5 p-5  ">
          <h1 className="col-span-2 font-title font-bold  sm:text-xl">Title</h1>
          <h1 className="font-title font-bold  sm:text-xl">Premium</h1>
          <h1 className="font-title font-bold max-sm:ml-8  sm:text-xl">
            Publish
          </h1>
        </div>
        <Separator
          orientation="horizontal"
          className="bg-lightmode dark:bg-darkmode max-w-3xl my-4"
        />
        {blogs?.map((blog, index) => {
          const updatePremium = updateBlogbyId.bind(null, blog.id, {
            is_premium: !blog.is_premium,
          } as BlogFormSchemaType);

          const updatePublish = updateBlogbyId.bind(null, blog.id, {
            is_published: !blog.is_published,
          } as BlogFormSchemaType);
          return (
            <div key={index}>
              <div className="grid grid-cols-5 items-center p-5">
                <h1 className="col-span-2">{blog.title}</h1>
                <SwitchForm
                  checked={blog.is_premium}
                  onToggle={updatePremium}
                  name="Premium"
                />
                <SwitchForm
                  checked={blog.is_published}
                  onToggle={updatePublish}
                  name="Published"
                />

                <Actions id={blog.id} />
              </div>
              <Separator
                orientation="horizontal"
                className="bg-lightmode dark:bg-darkmode max-w-sm my-4"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogTable;

export const Actions = ({ id }: { id: string }) => {
  return (
    <div className="flex items-center gap-5 flex-wrap">
      <Link href={"/blog/" + id}>
        <Button variant={"outline"} className="flex items-center gap-2">
          <PiEyeglassesLight className="w-5 h-5" /> View
        </Button>
      </Link>
      <DeleteAlert blogId={id} />
      <Link href={"/dashboard/blog/edit/" + id}>
        <Button variant={"outline"} className="flex items-center gap-2">
          <FiEdit2 className="w-5 h-5" /> Edit
        </Button>
      </Link>
    </div>
  );
};
