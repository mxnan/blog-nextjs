"use client";
import React from "react";
import { useUser } from "@/lib/store/user";
import DropdownLogout from "./dropdown-logout";
import LoginIcon from "./login-icon";

const AuthButton = () => {
  const user = useUser((state) => state.user);
  return <>{user ? <DropdownLogout /> : <LoginIcon />}</>;
};

export default AuthButton;
