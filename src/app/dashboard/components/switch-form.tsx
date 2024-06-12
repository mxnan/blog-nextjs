"use client";
import { Switch } from "@/components/ui/switch";
import React from "react";
import { toast } from "sonner";

export default function SwitchForm({
  checked,
  onToggle,
  name,
}: {
  checked: boolean;
  onToggle: () => Promise<string>;
  name: string;
}) {
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const { error } = JSON.parse(await onToggle());
    if (error?.message) {
      toast.error(error.message);
    } else {
      toast.success("Succesfully updated : " + `${name}`);
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <Switch checked={checked} type="submit" />
    </form>
  );
}
