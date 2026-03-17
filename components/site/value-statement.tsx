import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function ValueStatement({
  eyebrow,
  title,
  summary,
  detail,
  className,
}: {
  eyebrow?: string;
  title: string;
  summary: ReactNode;
  detail?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        'site-surface relative overflow-hidden space-y-4 rounded-[var(--site-radius-xl)] p-6',
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(var(--site-accent)/0.82),transparent)]" />
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[rgb(var(--site-accent))]">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="text-2xl font-semibold tracking-tight text-white">{title}</h3>
      <div className="space-y-3 text-[rgb(var(--site-text-secondary))]">
        <p className="leading-7">{summary}</p>
        {detail ? <p className="leading-7">{detail}</p> : null}
      </div>
    </div>
  );
}
