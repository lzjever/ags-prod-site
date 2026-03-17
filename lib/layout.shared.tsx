import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

const navLinks = [
  { text: '白皮书', url: '/docs/whitepaper' },
  { text: '架构', url: '/docs/architecture' },
  { text: '能力', url: '/docs/capabilities' },
  { text: '智能体运行', url: '/docs/agent-runtime' },
  { text: '界面说明', url: '/docs/interface-guides' },
  { text: '版本资料', url: '/docs/versioning' },
];

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="font-semibold tracking-tight text-white">
          AgentSmith
          <span className="ml-2 text-sm font-normal text-[rgb(var(--site-text-secondary))]">
            Product Site
          </span>
        </span>
      ),
    },
    links: navLinks,
  };
}
