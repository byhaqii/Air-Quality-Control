import { Topbar } from "@/components/layout/topbar";
import { SettingsPanel } from "@/components/sections/settings-panel";
import styles from "../dashboard-page.module.css";

export default function SettingsPage() {
  return (
    <div className={styles.page}>
      <Topbar
        title="Dashboard Settings"
        description="Configure how your team receives data updates, alerts, and reports."
      />
      <SettingsPanel />
    </div>
  );
}
