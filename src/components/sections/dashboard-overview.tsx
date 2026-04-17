import { liveIndex, metrics } from "@/lib/mock-data";
import { StatCard } from "@/components/ui/stat-card";

export function DashboardOverview() {
  return (
    <section className="space-y-6">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <article className="rounded-3xl border border-slate-800/80 bg-gradient-to-br from-cyan-900/35 to-slate-900/60 p-8 shadow-[0_24px_80px_-48px_rgba(56,189,248,0.7)]">
          <p className="text-sm uppercase tracking-[0.25em] text-slate-400">Overall Index</p>
          <h2 className="mt-3 text-4xl text-slate-100">Air Quality</h2>
          <div className="mt-6 flex items-end gap-3">
            <span className="text-9xl font-semibold leading-none text-cyan-200">{liveIndex}</span>
            <span className="pb-3 text-2xl text-slate-300">AQI</span>
          </div>
          <p className="mt-6 max-w-sm text-base text-slate-400">
            Conditions are currently optimal. Minimal health risk for the general population.
          </p>
        </article>

        <article className="rounded-3xl border border-slate-800/80 bg-slate-900/70 p-8">
          <h3 className="text-3xl font-semibold text-slate-100">PM2.5 Concentration</h3>
          <p className="mt-2 text-base text-slate-400">Real-time observation for the last hour.</p>
          <div className="mt-7 h-52 rounded-2xl bg-gradient-to-b from-cyan-300/15 via-cyan-400/8 to-transparent p-4">
            <div className="h-full w-full rounded-xl border border-cyan-400/15 bg-[linear-gradient(180deg,rgba(56,189,248,0.15)_0%,rgba(56,189,248,0.02)_60%,rgba(2,6,23,0.8)_100%)]" />
          </div>
        </article>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {metrics.map((item) => (
          <StatCard
            key={item.label}
            label={item.label}
            value={item.value}
            unit={item.unit}
            trend={item.trend}
          />
        ))}
      </div>
    </section>
  );
}
