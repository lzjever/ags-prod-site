import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function TalkTrack({
  title,
  audience,
  talk,
  proof,
  className,
}: {
  title: string;
  audience?: string;
  talk: ReactNode;
  proof: ReactNode;
  className?: string;
}) {
  return (
    <aside
      className={cn(
        'rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-strong)/0.32)] bg-[linear-gradient(135deg,rgb(var(--site-bg-surface-high)/0.78),rgb(var(--site-bg-surface)/0.92))] p-5 shadow-[0_16px_40px_rgba(0,0,0,0.16)]',
        className,
      )}
    >
      <div className="space-y-3">
        {audience ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--site-accent))]">
            {audience}
          </p>
        ) : null}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="space-y-3 text-sm leading-6 text-[rgb(var(--site-text-secondary))]">
          <p>{talk}</p>
          <p className="text-[rgb(var(--site-text-primary))]">{proof}</p>
        </div>
      </div>
    </aside>
  );
}
