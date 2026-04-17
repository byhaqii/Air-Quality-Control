import { Topbar } from "@/components/layout/topbar";
import { SettingsPanel } from "@/components/sections/settings-panel";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      <Topbar
        title="Dashboard Settings"
        description="Configure how your team receives data updates, alerts, and reports."
      />
      <SettingsPanel />
    </div>
  );
}
