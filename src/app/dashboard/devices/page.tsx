import { Topbar } from "@/components/layout/topbar";
import { DevicesGrid } from "@/components/sections/devices-grid";

export default function DevicesPage() {
  return (
    <div className="space-y-8">
      <Topbar
        title="Sensor Network"
        description="Manage and monitor all deployed atmospheric sensors from one place."
      />
      <DevicesGrid />
    </div>
  );
}
