import Link from "next/link";

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_15%_10%,rgba(56,189,248,0.2),transparent_30%),radial-gradient(circle_at_80%_75%,rgba(14,116,144,0.3),transparent_42%),#020617]">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 md:px-10">
        <header className="flex items-center justify-between border-b border-slate-800/80 pb-6">
          <h1 className="text-4xl font-semibold text-cyan-300">Aetheris</h1>
          <nav className="hidden items-center gap-8 text-base text-slate-400 md:flex">
            <a href="#" className="hover:text-cyan-200">
              Technology
            </a>
            <a href="#" className="hover:text-cyan-200">
              Sensors
            </a>
            <a href="#" className="hover:text-cyan-200">
              Enterprise
            </a>
          </nav>
        </header>

        <main className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1fr_1fr]">
          <section>
            <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm uppercase tracking-[0.2em] text-cyan-200">
              System Online
            </p>

            <h2 className="mt-8 text-6xl font-semibold leading-tight text-slate-100 md:text-7xl">
              Real-Time
              <br />
              <span className="text-cyan-300">Air Quality</span>
              <br />
              Monitoring
            </h2>

            <p className="mt-8 max-w-lg text-xl leading-9 text-slate-400">
              Advanced IoT-based environmental intelligence. Visualize atmospheric data through a
              modern command center built for collaborative cloud projects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/dashboard"
                className="rounded-xl bg-cyan-400 px-7 py-4 font-medium text-slate-950 transition hover:bg-cyan-300"
              >
                View Dashboard
              </Link>
            </div>
          </section>

          <section className="relative flex items-center justify-center py-12">
            <div className="absolute h-[400px] w-[400px] rounded-full border border-cyan-400/20" />
            <div className="absolute h-[320px] w-[320px] rounded-full bg-cyan-300/10 blur-2xl" />
            <div className="relative grid h-[300px] w-[300px] place-items-center rounded-full border border-cyan-400/25 bg-slate-900/85 shadow-[0_0_80px_rgba(56,189,248,0.25)]">
              <div className="text-center">
                <p className="text-8xl font-semibold text-slate-100">42</p>
                <p className="mt-2 text-base uppercase tracking-[0.2em] text-slate-400">Current AQI</p>
              </div>
            </div>

            <div className="absolute left-0 top-12 rounded-xl border border-slate-800 bg-slate-900/85 p-4 text-base">
              <p className="text-slate-400">Temperature</p>
              <p className="text-2xl font-semibold text-cyan-200">22.4 C</p>
            </div>

            <div className="absolute bottom-12 right-0 rounded-xl border border-slate-800 bg-slate-900/85 p-4 text-base">
              <p className="text-slate-400">CO2 Levels</p>
              <p className="text-2xl font-semibold text-cyan-200">412 ppm</p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
