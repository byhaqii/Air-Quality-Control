import type { ReactNode } from "react";
import { Sidebar } from "@/components/layout/Sidebar";

type DashboardShellProps = {
  children: ReactNode;
};

export function DashboardShell({ children }: DashboardShellProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_35%_0%,rgba(56,189,248,0.16),transparent_35%),radial-gradient(circle_at_90%_80%,rgba(14,116,144,0.22),transparent_45%),#020617] text-slate-100">
      <div className="flex min-h-screen w-full flex-col">
        <Sidebar />
        <main className="flex-1 px-5 py-6 md:ml-80 md:px-10 md:py-8">{children}</main>
      </div>
    </div>
  );
}
