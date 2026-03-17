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
    preset: 'project-overview-home',
    className: 'lg:left-0 lg:top-0 lg:w-[68%]',
    floatClassName: 'site-float-slow',
  },
  {
    preset: 'project-notebook-task-detail-home',
    className: 'lg:right-0 lg:top-16 lg:w-[54%]',
    floatClassName: 'site-float-delay',
  },
  {
    preset: 'project-chat-session-home',
    className: 'lg:bottom-10 lg:left-6 lg:w-[60%]',
    floatClassName: 'site-float-reverse',
  },
  {
    preset: 'project-files-home',
    className: 'lg:bottom-0 lg:right-8 lg:w-[42%]',
    floatClassName: 'site-float-soft',
  },
] as const;

const enterpriseChallenges = [
  {
    title: '使用场景碎片化',
    description: '对话、任务、文件、端点与成员管理往往分散在不同工具和流程中。',
  },
  {
    title: '治理链路不连续',
    description: '资源限制、用量观察、异常排查和审计回看常常彼此脱节。',
  },
  {
    title: '智能体结果难沉淀',
    description: '很多执行过程停留在终端或临时目录里，难以复用、协作和追溯。',
  },
] as const;

const runtimeSteps = [
  {
    step: '01',
    title: '创建任务',
    description: '以 Notebook 创建长期任务，而不是一次性会话。',
  },
  {
    step: '02',
    title: '补充上下文',
    description: '把文件、URL 与历史产物带入同一任务上下文。',
  },
  {
    step: '03',
    title: '绑定执行能力',
    description: '选择 Agent 与 Endpoint，明确由谁执行、用什么资源执行。',
  },
  {
    step: '04',
    title: '回传过程',
    description: 'trace、状态、消息与 artifacts 持续回传到同一任务界面。',
  },
  {
    step: '05',
    title: '沉淀资产',
    description: '结果回流到项目文件与治理链路，形成后续可复用的资产。',
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
              <FocusedScreenshot key={visual.preset} preset={visual.preset} />
            ))}
          </div>
          <div className="site-surface relative hidden h-[640px] overflow-hidden rounded-[32px] p-6 lg:block">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgb(var(--site-accent)/0.18),transparent_24%),radial-gradient(circle_at_80%_18%,rgb(255_255_255/0.08),transparent_18%),linear-gradient(180deg,rgb(255_255_255/0.02),transparent_32%,transparent_80%,rgb(7_8_12/0.35))]" />
            {heroVisuals.map((visual) => (
              <div key={visual.preset} className={cn('absolute', visual.className, visual.floatClassName)}>
                <FocusedScreenshot preset={visual.preset} className="shadow-[0_22px_60px_rgba(0,0,0,0.38)]" />
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
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            落地难点
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">真正阻碍企业 AI 落地的，是流程分裂而不是模型能力。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            当使用、治理和执行分散在不同工具里时，团队很难把 AI 工作稳定地纳入日常业务流程。
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {enterpriseChallenges.map((item, index) => (
            <div key={item.title} className="site-surface relative overflow-hidden rounded-[var(--site-radius-xl)] p-7">
              <div className="absolute inset-x-8 top-0 h-px bg-[linear-gradient(90deg,transparent,rgb(var(--site-accent)/0.8),transparent)]" />
              <p className="text-xs font-semibold tracking-[0.18em] text-[rgb(var(--site-accent))]">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-[rgb(var(--site-text-secondary))]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              AgentSmith 的回答
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">把使用、治理与执行放进同一项目工作流。</h2>
            <div className="mt-6 space-y-4 text-[rgb(var(--site-text-secondary))]">
              <p>
                在 AgentSmith 里，团队成员不是分别进入聊天工具、任务工具和治理后台工作，而是在同一个项目上下文中连续完成这些动作。这样一来，使用体验会更自然，团队协作也更容易建立在同一套业务边界上。
              </p>
              <p>
                与此同时，端点、策略、用量、成员和审计始终沿着同一条治理主线展开，任务过程、执行产物和文件资产也会持续沉淀下来，让后续回看、复用和协作都有稳定基础。
              </p>
            </div>
          </div>
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              运行方式升级
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">把偏脚本化的 Agent 工作流升级成团队可用能力。</h2>
            <div className="mt-6 space-y-4 text-[rgb(var(--site-text-secondary))]">
              <p>
                许多智能体工作流之所以难以在团队里推广，不是因为能力不够，而是因为它们过于依赖个人命令行环境、临时目录和手工配置。AgentSmith 把这些原本偏脚本化的能力重新组织进统一任务空间，让执行真正成为产品能力的一部分。
              </p>
              <p>
                文件、端点、凭据和智能体能力因此可以在项目内持续复用，执行过程和治理记录也会自然接回同一套资产与审计链路，让团队更容易把 AI 工作纳入长期流程。
              </p>
            </div>
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
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
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
              {runtimeSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[var(--site-radius-md)] border border-[rgb(var(--site-border))] bg-[rgb(var(--site-bg-surface-high)/0.48)] p-4"
                >
                  <p className="text-xs font-semibold tracking-[0.18em] text-[rgb(var(--site-accent))]">{item.step}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[rgb(var(--site-text-secondary))]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-4">
            <FocusedScreenshot preset="project-notebook-task-detail-guide" className="shadow-[0_18px_40px_rgba(0,0,0,0.22)]" />
            <div className="grid gap-4 sm:grid-cols-2">
              <FocusedScreenshot preset="project-files-guide" className="shadow-[0_18px_40px_rgba(0,0,0,0.22)]" glow={false} />
              <FocusedScreenshot preset="project-agents-topic" className="shadow-[0_18px_40px_rgba(0,0,0,0.22)]" glow={false} />
            </div>
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
