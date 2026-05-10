import { HistoryChart } from "@/components/sections/history-chart";

export default function HistoryPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-white font-[family-name:var(--font-jetbrains-mono)]">
          Historical Data
        </h1>
        <p className="text-sm text-gray-400 font-[family-name:var(--font-jetbrains-mono)]">
          Review past atmospheric metrics and identify long-term environmental trends.
        </p>
      </div>

      <HistoryChart />
    </div>
  );
}