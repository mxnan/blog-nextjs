import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { FiEdit2 } from "react-icons/fi";
import { PiEyeglassesLight } from "react-icons/pi";
import { TbTrashX } from "react-icons/tb";

const BlogTable = () => {
  return (
    <div className="relative overflow-x-auto">
      <div
        className="border-b border-stone-300 dark:border-zinc-700
     shadow-lg dark:shadow-zinc-700
      w-[700px] md:w-full
       rounded-lg"
      >
        <div className="grid grid-cols-5 p-5  ">
          <h1 className="col-span-2">Title</h1>
          <h1>Premium</h1>
          <h1>Publish</h1>
        </div>
        <Separator
          orientation="horizontal"
          className="bg-sky-200 dark:bg-emerald-900 max-w-3xl my-4"
        />
        <div className="grid grid-cols-5 items-center p-5">
          <h1 className="col-span-2">Blog 1</h1>
          <Switch defaultChecked={false} />
          <Switch defaultChecked={true} />

          <Actions />
        </div>
      </div>
    </div>
  );
};

export default BlogTable;

const Actions = () => {
  return (
    <div className="flex items-center gap-5 flex-wrap">
      <Button variant={"outline"} className="flex items-center gap-2">
        <PiEyeglassesLight className="w-5 h-5" /> View
      </Button>
      <Button variant={"outline"} className="flex items-center gap-2">
        <TbTrashX className="w-5 h-5" /> Delete
      </Button>
      <Button variant={"outline"} className="flex items-center gap-2">
        <FiEdit2 className="w-5 h-5" /> View
      </Button>
    </div>
  );
};
