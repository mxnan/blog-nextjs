"use client";
import { Button } from "@/components/ui/button";
import React, { useTransition } from "react";
import { TbTrashX } from "react-icons/tb";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteBlogbyId } from "@/lib/actions/blog";
import { toast } from "sonner";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";

const DeleteAlert = ({ blogId }: { blogId: string }) => {
  const [isPending, startTransition] = useTransition();
  const onSubmit = async (e: any) => {
    e.preventDefault();
    startTransition(async () => {
      const result = await deleteBlogbyId(blogId);
      const { error } = JSON.parse(result);

      if (error?.message) {
        toast.error(error.message);
      } else {
        toast.success("Blog deleted successfully");
      }
    });
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button variant={"outline"} className="flex items-center gap-2">
            <TbTrashX className="w-5 h-5" /> Delete
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <form onSubmit={onSubmit}>
              <Button className="flex items-center gap-2">
                <AiOutlineLoading3Quarters
                  className={cn("animate-spin", { hidden: !isPending })}
                />
                Continue
              </Button>
            </form>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default DeleteAlert;
