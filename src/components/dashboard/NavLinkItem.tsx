"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { NavLink } from "@/utils/links";
import { usePathname } from "next/navigation";

const NavLinkItem = ({ link }: { link: NavLink }) => {
  const pathname = usePathname();

  return (
    <Button asChild variant={pathname === link.href ? "default" : "link"}>
      <Link href={link.href} className="flex items-center gap-x-2">
        {link.icon} <span className="capitalize">{link.label}</span>
      </Link>
    </Button>
  );
};

export default NavLinkItem;
