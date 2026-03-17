import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function FeatureCard({
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
      className="site-surface group flex h-full flex-col justify-between rounded-[var(--site-radius-lg)] p-5 transition-transform duration-200 hover:-translate-y-1"
    >
      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm leading-6 text-[rgb(var(--site-text-secondary))]">{description}</p>
      </div>
      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-[rgb(var(--site-accent))]">
        查看详情
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </div>
    </Link>
  );
}
