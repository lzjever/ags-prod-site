import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function AudienceCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group rounded-[var(--site-radius-md)] border border-[rgb(var(--site-border))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-5 transition-colors duration-200 hover:border-[rgb(var(--site-accent)/0.45)] hover:bg-[rgb(var(--site-bg-surface-high)/0.62)]"
    >
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[rgb(var(--site-text-secondary))]">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-sm font-medium text-[rgb(var(--site-accent))]">
        继续阅读
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
