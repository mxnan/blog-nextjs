import React from "react";
import { PiCopy } from "react-icons/pi";
import { toast } from "sonner";

const CopyButton = ({ id }: { id: string }) => {
  const handleCopy = async () => {
    const text = document.getElementById(id)?.textContent;
    try {
      await navigator.clipboard.writeText(text!);
      toast.success("Copied to clipboard");
    } catch {
      toast.error("Failed to copy");
    }
  };
  return (
    <div
      onClick={handleCopy}
      className="hover:scale-105 p-2 rounded-lg
       hover:bg-zinc-300 dark:hover:bg-zinc-900 cursor-pointer "
    >
      <PiCopy />
    </div>
  );
};

export default CopyButton;
