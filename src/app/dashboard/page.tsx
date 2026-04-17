import { Topbar } from "@/components/layout/topbar";
import { DashboardOverview } from "@/components/sections/dashboard-overview";
import styles from "./dashboard-page.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.page}>
      <Topbar
        title="Real-Time Air Quality"
        description="Monitor key atmospheric metrics in one clean dashboard designed for your team."
      />
      <DashboardOverview />
    </div>
  );
}
