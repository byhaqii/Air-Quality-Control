import { devices } from "@/lib/mock-data";

export function DevicesGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {devices.map((device) => {
        const isOnline = device.status === "Online";

        return (
          <article
            key={device.id}
            className="rounded-2xl border border-slate-800 bg-slate-900/70 p-7 shadow-[0_20px_60px_-40px_rgba(34,211,238,0.5)]"
          >
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-3xl font-semibold text-slate-100">{device.name}</h3>
              <span
                className={`rounded-full px-4 py-1.5 text-sm ${
                  isOnline
                    ? "bg-cyan-400/15 text-cyan-200"
                    : "bg-rose-400/15 text-rose-300"
                }`}
              >
                {device.status}
              </span>
            </div>
            <p className="mt-2 text-base text-slate-400">{device.location}</p>
            <dl className="mt-5 space-y-3 text-base">
              <div className="flex justify-between gap-3">
                <dt className="text-slate-500">Type</dt>
                <dd className="text-right text-slate-300">{device.type}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-slate-500">Last Active</dt>
                <dd className={isOnline ? "text-slate-300" : "text-rose-300"}>{device.lastActive}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-slate-500">Firmware</dt>
                <dd className="text-slate-300">{device.firmware}</dd>
              </div>
            </dl>
          </article>
        );
      })}
    </section>
  );
}
