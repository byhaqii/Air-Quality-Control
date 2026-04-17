import { Topbar } from "@/components/layout/topbar";
import { HistoryChart } from "@/components/sections/history-chart";
import styles from "../dashboard-page.module.css";

export default function HistoryPage() {
  return (
    <div className={styles.page}>
      <Topbar
        title="Historical Data"
        description="Review past atmospheric metrics and identify long-term environmental trends."
      />
      <HistoryChart />
    </div>
  );
}
