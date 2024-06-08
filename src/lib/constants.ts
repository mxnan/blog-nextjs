import { FiUser } from "react-icons/fi";
import { TfiSettings } from "react-icons/tfi";

export const Footerlinks: Record<string, { name: string; href: string }[]> = {
  left: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blogs",
      href: "/blogs",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ],
  right: [
    {
      name: "Github",
      href: "https://github.com/mxnan",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/mxnan",
    },
  ],
};

export const links: { href: string; text: string; Icon: any }[] = [
  {
    href: "/dashboard",
    text: "/dashboard",
    Icon: TfiSettings,
  },
  {
    href: "/dashboard/user",
    text: "/user",
    Icon: FiUser,
  },
];
