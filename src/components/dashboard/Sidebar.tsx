import Logo from "../Logo";
import NavLinksList from "./NavLinksList";

const Sidebar = () => {
  return (
    <aside className="py-4 px-8 bg-muted h-full">
      <div className="flex justify-center">
        <Logo />
      </div>

      <div className="mt-20">
        <NavLinksList />
      </div>
    </aside>
  );
};

export default Sidebar;
