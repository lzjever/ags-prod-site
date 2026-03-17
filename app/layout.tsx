import type { Metadata } from 'next';
import { Inter, Noto_Sans_SC, JetBrains_Mono } from 'next/font/google';
import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  variable: '--font-noto-sc',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: {
    default: 'AgentSmith Product Site',
    template: '%s | AgentSmith Product Site',
  },
  description:
    'AgentSmith 产品白皮书、功能说明与界面证据站点，围绕企业级 AI 控制平面与通用智能体运行环境构建。',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${notoSansSC.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="site-shell font-[family-name:var(--font-inter)]">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
