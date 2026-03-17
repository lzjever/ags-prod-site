import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeatureCard({
  title,
  description,
  href,
  ctaLabel = '了解这项能力',
}: {
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
}) {
  return (
    <Link
      href={href}
      className="site-surface group relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--site-radius-lg)] p-5 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(var(--site-accent)/0.75),transparent)]" />
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-6 text-[rgb(var(--site-text-secondary))]">{description}</p>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[rgb(var(--site-accent))]">
        {ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
