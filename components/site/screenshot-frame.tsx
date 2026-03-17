import { cn } from '@/lib/cn';
import { FocusedScreenshot } from '@/components/site/focused-screenshot';

export function ScreenshotFrame({
  src,
  alt,
  caption,
  className,
  objectPosition,
  scale,
  label,
  note,
  viewportClassName,
}: {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
  objectPosition?: string;
  scale?: number;
  label?: string;
  note?: string;
  viewportClassName?: string;
}) {
  return (
    <figure className={cn('space-y-3', className)}>
      <FocusedScreenshot
        src={src}
        alt={alt}
        objectPosition={objectPosition}
        scale={scale}
        label={label}
        note={note}
        viewportClassName={cn('aspect-[16/9]', viewportClassName)}
      />
      {caption ? (
        <figcaption className="text-sm text-[rgb(var(--site-text-secondary))]">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
