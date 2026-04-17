export type SidebarNavItem = {
  href: string;
  label: string;
};

export const SIDEBAR_TITLE = "Atmospheric In...";
export const SIDEBAR_SUBTITLE = "Ethereal Observer";

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/history", label: "History" },
  { href: "/dashboard/devices", label: "Devices" },
  { href: "/dashboard/about", label: "About" },
  { href: "/dashboard/settings", label: "Settings" },
];