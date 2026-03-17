import Link from 'next/link';
import { FocusedScreenshot } from '@/components/site/focused-screenshot';
import { referencePages } from '@/lib/reference-pages';

export function ReferenceGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {referencePages.map((page) => (
        <Link
          key={page.slug}
          href={page.href}
          className="site-surface overflow-hidden rounded-[var(--site-radius-lg)] transition-transform duration-300 hover:-translate-y-1.5"
        >
          <FocusedScreenshot
            preset={page.preset}
            className="rounded-b-none"
            glow={false}
          />
          <div className="space-y-2 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--site-accent))]">
              {page.group}
            </p>
            <h3 className="text-base font-semibold text-white">{page.title}</h3>
            <p className="text-sm leading-6 text-[rgb(var(--site-text-secondary))]">{page.summary}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
