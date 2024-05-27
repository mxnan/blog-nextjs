import { usePathname } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { TbBrandGithubFilled } from "react-icons/tb";
import { createBrowserClient } from "@supabase/ssr";

const LoginIcon = () => {
  // getting pathname
  const pathname = usePathname();
  // for login
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleLogin = () => {
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback?next=${pathname}`,
      },
    });
    toast.success("Logged in");
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
