import Link from 'next/link';

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
      className="rounded-[var(--site-radius-md)] border border-[rgb(var(--site-border))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-5 transition-colors duration-200 hover:border-[rgb(var(--site-accent)/0.45)] hover:bg-[rgb(var(--site-bg-surface-high)/0.62)]"
    >
      <h3 className="text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[rgb(var(--site-text-secondary))]">{description}</p>
    </Link>
  );
}
