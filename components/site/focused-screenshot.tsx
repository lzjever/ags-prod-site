import { cn } from '@/lib/cn';

type FocusedScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
  viewportClassName?: string;
  imageClassName?: string;
  objectPosition?: string;
  scale?: number;
  label?: string;
  note?: string;
  glow?: boolean;
};

export function FocusedScreenshot({
  src,
  alt,
  className,
  viewportClassName,
  imageClassName,
  objectPosition = 'center top',
  scale = 1,
  label,
  note,
  glow = true,
}: FocusedScreenshotProps) {
  return (
    <div className={cn('relative overflow-hidden rounded-[var(--site-radius-lg)]', className)}>
      {glow ? (
        <div className="pointer-events-none absolute inset-x-8 top-0 h-24 rounded-full bg-[rgb(var(--site-accent)/0.22)] blur-3xl" />
      ) : null}
      <div
        className={cn(
          'site-surface group relative overflow-hidden rounded-[var(--site-radius-lg)] p-2',
          viewportClassName,
        )}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255/0.04),transparent_18%,transparent_82%,rgb(8_10_15/0.5))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgb(var(--site-accent)/0.12),transparent_28%),radial-gradient(circle_at_82%_84%,rgb(255_255_255/0.08),transparent_24%)]" />
        {label ? (
          <div className="absolute left-5 top-5 z-10 rounded-full border border-[rgb(var(--site-border-strong)/0.55)] bg-[rgb(var(--site-bg-base)/0.88)] px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-[rgb(var(--site-accent))] backdrop-blur">
            {label}
          </div>
        ) : null}
        {note ? (
          <div className="absolute bottom-5 right-5 z-10 max-w-[70%] rounded-2xl border border-[rgb(var(--site-border-subtle)/0.85)] bg-[rgb(var(--site-bg-base)/0.82)] px-3 py-2 text-xs leading-5 text-[rgb(var(--site-text-secondary))] shadow-[0_12px_24px_rgba(0,0,0,0.28)] backdrop-blur">
            {note}
          </div>
        ) : null}
        <div className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]" style={{ transform: `scale(${scale})` }}>
          <img
            src={src}
            alt={alt}
            className={cn(
              'h-full w-full rounded-[calc(var(--site-radius-lg)-8px)] border border-[rgb(var(--site-border-subtle))] object-cover',
              imageClassName,
            )}
            style={{ objectPosition }}
          />
        </div>
      </div>
    </div>
  );
}
