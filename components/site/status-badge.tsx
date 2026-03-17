import { cn } from '@/lib/cn';

const statusMap = {
  '已实现': 'border-[rgb(var(--site-success)/0.45)] bg-[rgb(var(--site-success)/0.12)] text-[rgb(var(--site-success))]',
  '部分实现':
    'border-[rgb(var(--site-warning)/0.45)] bg-[rgb(var(--site-warning)/0.12)] text-[rgb(var(--site-warning))]',
  '规划中': 'border-[rgb(var(--site-accent)/0.45)] bg-[rgb(var(--site-accent)/0.12)] text-[rgb(var(--site-accent))]',
} as const;

export function StatusBadge({
  state,
  className,
}: {
  state: keyof typeof statusMap;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full border px-2.5 py-1 text-xs font-medium',
        statusMap[state],
        className,
      )}
    >
      {state}
    </span>
  );
}
