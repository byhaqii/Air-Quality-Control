"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/history", label: "History" },
  { href: "/dashboard/devices", label: "Devices" },
  { href: "/dashboard/about", label: "About" },
  { href: "/dashboard/settings", label: "Settings" },
];

type SidebarProps = {
  isOpen: boolean;
  onToggle: () => void;
};

export function Sidebar({ isOpen, onToggle }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`w-full border-b border-slate-800/80 bg-[#020b18] px-6 py-7 md:fixed md:inset-y-0 md:left-0 md:flex md:flex-col md:border-b-0 md:border-r md:border-r-cyan-950/60 md:px-6 md:py-8 md:transition-[width] md:duration-300 ${
        isOpen ? "md:w-[28rem]" : "md:w-24"
      }`}
    >
      <div className={`mb-10 flex items-center gap-4 ${isOpen ? "md:mb-12" : "md:mb-10 md:justify-center"}`}>
        <div className="h-14 w-14 rounded-full bg-slate-700/70 ring-1 ring-slate-600/60 md:h-16 md:w-16" />
        <div>
          <h2 className={`font-semibold leading-tight text-cyan-100 ${isOpen ? "text-2xl md:text-3xl" : "hidden"}`}>
            Atmospheric In...
          </h2>
          <p className={`mt-1 text-sm font-medium text-slate-400 ${isOpen ? "block md:text-base" : "hidden"}`}>
            Ethereal Observer
          </p>
        </div>
        <button
          type="button"
          onClick={onToggle}
          className="ml-auto rounded-full border border-slate-700 bg-slate-900/80 px-3 py-2 text-sm font-semibold text-slate-200 hover:border-cyan-400/40 hover:text-cyan-100 md:ml-0 md:self-start"
          aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
        >
          {isOpen ? "Close" : "Open"}
        </button>
      </div>

      <nav className={`flex gap-4 overflow-x-auto pb-6 md:flex-col md:overflow-visible ${isOpen ? "" : "md:items-center"}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex w-full items-center gap-4 rounded-xl px-5 py-4 text-lg font-semibold tracking-[0.01em] transition md:px-6 md:py-4 ${
                isActive
                  ? "bg-cyan-400/18 text-cyan-50 ring-1 ring-cyan-400/40"
                  : "text-slate-300 hover:bg-slate-900/80 hover:text-slate-50"
              }`}
              title={item.label}
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-slate-900/60 text-sm font-bold text-cyan-200 ring-1 ring-slate-700/80">
                {item.label.slice(0, 1)}
              </span>
              <span className={`${isOpen ? "block" : "hidden md:hidden"}`}>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <button className={`mt-12 w-full rounded-xl bg-cyan-400 px-6 py-4 text-lg font-semibold text-slate-950 hover:bg-cyan-300 md:mt-auto ${isOpen ? "md:block" : "md:px-3 md:py-4 md:text-sm"}`}>
        Refresh Sensors
      </button>
    </aside>
  );
}
