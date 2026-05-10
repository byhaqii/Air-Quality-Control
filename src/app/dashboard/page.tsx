import { DashboardOverview } from "@/components/sections/dashboard-overview";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Real-Time Air Quality
        </h1>
        <p className="text-sm text-gray-400">
          Monitor key atmospheric metrics in one clean dashboard.
        </p>
      </div>

      <DashboardOverview />
    </div>
  );
}