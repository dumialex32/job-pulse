import { AreaChart, AppWindow, Layers } from "lucide-react";

export type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const links: NavLink[] = [
  { href: "/add-job", label: "Add Job", icon: <Layers /> },
  { href: "/jobs", label: "All Jobs", icon: <AppWindow /> },
  { href: "/stats", label: "Stats", icon: <AreaChart /> },
];
