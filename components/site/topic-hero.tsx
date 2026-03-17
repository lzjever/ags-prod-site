import type { ReactNode } from 'react';
import { FocusedScreenshot } from '@/components/site/focused-screenshot';
import { cn } from '@/lib/cn';

export function TopicHero({
  eyebrow,
  title,
  description,
  presets,
  chips,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  presets: [string, string];
  chips?: string[];
  children?: ReactNode;
}) {
  return (
    <section className="site-reveal-up site-topic-shell my-8 overflow-hidden rounded-[28px] border border-[rgb(var(--site-border)/0.72)] bg-[linear-gradient(180deg,rgb(var(--site-bg-surface)/0.92),rgb(var(--site-bg-panel)/0.88))] p-5 shadow-[0_18px_54px_rgba(0,0,0,0.28)] md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            {eyebrow}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h1>
          <p className="max-w-2xl text-base leading-7 text-[rgb(var(--site-text-secondary))]">{description}</p>
          {chips?.length ? (
            <div className="flex flex-wrap gap-3">
              {chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[rgb(var(--site-border-strong)/0.35)] bg-[rgb(var(--site-bg-base)/0.55)] px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-[rgb(var(--site-accent))]"
                >
                  {chip}
                </span>
              ))}
            </div>
          ) : null}
          {children}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {presets.map((preset, index) => (
            <FocusedScreenshot
              key={preset}
              preset={preset}
              className={cn(
                index === 1 ? 'md:translate-y-6' : '',
                index === 0 ? 'site-float-soft' : 'site-float-delay',
                'shadow-[0_20px_48px_rgba(0,0,0,0.26)]',
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
