import { AboutOverview } from "@/components/sections/about-overview";

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-jetbrains-mono)]">
          Understanding the Ethereal Observer
        </h1>
        <p className="text-sm text-gray-400 font-[family-name:var(--font-jetbrains-mono)]">
          Learn how this cloud-based air monitoring system processes and presents data.
        </p>
      </div>

      {/* Konten Utama */}
      <AboutOverview />
    </div>
  );
}