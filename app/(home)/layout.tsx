import type { ReactNode } from 'react';
import Link from 'next/link';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[rgb(var(--site-border-subtle)/0.72)] bg-[rgb(var(--site-bg-base)/0.82)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-base font-semibold tracking-tight text-white">
            AgentSmith
            <span className="ml-2 text-sm font-normal text-[rgb(var(--site-text-secondary))]">
              Product Site
            </span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-[rgb(var(--site-text-secondary))] md:flex">
            <Link href="/docs/whitepaper" className="hover:text-white">
              白皮书
            </Link>
            <Link href="/docs/architecture" className="hover:text-white">
              架构
            </Link>
            <Link href="/docs/capabilities" className="hover:text-white">
              能力
            </Link>
            <Link href="/docs/agent-runtime" className="hover:text-white">
              智能体运行
            </Link>
            <Link href="/docs/interface-guides" className="hover:text-white">
              界面说明
            </Link>
          </nav>
        </div>
      </header>
      {children}
    </div>
  );
}
