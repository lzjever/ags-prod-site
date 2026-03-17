import Link from 'next/link';
import { ArrowRight, Bot, FileStack, ShieldCheck, Waypoints } from 'lucide-react';
import { FeatureCard } from '@/components/site/feature-card';
import { AudienceCard } from '@/components/site/audience-card';
import { ReferenceGrid } from '@/components/site/reference-grid';
import { Eyebrow } from '@/components/site/eyebrow';
import { FocusedScreenshot } from '@/components/site/focused-screenshot';
import { ValueStatement } from '@/components/site/value-statement';
import { cn } from '@/lib/cn';

const featureCards = [
  {
    title: 'Chat',
    description: '让团队在项目中立即开始工作，并把后续结果自然接回更完整的任务与治理链路。',
    href: '/docs/capabilities/chat',
  },
  {
    title: 'Notebook',
    description: '把复杂执行升级成长期任务，让每一次运行都能被回看、接手和复用。',
    href: '/docs/capabilities/notebook',
  },
  {
    title: 'Files',
    description: '把输入资料、运行产物和本地目录接成同一层项目资产，而不是零散附件和临时目录。',
    href: '/docs/capabilities/files',
  },
  {
    title: 'Agents',
    description: '把原本依赖个人环境的执行能力，升级成团队都能调用、理解和管理的正式对象。',
    href: '/docs/capabilities/agents',
  },
  {
    title: 'Governance',
    description: '让资源控制、消耗观察和审计回看围绕同一条主线展开，而不是散落在不同后台里。',
    href: '/docs/capabilities/governance',
  },
  {
    title: '智能体运行专题',
    description: '说明 AgentSmith 为什么不止是一个调用入口，而是一套面向团队落地的运行环境。',
    href: '/docs/agent-runtime/why-not-just-agent-ui',
  },
] as const;

const audienceCards = [
  {
    title: '看产品为什么成立',
    description: '先理解 AgentSmith 解决什么企业问题，以及为什么它不是普通 AI 工具的叠加。',
    href: '/docs/whitepaper',
  },
  {
    title: '看产品如何被使用',
    description: '直接浏览主要界面，了解项目中的对话、任务、文件、资源与审计如何持续协同。',
    href: '/docs/interface-guides',
  },
  {
    title: '看系统如何组织',
    description: '查看工作区、项目、任务执行和治理回看如何在同一套系统中持续衔接。',
    href: '/docs/architecture',
  },
] as const;

const trustSignals = [
  '项目级上下文',
  '统一资源治理',
  '可回看执行链路',
  '可沉淀文件资产',
] as const;

