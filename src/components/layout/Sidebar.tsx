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

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full border-b border-slate-800/80 bg-[#020b18] px-8 py-9 md:fixed md:inset-y-0 md:left-0 md:flex md:w-96 md:flex-col md:border-b-0 md:border-r md:border-r-cyan-950/60 md:px-8 md:py-10">
      <div className="mb-12 flex items-center gap-5 md:mb-14">
        <div className="h-16 w-16 rounded-full bg-slate-700/70 ring-1 ring-slate-600/60" />
        <div>
          <h2 className="text-2xl font-semibold leading-tight text-cyan-100">Atmospheric In...</h2>
          <p className="mt-1 text-sm font-medium text-slate-400">Ethereal Observer</p>
        </div>
      </div>

      <nav className="flex gap-5 overflow-x-auto pb-5 md:flex-col md:overflow-visible">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`w-full rounded-xl px-7 py-4.5 text-lg font-semibold tracking-[0.01em] transition ${
                isActive
                  ? "bg-cyan-400/15 text-cyan-100 ring-1 ring-cyan-400/35"
                  : "text-slate-300 hover:bg-slate-900/80 hover:text-slate-100"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button className="mt-12 w-full rounded-xl bg-cyan-400 px-7 py-4.5 text-lg font-semibold text-slate-950 hover:bg-cyan-300 md:mt-auto">
        Refresh Sensors
      </button>
    </aside>
  );
}
