type StatCardProps = {
  label: string;
  value: string;
  unit?: string;
  trend?: string;
};

export function StatCard({ label, value, unit, trend }: StatCardProps) {
  const trendColor = trend?.startsWith("+")
    ? "text-rose-300"
    : trend === "0%"
      ? "text-slate-300"
      : "text-cyan-300";

  return (
    <article className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-7 shadow-[0_20px_60px_-40px_rgba(34,211,238,0.5)]">
      <div className="flex items-center justify-between">
        <p className="text-base text-slate-400">{label}</p>
        {trend ? <p className={`text-sm ${trendColor}`}>{trend}</p> : null}
      </div>
      <p className="mt-3 text-5xl font-semibold text-slate-100">{value}</p>
      {unit ? <p className="text-base text-slate-500">{unit}</p> : null}
    </article>
  );
}
