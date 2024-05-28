"use client";
import { useUser } from "@/lib/store/user";
import { createBrowserClient } from "@supabase/ssr";

import React, { useEffect } from "react";

export default function SessionProvider() {
  const setUser = useUser((state) => state.setUser);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    readUsersession();
    // eslint-disable-next-line
  }, []);
  const readUsersession = async () => {
    const { data } = await supabase.auth.getUser();

    setUser(data.user ?? undefined);
  };

  return <></>;
}
