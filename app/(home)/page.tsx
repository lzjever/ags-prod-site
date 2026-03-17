import Link from 'next/link';
import { ArrowRight, Bot, FileStack, ShieldCheck, Waypoints } from 'lucide-react';
import { FeatureCard } from '@/components/site/feature-card';
import { AudienceCard } from '@/components/site/audience-card';
import { ReferenceGrid } from '@/components/site/reference-grid';
import { Eyebrow } from '@/components/site/eyebrow';
import { FocusedScreenshot } from '@/components/site/focused-screenshot';
import { cn } from '@/lib/cn';

const featureCards = [
  {
    title: 'Chat',
    description: '在项目上下文中发起对话，让团队以更低门槛开始使用 AI。',
    href: '/docs/capabilities/chat',
  },
  {
    title: 'Notebook',
    description: '把输入、执行、trace 和 artifacts 组织成统一任务空间。',
    href: '/docs/capabilities/notebook',
  },
  {
    title: 'Files',
    description: '让项目文件库、本地挂载和运行产物沉淀为可复用资产。',
    href: '/docs/capabilities/files',
  },
  {
    title: 'Agents',
    description: '把原本偏脚本化的智能体能力带入项目级正式工作流。',
    href: '/docs/capabilities/agents',
  },
  {
    title: 'Governance',
    description: '围绕 endpoints、policy、usage、audit 建立统一治理主线。',
    href: '/docs/capabilities/governance',
  },
  {
    title: '智能体运行专题',
    description: '解释 AgentSmith 为什么不只是一个 Agent UI，而是一套运行环境。',
    href: '/docs/agent-runtime/why-not-just-agent-ui',
  },
] as const;

const audienceCards = [
  {
    title: '给产品与管理者',
    description: '快速理解产品定位、范围边界、核心价值与整体结构。',
    href: '/docs/whitepaper',
  },
  {
    title: '给售前与交付',
    description: '快速查看关键能力、典型界面与实际使用方式。',
    href: '/docs/interface-guides',
  },
  {
    title: '给设计与研发',
    description: '从架构、能力和任务流角度理解产品如何整体运作。',
    href: '/docs/architecture',
  },
] as const;

