"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { PiEyeglassesLight } from "react-icons/pi";
import { IoStarOutline } from "react-icons/io5";
import { SlRocket } from "react-icons/sl";
import { MdSaveAlt } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import MarkdownPreview from "@/components/markdown/markdown-preview";
import { FormSchema } from "@/lib/types";

export default function BlogForm() {
  const [isPreview, setIsPreview] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    mode: "all",
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
      image_url: "",
      content: "",
      is_published: true,
      is_premium: false,
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
        className="max-w-3xl w-full mx-auto flex flex-col gap-8 "
      >
        {/* top div */}
        <div className="flex  justify-between ">
          {/* top left div */}
          <div className="flex max-sm:flex-wrap gap-2 sm:gap-4 lg:gap-8">
            {/* Preview button */}
            <span
              role="button"
              className="flex items-center gap-2 w-min px-3 py-2 
            rounded-full bg-stone-800/80 text-stone-50
             hover:bg-stone-800 dark:bg-stone-50/90
              dark:text-zinc-800 dark:hover:bg-stone-50"
              tabIndex={0}
              onClick={() =>
                setIsPreview(
                  !isPreview && !form.getFieldState("image_url").invalid
                )
              }
            >
              {isPreview ? (
                <>
                  <FiEdit2 className="w-5 h-5" />
                  Edit
                </>
              ) : (
                <>
                  <PiEyeglassesLight className="w-5 h-5" />
                  Preview
                </>
              )}
            </span>
            {/* is_premium switch */}
            <FormField
              control={form.control}
              name="is_premium"
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
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
            {/* is_published switch */}
            <FormField
              control={form.control}
              name="is_published"
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
                      <Switch
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </div>
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button
            disabled={!form.formState.isValid}
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

        {/* title field */}
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "px-2 w-full flex items-center break-words gap-4",
                    isPreview ? "divide-x-0" : "divide-x"
                  )}
                >
                  <Input
                    placeholder="Title ..."
                    {...field}
                    className={cn(
                      "border-none placeholder:text-base placeholder:text-stone-400 placeholder:dark:text-stone-600 text-lg font-medium leading-relaxed",
                      isPreview ? "w-0 p-0" : "w-full "
                    )}
                  />
                  <div
                    className={cn(
                      "lg:px-4",
                      isPreview
                        ? "mx-auto w-full lg:w-5/6 "
                        : "w-1/2 lg:block hidden"
                    )}
                  >
                    <h1 className="text-2xl font-medium font-title">
                      {form.getValues().title}
                    </h1>
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("title").invalid &&
                form.getValues().title && <FormMessage />}
            </FormItem>
          )}
        />

        {/* image_url field */}
        <FormField
          control={form.control}
          name="image_url"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "px-2 w-full flex items-center break-words gap-4",
                    isPreview ? "divide-x-0" : "divide-x"
                  )}
                >
                  <Input
                    placeholder="https://images.unsplash.com/**"
                    {...field}
                    className={cn(
                      "border-none placeholder:text-base placeholder:text-stone-400 placeholder:dark:text-stone-600 text-sm font-medium leading-relaxed ",
                      isPreview ? "w-0 p-0" : "w-full"
                    )}
                  />
                  <div
                    className={cn(
                      "lg:px-4",
                      isPreview
                        ? "mx-auto w-full lg:w-5/6 "
                        : "w-1/2 lg:block hidden"
                    )}
                  >
                    {!isPreview ? (
                      <>
                        {/* Preview button */}
                        <span
                          role="button"
                          className="flex items-center gap-2 w-min px-3 py-2 
                             rounded-full bg-stone-800/80 text-stone-50
                              hover:bg-stone-800 dark:bg-stone-50/90
                          dark:text-zinc-800 dark:hover:bg-stone-50"
                          tabIndex={0}
                          onClick={() =>
                            setIsPreview(
                              !isPreview &&
                                !form.getFieldState("image_url").invalid
                            )
                          }
                        >
                          <PiEyeglassesLight className="w-5 h-5" />
                          Preview
                        </span>
                      </>
                    ) : (
                      <div className="relative  h-80 mt-8 image-border rounded-xl">
                        <Image
                          src={form.getValues().image_url}
                          alt="Preview"
                          fill
                          className="object-cover object-center rounded-xl"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("image_url").invalid &&
                form.getValues().image_url && (
                  <div className="p-2">
                    <FormMessage />
                  </div>
                )}
            </FormItem>
          )}
        />

        {/* content field */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div
                  className={cn(
                    "px-2 w-full flex items-center break-words ",
                    isPreview && " mt-12"
                  )}
                >
                  <Textarea
                    placeholder="Content ..."
                    {...field}
                    className={cn(
                      "border-none placeholder:text-base resize-none h-full placeholder:text-stone-400 placeholder:dark:text-stone-600 text-sm font-medium leading-relaxed",
                      isPreview ? "w-0 hidden h-full" : "w-full min-h-96"
                    )}
                  />
                  <div
                    className={cn(
                      "hidden",
                      isPreview && " block space-y-8 w-full "
                    )}
                  >
                    <MarkdownPreview content={form.getValues().content} />
                  </div>
                </div>
              </FormControl>
              {form.getFieldState("content").invalid &&
                form.getValues().content && <FormMessage />}
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
