import type { ReactNode } from "react";

type TopbarProps = {
  title: string;
  description: string;
  rightSlot?: ReactNode;
};

export function Topbar({ title, description, rightSlot }: TopbarProps) {
  return (
    <header className="flex flex-col gap-4 border-b border-slate-800 pb-8 md:flex-row md:items-end md:justify-between">
      <div>
        <p className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-1.5 text-sm uppercase tracking-wider text-cyan-200">
          System Online
        </p>
        <h1 className="mt-4 text-5xl font-semibold text-slate-100 md:text-6xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-base text-slate-400">{description}</p>
      </div>
      {rightSlot ? <div>{rightSlot}</div> : null}
    </header>
  );
}
