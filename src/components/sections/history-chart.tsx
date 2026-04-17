import { anomalies, historyData } from "@/lib/mock-data";

export function HistoryChart() {
  const maxValue = Math.max(...historyData.map((item) => item.aqi));

  const getStatusClass = (status: string) => {
    if (status === "Elevated") {
      return "bg-rose-500/15 text-rose-300";
    }

    if (status === "Moderate") {
      return "bg-cyan-500/15 text-cyan-300";
    }

    return "bg-teal-500/15 text-teal-300";
  };

  return (
    <section className="space-y-8">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
        <div className="flex flex-wrap items-center gap-4">
          <input
            type="text"
            placeholder="Search sensor ID or location..."
            className="h-12 w-full rounded-lg border border-slate-700 bg-slate-950/70 px-4 text-base text-slate-200 placeholder:text-slate-500 md:w-[38%]"
            readOnly
          />
          <div className="inline-flex rounded-lg border border-slate-700 bg-slate-950/70 p-1">
            <button className="rounded-md bg-slate-700 px-4 py-2 text-base text-slate-200">Daily</button>
            <button className="rounded-md px-4 py-2 text-base text-slate-400">Weekly</button>
            <button className="rounded-md px-4 py-2 text-base text-slate-400">Monthly</button>
          </div>
          <div className="rounded-lg border border-slate-700 bg-slate-950/70 px-4 py-2.5 text-base text-slate-300">
            Oct 1 - Oct 31, 2023
          </div>
        </div>
      </div>

      <article className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-semibold text-slate-100">AQI Trend Analysis</h3>
            <p className="mt-1 text-base text-slate-400">Aggregated air quality index over selected period.</p>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-300">
            <span className="rounded-full bg-cyan-400/20 px-3 py-1.5">PM2.5</span>
            <span className="rounded-full bg-cyan-400/20 px-3 py-1.5">CO2</span>
          </div>
        </div>

        <div className="grid h-80 grid-cols-7 items-end gap-3 border-t border-slate-800 pt-6">
          {historyData.map((item) => (
            <div key={item.day} className="flex flex-col items-center gap-2">
              <div
                className="w-full rounded-t-md bg-gradient-to-t from-cyan-800/35 to-cyan-300/80"
                style={{ height: `${(item.aqi / maxValue) * 100}%` }}
                title={`${item.day}: ${item.aqi}`}
              />
              <span className="text-sm text-slate-400">{item.day}</span>
            </div>
          ))}
        </div>
      </article>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-3xl font-semibold text-slate-100">Recorded Anomalies</h3>
          <button className="text-base text-cyan-300 hover:text-cyan-200">View Full Log</button>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/70">
          <table className="min-w-full text-base">
            <thead className="border-b border-slate-800 text-sm uppercase tracking-wide text-slate-400">
              <tr>
                <th className="px-5 py-4 text-left">Timestamp</th>
                <th className="px-5 py-4 text-left">Sensor ID</th>
                <th className="px-5 py-4 text-left">PM2.5 (ug/m3)</th>
                <th className="px-5 py-4 text-left">CO2 (ppm)</th>
                <th className="px-5 py-4 text-left">Temp (C)</th>
                <th className="px-5 py-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {anomalies.map((row) => (
                <tr key={`${row.time}-${row.sensorId}`} className="border-b border-slate-800/60 last:border-0">
                  <td className="px-5 py-4 text-slate-400">{row.time}</td>
                  <td className="px-5 py-4 text-slate-300">{row.sensorId}</td>
                  <td className="px-5 py-4 text-rose-300">{row.pm25}</td>
                  <td className="px-5 py-4 text-cyan-300">{row.co2}</td>
                  <td className="px-5 py-4 text-slate-300">{row.temperature}</td>
                  <td className="px-5 py-4">
                    <span className={`inline-flex rounded-full px-3 py-1.5 text-sm ${getStatusClass(row.status)}`}>
                      {row.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}
