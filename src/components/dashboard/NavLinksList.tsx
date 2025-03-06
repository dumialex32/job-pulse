import { links } from "@/utils/links";
import NavLinkItem from "./NavLinkItem";

const NavLinksList = () => {
  return (
    <ul className="flex flex-col gap-y-4">
      {links.map((link) => (
        <NavLinkItem key={link.label} link={link} />
      ))}
    </ul>
  );
};

export default NavLinksList;
