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
    <aside className="w-full border-b border-slate-800/80 bg-[#020b18] px-6 py-7 md:fixed md:inset-y-0 md:left-0 md:flex md:w-72 md:flex-col md:border-b-0 md:border-r md:border-r-cyan-950/60 md:px-6 md:py-8">
      <div className="mb-10 flex items-center gap-5 md:mb-12">
        <div className="h-12 w-12 rounded-full bg-slate-700/70" />
        <div>
          <h2 className="text-lg font-semibold leading-tight text-cyan-200">Atmospheric In...</h2>
          <p className="mt-0.5 text-sm text-slate-500">Ethereal Observer</p>
        </div>
      </div>

      <nav className="flex gap-4 overflow-x-auto pb-4 md:flex-col md:overflow-visible">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-lg px-5 py-3.5 text-base font-medium transition ${
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

      <button className="mt-10 w-full rounded-xl bg-cyan-400 px-6 py-3.5 text-base font-semibold text-slate-950 hover:bg-cyan-300 md:mt-auto">
        Refresh Sensors
      </button>
    </aside>
  );
}
