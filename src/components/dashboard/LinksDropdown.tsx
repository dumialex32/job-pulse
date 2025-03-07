import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { AlignLeft } from "lucide-react";
import { links } from "@/utils/links";
import Link from "next/link";

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant="outline" size="icon">
          <AlignLeft />
          <span className="sr-only">Toggle links</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="w-52 lg:hidden"
        sideOffset={25}
        align="start"
      >
        {links.map((link) => {
          return (
            <DropdownMenuItem asChild key={link.href}>
              <Link className="w-full" href={link.href}>
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
