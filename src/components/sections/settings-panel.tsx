const preferences = [
  {
    title: "Live Sync",
    description: "Refresh dashboard values every 10 seconds.",
    enabled: true,
  },
  {
    title: "Alert Notifications",
    description: "Send alerts when AQI crosses the warning threshold.",
    enabled: true,
  },
  {
    title: "Auto Export",
    description: "Generate a weekly summary in CSV format.",
    enabled: false,
  },
];

export function SettingsPanel() {
  return (
    <section className="space-y-5">
      {preferences.map((item) => (
        <article
          key={item.title}
          className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-7 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold text-slate-100">{item.title}</h3>
            <p className="text-base text-slate-400">{item.description}</p>
          </div>
          <span
            className={`inline-flex rounded-full px-4 py-2 text-base ${
              item.enabled ? "bg-cyan-400/15 text-cyan-200" : "bg-slate-700 text-slate-300"
            }`}
          >
            {item.enabled ? "Enabled" : "Disabled"}
          </span>
        </article>
      ))}
    </section>
  );
}
