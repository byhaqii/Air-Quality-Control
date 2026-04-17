export function AboutOverview() {
  return (
    <section className="space-y-8">
      <p className="max-w-3xl text-xl leading-9 text-slate-300">
        Atmospheric Intelligence is a beginner-friendly cloud monitoring dashboard for visualizing
        environmental data from distributed sensors in real time.
      </p>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
          <h2 className="text-3xl font-semibold text-slate-100">System Architecture</h2>
          <p className="mt-3 text-base text-slate-400">
            Sensor nodes send telemetry to cloud services, then the web app displays the latest
            readings for easier monitoring.
          </p>

          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">Latency</p>
              <p className="text-3xl font-semibold text-slate-100">&lt; 50ms</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">Precision</p>
              <p className="text-3xl font-semibold text-slate-100">99.9%</p>
            </div>
            <div className="rounded-xl border border-slate-700 bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">Uptime</p>
              <p className="text-3xl font-semibold text-slate-100">99.99%</p>
            </div>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-8">
          <h3 className="text-2xl font-semibold text-slate-100">Neural Processing</h3>
          <p className="mt-3 text-base text-slate-400">
            Data is filtered and grouped before being shown on the dashboard.
          </p>
          <div className="mt-7 h-3 rounded-full bg-slate-800">
            <div className="h-full w-3/4 rounded-full bg-cyan-400" />
          </div>
          <p className="mt-3 text-right text-sm text-slate-500">Processing Load</p>
        </article>
      </div>
    </section>
  );
}
