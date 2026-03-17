export function FlowSteps({
  title,
  description,
  steps,
}: {
  title: string;
  description: string;
  steps: { step: string; title: string; description: string }[];
}) {
  return (
    <section className="my-10 space-y-5">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
        <p className="max-w-3xl text-[rgb(var(--site-text-secondary))]">{description}</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-5">
        {steps.map((item, index) => (
          <div
            key={item.step}
            className="site-surface site-reveal-up relative overflow-hidden rounded-[var(--site-radius-lg)] p-5 transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="absolute inset-x-5 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(var(--site-accent)/0.75),transparent)]" />
            {index < steps.length - 1 ? (
              <div className="pointer-events-none absolute right-[-20px] top-1/2 hidden h-px w-10 -translate-y-1/2 bg-[linear-gradient(90deg,rgb(var(--site-accent)/0.55),transparent)] lg:block" />
            ) : null}
            <p className="text-xs font-semibold tracking-[0.18em] text-[rgb(var(--site-accent))]">{item.step}</p>
            <h3 className="mt-3 text-sm font-semibold text-white">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[rgb(var(--site-text-secondary))]">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
