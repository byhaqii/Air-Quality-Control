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
    <aside className="w-full border-b border-slate-800/80 bg-[#020b18] px-7 py-8 md:fixed md:inset-y-0 md:left-0 md:flex md:w-80 md:flex-col md:border-b-0 md:border-r md:border-r-cyan-950/60 md:px-7 md:py-10">
      <div className="mb-12 flex items-center gap-5 md:mb-14">
        <div className="h-14 w-14 rounded-full bg-slate-700/70" />
        <div>
          <h2 className="text-xl font-semibold leading-tight text-cyan-200">Atmospheric In...</h2>
          <p className="mt-1 text-sm text-slate-500">Ethereal Observer</p>
        </div>
      </div>

      <nav className="flex gap-5 overflow-x-auto pb-5 md:flex-col md:overflow-visible">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-6 py-4 text-lg font-medium transition ${
                isActive
                  ? "bg-cyan-400/10 text-cyan-200 ring-1 ring-cyan-400/30"
                  : "text-slate-400 hover:bg-slate-900/70 hover:text-slate-200"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button className="mt-12 w-full rounded-xl bg-cyan-400 px-7 py-4 text-lg font-semibold text-slate-950 hover:bg-cyan-300 md:mt-auto">
        Refresh Sensors
      </button>
    </aside>
  );
}
