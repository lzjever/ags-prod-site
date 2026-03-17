import Link from 'next/link';
import { ArrowRight, Bot, Boxes, FileStack, ShieldCheck, Waypoints } from 'lucide-react';
import { FeatureCard } from '@/components/site/feature-card';
import { AudienceCard } from '@/components/site/audience-card';
import { ReferenceGrid } from '@/components/site/reference-grid';
import { Eyebrow } from '@/components/site/eyebrow';

const featureCards = [
  {
    title: 'Chat',
    description: '以项目为上下文发起对话，低门槛进入企业级 AI 使用。',
    href: '/docs/capabilities/chat',
  },
  {
    title: 'Notebook',
    description: '把输入、执行、trace 和 artifacts 组织成统一任务界面。',
    href: '/docs/capabilities/notebook',
  },
  {
    title: 'Files',
    description: '让项目文件库、本地挂载和运行产物形成可复用资产。',
    href: '/docs/capabilities/files',
  },
  {
    title: 'Agents',
    description: '把强大但脚本化的智能体升级为项目级正式执行能力。',
    href: '/docs/capabilities/agents',
  },
  {
    title: 'Governance',
    description: '围绕 endpoints、policy、usage、audit 形成统一治理主线。',
    href: '/docs/capabilities/governance',
  },
  {
    title: '智能体运行专题',
    description: '集中讲清 AgentSmith 为什么不只是一个 Agent UI。',
    href: '/docs/agent-runtime/why-not-just-agent-ui',
  },
] as const;

const audienceCards = [
  {
    title: '给产品与管理者',
    description: '快速理解产品定位、范围边界、核心价值和成熟度判断。',
    href: '/docs/whitepaper',
  },
  {
    title: '给售前与交付',
    description: '直接查看双主线叙事、核心能力亮点与真实界面证据。',
    href: '/docs/interface-guides',
  },
  {
    title: '给设计与研发',
    description: '从架构、能力、任务流和状态治理角度理解全站内容。',
    href: '/docs/architecture',
  },
] as const;

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 pb-18 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-24">
        <div className="space-y-8">
          <div className="space-y-5">
            <Eyebrow>Enterprise AI Control Plane</Eyebrow>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
              把企业级 AI 使用、治理与通用智能体运行放进
              <span className="site-gradient-text">同一个控制平面。</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--site-text-secondary))]">
              AgentSmith 为企业提供项目级 AI 使用入口、资源治理链路和通用智能体统一运行环境，让
              Chat、Notebook、Files、Agents 与审计证据形成闭环。
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/whitepaper"
              className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--site-accent))] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
            >
              阅读产品白皮书
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs/interface-guides"
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--site-border))] bg-[rgb(var(--site-bg-surface-high)/0.5)] px-5 py-3 text-sm font-semibold text-white hover:border-[rgb(var(--site-accent)/0.4)]"
            >
              查看真实界面
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <Waypoints className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">双主线定位</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">控制平面 + 智能体运行环境</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <Bot className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">Notebook 主线</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">统一任务界面承接复杂执行</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <FileStack className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">文件资产化</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">输入、产物与本地挂载协同</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <ShieldCheck className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">治理证据闭环</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">Endpoints / Policy / Usage / Audit</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="site-surface relative rounded-[28px] p-4">
            <div className="grid gap-4 md:grid-cols-2">
              <img
                src="/api/reference-assets/project-overview.png"
                alt="Project overview"
                className="rounded-[20px] border border-[rgb(var(--site-border-subtle))]"
              />
              <img
                src="/api/reference-assets/project-chat-session.png"
                alt="Project chat"
                className="translate-y-4 rounded-[20px] border border-[rgb(var(--site-border-subtle))]"
              />
              <img
                src="/api/reference-assets/project-notebook-task-detail.png"
                alt="Notebook task detail"
                className="-translate-y-2 rounded-[20px] border border-[rgb(var(--site-border-subtle))]"
              />
              <img
                src="/api/reference-assets/project-files.png"
                alt="Files"
                className="rounded-[20px] border border-[rgb(var(--site-border-subtle))]"
              />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_center,rgb(var(--site-accent)/0.18),transparent_70%)] blur-3xl" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              为什么需要 AgentSmith
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">企业 AI 真正复杂的，不是再接一个模型。</h2>
            <ul className="mt-6 space-y-4 text-[rgb(var(--site-text-secondary))]">
              <li>多团队、多项目如何在一个可治理环境中使用 AI。</li>
              <li>Chat、Notebook、Files、Agents 如何共享同一套资源与约束体系。</li>
              <li>谁在使用什么、花费多少、出了什么问题，如何追溯。</li>
            </ul>
          </div>
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              通用智能体落地问题
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">很多 Agent 不是能力不够，而是运行方式不适合团队。</h2>
            <ul className="mt-6 space-y-4 text-[rgb(var(--site-text-secondary))]">
              <li>本地目录、脚本、凭据与输出文件难以长期管理。</li>
              <li>命令行和临时文件工作流难以扩散到更广泛团队成员。</li>
              <li>运行结果难以沉淀成项目资产，也难以进入治理与审计视角。</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              主线一
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">企业级 AI 控制平面</h2>
            <p className="mt-4 leading-7 text-[rgb(var(--site-text-secondary))]">
              以 workspace / project 组织 AI 使用，以 endpoint 为治理主线，把 Usage、Policy、Audit、
              Members 与 Settings 统一在同一套项目结构下。
            </p>
          </div>
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              主线二
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">通用智能体运行环境</h2>
            <p className="mt-4 leading-7 text-[rgb(var(--site-text-secondary))]">
              以 Notebook + Files + Agents 为统一用户入口，把输入、执行、trace、artifacts 与运行工作目录收敛到同一任务链路。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            核心能力
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">围绕项目级 AI 使用、治理与执行形成统一骨架。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            第一版优先突出能直接支撑对外讲解和内部对齐的能力面，所有亮点都可以进一步下钻到白皮书、模块页和界面证据页。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              智能体运行链路
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-white">Notebook、Files、Agents 不是三个孤立页面，而是一条运行链路。</h2>
            <p className="text-[rgb(var(--site-text-secondary))]">
              用户通过 Notebook 创建任务，从 Files / URL / 历史 artifacts 输入上下文，绑定 Agent 与 Endpoint，最终把 trace 与产物回流为项目资产。
            </p>
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-5">
            {['创建 Task', '添加 Inputs', '绑定 Agent / Endpoint', '回传 Trace / Artifacts', '沉淀项目资产'].map((item, index) => (
              <div
                key={item}
                className="rounded-[var(--site-radius-md)] border border-[rgb(var(--site-border))] bg-[rgb(var(--site-bg-surface-high)/0.48)] p-4"
              >
                <p className="text-xs font-semibold tracking-[0.18em] text-[rgb(var(--site-accent))]">
                  0{index + 1}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            真实界面证据
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">真实页面，而不是概念草图。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            关键卖点都能落到真实界面与说明页，不把白皮书和推广表达做成两套互相脱节的话术。
          </p>
        </div>
        <ReferenceGrid />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            继续阅读
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">按你的角色进入最合适的内容路径。</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {audienceCards.map((card) => (
            <AudienceCard key={card.title} {...card} />
          ))}
        </div>
      </section>
    </main>
  );
}
