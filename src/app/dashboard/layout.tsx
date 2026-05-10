import type { ReactNode } from "react";
import Navbar from "@/components/layout/navbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a]">
      <Navbar />

      {/* pt-20: Memberi ruang untuk Header atas (Mobile & Desktop)
        pb-32: Memberi ruang EXTRA di bawah agar tidak tertutup Bottom Nav (Mobile)
        md:pb-10: Kembali ke padding normal saat di Desktop
      */}
      <main className="flex-1 pt-20 pb-32 md:pb-10 px-4 md:px-8">
        <div className="max-w-7xl mx-auto w-full">
          {children}
        </div>
      </main>
    </div>
  );
}