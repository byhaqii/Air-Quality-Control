import { Topbar } from "@/components/layout/topbar";
import { HistoryChart } from "@/components/sections/history-chart";

export default function HistoryPage() {
  return (
    <div className="space-y-8">
      <Topbar
        title="Historical Data"
        description="Review past atmospheric metrics and identify long-term environmental trends."
      />
      <HistoryChart />
    </div>
  );
}
