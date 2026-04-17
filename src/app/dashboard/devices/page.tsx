import { Topbar } from "@/components/layout/topbar";
import { DevicesGrid } from "@/components/sections/devices-grid";
import styles from "../dashboard-page.module.css";

export default function DevicesPage() {
  return (
    <div className={styles.page}>
      <Topbar
        title="Sensor Network"
        description="Manage and monitor all deployed atmospheric sensors from one place."
      />
      <DevicesGrid />
    </div>
  );
}
