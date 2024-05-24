"use client";
import { useUser } from "@/lib/store/user";
import { createClient } from "@/lib/supabase/client";
import React, { useEffect } from "react";

export default function SessionProvider() {
  const setUser = useUser((state) => state.setUser);
  const readUsersession = async () => {
    const { data } = await createClient().auth.getUser();
    setUser(data.user ?? undefined);
  };

  useEffect(() => {
    readUsersession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
}
