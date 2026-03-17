import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

export function SiteSection({
  title,
  eyebrow,
  description,
  children,
  className,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={cn('my-10 space-y-5', className)}>
      <div className="space-y-2">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
        {description ? (
          <p className="max-w-3xl text-[rgb(var(--site-text-secondary))]">{description}</p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
