import { createClient } from "@/lib/supabase/client";
import { usePathname } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { TbBrandGithubFilled } from "react-icons/tb";

const LoginIcon = () => {
  // getting pathname
  const pathname = usePathname();
  // for login
  const handleLogin = async () => {
    try {
      const { error } = await createClient().auth.signInWithOAuth({
        provider: "github",
        options: {
          redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
        },
      });
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Login successful");
      }
    } catch (error) {
      toast.error("An error occurred during login");
      console.error("Login error:", error);
    }
  };

  return (
    <>
      <Button size={"icon"} className="rounded-full" onClick={handleLogin}>
        <TbBrandGithubFilled className="w-6 h-6" />
      </Button>
    </>
  );
};

export default LoginIcon;
