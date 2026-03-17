export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex rounded-full border border-[rgb(var(--site-accent)/0.25)] bg-[rgb(var(--site-accent)/0.08)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--site-accent))]">
      {children}
    </span>
  );
}