const heroVisuals = [
  {
    title: '项目入口',
    note: '在同一项目上下文中进入聊天、任务、文件与治理能力。',
    src: '/api/reference-assets/project-overview.png',
    objectPosition: '52% 22%',
    scale: 1.24,
    className: 'lg:left-0 lg:top-0 lg:w-[68%]',
    viewportClassName: 'aspect-[1.08/1]',
    floatClassName: 'site-float-slow',
  },
  {
    title: 'Notebook 执行',
    note: '任务消息、执行状态与产物集中呈现，便于持续回看与复用。',
    src: '/api/reference-assets/project-notebook-task-detail.png',
    objectPosition: '54% 29%',
    scale: 1.18,
    className: 'lg:right-0 lg:top-16 lg:w-[54%]',
    viewportClassName: 'aspect-[0.88/1]',
    floatClassName: 'site-float-delay',
  },
  {
    title: 'Chat 会话',
    note: '多轮线程与结果输出保持在同一项目上下文中连续展开。',
    src: '/api/reference-assets/project-chat-session.png',
    objectPosition: '52% 28%',
    scale: 1.15,
    className: 'lg:bottom-10 lg:left-6 lg:w-[60%]',
    viewportClassName: 'aspect-[1.2/1]',
    floatClassName: 'site-float-reverse',
  },
  {
    title: 'Files 资产层',
    note: '项目文件库、本地挂载与运行产物在同一上下文中协同。',
    src: '/api/reference-assets/project-files.png',
    objectPosition: '50% 36%',
    scale: 1.15,
    className: 'lg:bottom-0 lg:right-8 lg:w-[42%]',
    viewportClassName: 'aspect-[0.96/1]',
    floatClassName: 'site-float-soft',
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
              把企业级 AI 使用、治理与智能体运行放进
              <span className="site-gradient-text">同一个控制平面。</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--site-text-secondary))]">
              AgentSmith 让团队在统一项目上下文中使用 AI、运行智能体、管理资源与回看审计，把
              Chat、Notebook、Files、Agents 与治理能力连接为同一套工作系统。
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
              查看产品界面
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <Waypoints className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">双主线结构</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">控制平面 + 运行环境</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <Bot className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">Notebook 主线</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">统一任务空间承接复杂执行</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <FileStack className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">文件资产化</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">输入、产物与本地挂载协同沉淀</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <ShieldCheck className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">治理闭环</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">Endpoints / Policy / Usage / Audit</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="grid gap-4 lg:hidden">
            {heroVisuals.map((visual) => (
              <FocusedScreenshot
                key={visual.title}
                src={visual.src}
                alt={visual.title}
                label={visual.title}
                note={visual.note}
                objectPosition={visual.objectPosition}
                scale={visual.scale}
                viewportClassName={visual.viewportClassName}
              />
            ))}
          </div>
          <div className="site-surface relative hidden h-[640px] overflow-hidden rounded-[32px] p-6 lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(var(--site-accent)/0.18),transparent_24%),radial-gradient(circle_at_80%_18%,rgb(255_255_255/0.08),transparent_18%),linear-gradient(180deg,rgb(255_255_255/0.02),transparent_32%,transparent_80%,rgb(7_8_12/0.35))]" />
            {heroVisuals.map((visual) => (
              <div key={visual.title} className={cn('absolute', visual.className, visual.floatClassName)}>
                <FocusedScreenshot
                  src={visual.src}
                  alt={visual.title}
                  label={visual.title}
                  note={visual.note}
                  objectPosition={visual.objectPosition}
                  scale={visual.scale}
                  viewportClassName={visual.viewportClassName}
                  className="shadow-[0_22px_60px_rgba(0,0,0,0.38)]"
                />
              </div>
            ))}
            <div className="absolute bottom-6 left-6 right-6 rounded-[24px] border border-[rgb(var(--site-border-strong)/0.4)] bg-[linear-gradient(135deg,rgb(var(--site-bg-base)/0.9),rgb(var(--site-bg-panel)/0.82))] px-5 py-4 backdrop-blur">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-[rgb(var(--site-accent))]">
                <span>Project-Scoped AI</span>
                <span className="h-1 w-1 rounded-full bg-[rgb(var(--site-accent))]" />
                <span>Governed Execution</span>
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[rgb(var(--site-text-secondary))]">
                从项目总览到任务执行，再到文件资产与治理链路，AgentSmith 把原本分散的企业 AI 工作收拢为连续、可回看、可治理的项目流程。
              </p>
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
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">很多 Agent 不是能力不够，而是运行方式还不适合团队。</h2>
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
              Members 与 Settings 统一进同一套项目结构。
            </p>
          </div>
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              主线二
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">通用智能体运行环境</h2>
            <p className="mt-4 leading-7 text-[rgb(var(--site-text-secondary))]">
              以 Notebook + Files + Agents 串联输入、执行、trace、artifacts 与运行工作目录，让智能体任务形成连续链路。
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            核心能力
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">围绕项目级 AI 使用、治理与执行形成统一能力骨架。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            从整体定位到关键能力，再到典型操作流程，AgentSmith 以统一的产品结构承接企业级 AI 使用、治理与智能体执行。
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
            <h2 className="text-3xl font-semibold tracking-tight text-white">Notebook、Files、Agents 不是三个孤立能力，而是一条连续运行链路。</h2>
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
            关键界面
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">从真实产品界面理解关键能力与工作方式。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            对话、任务、文件、端点与审计等关键能力，都可以在实际产品界面中看到对应操作方式与结果呈现。
          </p>
        </div>
        <ReferenceGrid />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            继续阅读
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">从你的关注点继续了解 AgentSmith。</h2>
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
