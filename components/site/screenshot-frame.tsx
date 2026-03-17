import { cn } from '@/lib/cn';

export function ScreenshotFrame({
  src,
  alt,
  caption,
  className,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}) {
  return (
    <figure className={cn('space-y-3', className)}>
      <div className="site-surface overflow-hidden rounded-[var(--site-radius-lg)] p-2">
        <img
          src={src}
          alt={alt}
          className="w-full rounded-[calc(var(--site-radius-lg)-8px)] border border-[rgb(var(--site-border-subtle))]"
        />
      </div>
      {caption ? (
        <figcaption className="text-sm text-[rgb(var(--site-text-secondary))]">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
