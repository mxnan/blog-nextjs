import { useUser } from "@/lib/store/user";
import Image from "next/image";
import React from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Link from "next/link";
import { Button } from "../ui/button";
import { TfiSettings } from "react-icons/tfi";
import { IoLogOutOutline } from "react-icons/io5";
import { toast } from "sonner";
import { createBrowserClient } from "@supabase/ssr";

const DropdownLogout = () => {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  // for reading user data
  const user = useUser((state) => state.user);
  // for logout
  const setUser = useUser((state) => state.setUser);
  // for logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    toast.success("Logged out");
    setUser(undefined);
  };
  // for dashboard Link
  const isAdmin = user?.user_metadata.role === "admin";
  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Image
            src={user?.user_metadata.avatar_url}
            alt={user?.user_metadata.full_name}
            width={40}
            height={40}
            className="rounded-full ring-2 ring-sky-500 dark:ring-emerald-500"
          />
        </PopoverTrigger>
        <PopoverContent className="flex flex-col gap-3">
          <div className=" text-sm">
            <p className="font-semibold">
              @{user?.user_metadata.preferred_username} |{" "}
              {user?.user_metadata.full_name}
            </p>
            <p>{user?.user_metadata.email}</p>
          </div>
          {isAdmin && (
            <Link href="/dashboard">
              <Button className="flex gap-3 group ">
                Dashboard{" "}
                <TfiSettings
                  size={18}
                  strokeWidth={0.5}
                  className="group-hover:rotate-45 transition-transform ease-in-out duration-500"
                />
              </Button>
            </Link>
          )}
          {/* dashboard link */}

          {/* logout button */}
          <Button
            onClick={handleLogout}
            className="flex w-min justify-start gap-3 group "
          >
            Log-Out
            <IoLogOutOutline
              size={18}
              strokeWidth={0.5}
              className="group-hover:-rotate-12 transition-transform ease-in-out duration-500"
            />
          </Button>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default DropdownLogout;
