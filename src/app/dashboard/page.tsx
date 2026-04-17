import { Topbar } from "@/components/layout/topbar";
import { DashboardOverview } from "@/components/sections/dashboard-overview";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <Topbar
        title="Real-Time Air Quality"
        description="Monitor key atmospheric metrics in one clean dashboard designed for your team."
      />
      <DashboardOverview />
    </div>
  );
}
