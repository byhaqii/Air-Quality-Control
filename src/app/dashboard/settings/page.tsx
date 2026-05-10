import { SettingsPanel } from "@/components/sections/settings-panel";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1 font-[family-name:var(--font-jetbrains-mono)]">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Dashboard Settings
        </h1>
        <p className="text-sm text-gray-400">
          Configure how your team receives data updates, alerts, and reports.
        </p>
      </div>

      <SettingsPanel />
    </div>
  );
}