const comparisonPoints = [
  {
    label: '普通 AI 工具',
    title: '能完成一次调用，却很难承接持续工作',
    description:
      '对话、任务、文件和治理通常分散在不同入口里，结果往往停留在个人环境，团队难以复用，也难以稳定运营。',
  },
  {
    label: 'AgentSmith',
    title: '把一次次使用，组织成可以长期运行的项目主线',
    description:
      '从对话、任务、文件到资源治理和审计回看，所有关键动作都围绕同一个项目上下文展开，让 AI 更容易真正进入业务流程。',
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
              把企业级 AI 使用、治理与智能体执行收进
              <span className="site-gradient-text">同一个控制平面。</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-[rgb(var(--site-text-secondary))]">
              AgentSmith 帮助企业把聊天、长期任务、文件资产、模型资源和治理回看组织进同一套项目工作流，
              让 AI 不再停留在零散试用，而是进入真正可协作、可治理、可持续运行的业务系统。
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/whitepaper"
              className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--site-accent))] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
            >
              看为什么值得采用
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/docs/interface-guides"
              className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--site-border))] bg-[rgb(var(--site-bg-surface-high)/0.5)] px-5 py-3 text-sm font-semibold text-white hover:border-[rgb(var(--site-accent)/0.4)]"
            >
              浏览关键界面
            </Link>
          </div>
          <div className="flex flex-wrap gap-3">
            {trustSignals.map((item) => (
              <span
                key={item}
                className="rounded-full border border-[rgb(var(--site-border-strong)/0.35)] bg-[rgb(var(--site-bg-base)/0.55)] px-3 py-1.5 text-xs font-semibold tracking-[0.14em] text-[rgb(var(--site-accent))]"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <Waypoints className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">双主线结构</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">既解决怎么用，也解决怎么管</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <Bot className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">Notebook 主线</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">让复杂执行进入长期任务工作流</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <FileStack className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">文件资产化</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">让结果留下来，并继续被团队复用</p>
            </div>
            <div className="rounded-[var(--site-radius-lg)] border border-[rgb(var(--site-border-subtle))] bg-[rgb(var(--site-bg-surface-high)/0.42)] p-4">
              <ShieldCheck className="h-5 w-5 text-[rgb(var(--site-accent))]" />
              <p className="mt-3 text-sm font-semibold text-white">治理闭环</p>
              <p className="mt-1 text-sm text-[rgb(var(--site-text-secondary))]">从资源约束一路连到用量和审计</p>
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
                从项目总览到任务执行，再到文件资产与治理链路，AgentSmith 把原本分散的企业 AI 工作收拢成一条可协作、可回看、也能不断积累结果的项目主线。
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] bg-[radial-gradient(circle_at_center,rgb(var(--site-accent)/0.18),transparent_70%)] blur-3xl" />
        </div>
      </section>

      <section className="site-section-divider mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            落地难点
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">真正阻碍企业 AI 落地的，是流程分裂而不是模型能力。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            企业真正遇到的难题，往往不是模型不够强，而是结果留不下来、流程接不起来、治理也很难说清楚。
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

      <section className="site-section-divider mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            为什么不是普通 AI 工具
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">差别不在于多一个模型入口，而在于能不能把结果接进团队长期工作。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            AgentSmith 试图解决的，不是一次调用是否顺滑，而是一次调用之后，团队还能不能继续协作、继续复用、继续治理，并把结果真正留在项目里。
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {comparisonPoints.map((item) => (
            <div
              key={item.label}
              className="site-surface rounded-[var(--site-radius-xl)] p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[rgb(var(--site-accent))]">
                {item.label}
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
              <p className="mt-4 leading-7 text-[rgb(var(--site-text-secondary))]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="site-section-divider mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <ValueStatement
            eyebrow="AgentSmith 的回答"
            title="把使用、治理与执行放进同一项目工作流。"
            summary="在 AgentSmith 里，团队成员不需要分别进入聊天工具、任务工具和治理后台工作，而是在同一个项目上下文中连续完成这些动作。产品因此不再只是“能用 AI”，而是能够让 AI 真正进入团队日常协作。"
            detail="与此同时，端点、策略、用量、成员和审计始终沿着同一条治理主线展开，任务过程、执行产物和文件资产也会持续沉淀下来，让后续回看、复用和规模化推广拥有稳定基础。"
          />
          <ValueStatement
            eyebrow="运行方式升级"
            title="把偏脚本化的 Agent 工作流升级成团队可用能力。"
            summary="许多智能体工作流之所以难以在团队里推广，不是因为能力不够，而是因为它们过于依赖个人命令行环境、临时目录和手工配置。AgentSmith 把这些原本偏脚本化的能力重新组织进统一任务空间，让执行真正成为产品能力，而不是少数人的经验。"
            detail="文件、端点、凭据和智能体能力因此可以在项目内持续复用，执行过程和治理记录也会自然接回同一套资产与审计链路，让团队更容易从试点走向长期运行。"
          />
        </div>
      </section>

      <section className="site-section-divider mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            为什么值得长期采用
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">这不是为了把更多 AI 功能塞进后台，而是为了把团队工作真正组织起来。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            只有当使用入口、任务结构、文件资产和治理主线彼此对应起来，AI 才会从一次次尝试变成可以长期依赖的团队能力。
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          <ValueStatement
            title="先让团队用起来"
            summary="Chat 和项目上下文一起降低了上手门槛，让 AI 更容易进入真实工作，而不是停留在少数人的试验环境。"
          />
          <ValueStatement
            title="再让结果留下来"
            summary="Notebook、Files 和任务产物把一次次执行结果沉淀为项目资产，让价值能够被复用，而不是每次都从零开始。"
          />
          <ValueStatement
            title="最后让企业管得住"
            summary="Endpoints、Policy、Usage 和 Audit 把资源边界、成本感知和回看能力接成闭环，让长期运营真正可控。"
          />
        </div>
      </section>

      <section className="site-section-divider mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              主线一
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">企业级 AI 控制平面</h2>
            <p className="mt-4 leading-7 text-[rgb(var(--site-text-secondary))]">
              以 workspace / project 组织 AI 使用，以 endpoint 为治理主线，把 Usage、Policy、Audit、
              Members 与 Settings 统一进同一套项目结构，让企业不必在“先用起来”和“后面再治理”之间来回补洞。
            </p>
            <p className="mt-5 text-sm font-medium text-[rgb(var(--site-accent))]">更适合长期运营的团队结构</p>
          </div>
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
              主线二
            </p>
            <h2 className="mt-4 text-2xl font-semibold text-white">通用智能体运行环境</h2>
            <p className="mt-4 leading-7 text-[rgb(var(--site-text-secondary))]">
              以 Notebook + Files + Agents 串联输入、执行、trace、artifacts 与运行工作目录，让智能体任务从个人技巧变成团队可以持续使用的正式能力。
            </p>
            <p className="mt-5 text-sm font-medium text-[rgb(var(--site-accent))]">更适合持续复用的执行结构</p>
          </div>
        </div>
      </section>

      <section className="site-section-divider mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            核心能力
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">围绕项目级 AI 使用、治理与执行形成统一能力骨架。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            从低门槛的日常使用，到复杂任务执行，再到资源治理与审计回看，所有关键能力都围绕同一条产品主线展开。
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featureCards.map((card) => (
            <FeatureCard key={card.title} {...card} ctaLabel="查看这项能力如何落地" />
          ))}
        </div>
      </section>

      <section className="site-section-divider mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="site-surface rounded-[var(--site-radius-xl)] p-8">
            <div className="max-w-3xl space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
                智能体运行链路
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-white">Notebook、Files、Agents 不是三个孤立能力，而是一条连续运行链路。</h2>
              <p className="text-[rgb(var(--site-text-secondary))]">
                用户通过 Notebook 创建任务，从 Files、URL 或历史 artifacts 带入上下文，绑定 Agent 与 Endpoint，最终把 trace 与产物沉淀回项目资产，让每一次运行都能服务后续工作。
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
            关键能力不需要停留在概念层面。你可以直接从真实产品界面看到它们如何被使用、如何产生结果，以及如何进入后续治理链路。
          </p>
        </div>
        <ReferenceGrid />
      </section>

      <section className="site-section-divider mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 max-w-3xl space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[rgb(var(--site-accent))]">
            继续阅读
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white">从你的关注点继续了解 AgentSmith。</h2>
          <p className="text-[rgb(var(--site-text-secondary))]">
            无论你更关注产品价值、实际使用方式，还是系统结构，都可以从对应入口继续往下看。
          </p>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {audienceCards.map((card) => (
            <AudienceCard key={card.title} {...card} />
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/docs/agent-runtime/why-not-just-agent-ui"
            className="inline-flex items-center gap-2 rounded-full bg-[rgb(var(--site-accent))] px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
          >
            看核心差异化
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/docs/architecture"
            className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--site-border))] bg-[rgb(var(--site-bg-surface-high)/0.5)] px-5 py-3 text-sm font-semibold text-white hover:border-[rgb(var(--site-accent)/0.4)]"
          >
            看整体架构
          </Link>
        </div>
      </section>
    </main>
  );
}
