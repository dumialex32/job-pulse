import ThemeToggle from "../ThemeToggle";
import LinksDropdown from "./LinksDropdown";
import { UserButton } from "@clerk/nextjs";

const DashboardNavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-muted py-4 sm:px-16 lg:px-24 px-4">
      <LinksDropdown />

      <div className="flex gap-4 items-center">
        <ThemeToggle />
        <UserButton />
      </div>
    </nav>
  );
};

export default DashboardNavBar;
