"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { PiEyeglassesLight } from "react-icons/pi";
import { Switch } from "@/components/ui/switch";
import { IoStarOutline } from "react-icons/io5";
import { SlRocket } from "react-icons/sl";
import { MdSaveAlt } from "react-icons/md";
import { Separator } from "@/components/ui/separator";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function BlogForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast.success(
      "You submitted the following values: " + JSON.stringify(data)
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-3xl w-full mx-auto flex flex-col gap-4"
      >
        {/* top div */}
        <div className="flex  justify-between ">
          <div className="flex max-sm:flex-wrap gap-2 sm:gap-4 lg:gap-8">
            <span
              role="button"
              className="flex items-center gap-2 w-min px-3 py-2 
            rounded-full bg-stone-800/80 text-stone-50
             hover:bg-stone-800 dark:bg-stone-50/90
              dark:text-zinc-800 dark:hover:bg-stone-50"
              tabIndex={0}
            >
              <PiEyeglassesLight className="w-5 h-5" />
              Preview
            </span>
            {/*  */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className="flex items-center gap-2 w-min px-3 py-2 
            rounded-full bg-stone-800/80 text-stone-50
            hover:bg-stone-800 dark:bg-stone-50/90
             dark:text-zinc-800 dark:hover:bg-stone-50"
                    >
                      <IoStarOutline className="w-5 h-5" />
                      <span>Premium</span>
                      <Switch defaultChecked={false} {...field} />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {/*  */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div
                      className="flex items-center gap-2 w-min px-3 py-2 
            rounded-full bg-stone-800/80 text-stone-50
            hover:bg-stone-800 dark:bg-stone-50/90
             dark:text-zinc-800 dark:hover:bg-stone-50"
                    >
                      <SlRocket className="w-5 h-5" />
                      <span>Publish</span>
                      <Switch defaultChecked={false} {...field} />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            type="submit"
            className="flex max-xs:flex-col items-center rounded-full gap-2"
          >
            <MdSaveAlt className="w-5 h-5 text-lightmode dark:text-darkmode" />
            Save
          </Button>
        </div>
        <Separator
          orientation="horizontal"
          className="bg-lightmode dark:bg-darkmode my-6 max-w-lg"
        />
        {/*  */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*  */}
        {/*  */}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        {/*  */}
      </form>
    </Form>
  );
}
