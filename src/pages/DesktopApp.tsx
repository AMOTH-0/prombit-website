import Layout from "@/components/Layout";
import DownloadSection from "@/components/DownloadSection";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Monitor,
  Brain,
  ShieldCheck,
  ArrowRight,
  Clipboard,
  MousePointerClick,
  Layers,
  Filter,
  FolderOpen,
  Zap,
  RefreshCw,
  Lock,
} from "lucide-react";

const Hero = () => (
  <Section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.1),transparent_50%)]" />
    <div className="relative mx-auto max-w-4xl text-center">
      <div className="mb-8 inline-flex items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-glow bg-secondary/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
          <Monitor className="h-3.5 w-3.5" />
          Windows Desktop App
        </span>
        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Coming Soon
        </Badge>
      </div>
      <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Your AI tools finally{" "}
        <span className="text-gradient">know your work.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        Prombit is a personal context engineering layer for developers. It runs silently in the background — capturing your project context across every AI tool and every session, automatically.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link to="/contact">
          <Button variant="hero" size="lg" className="text-base px-8 h-12">
            Join the Waitlist <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </Link>
        <a href="#how-it-works">
          <Button variant="hero-outline" size="lg" className="text-base px-8 h-12">
            See How It Works
          </Button>
        </a>
      </div>
    </div>
  </Section>
);

const TheProblem = () => (
  <Section id="how-it-works">
    <SectionHeading
      badge="The Problem"
      title="Context is what your AI is missing"
      description="Every time you start a new chat, switch AI tools, or come back after a break — you lose everything. The tech stack, the decisions made, what was tried, where things stand. You re-explain it all, every time."
    />
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-glow bg-gradient-card p-8 text-center shadow-glow">
        <p className="text-lg text-foreground font-medium leading-relaxed">
          "Most AI failures in individual developer workflows are not model failures.<br />
          They are <span className="text-primary font-bold">context failures.</span>"
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Prombit is a personal context engineering layer that solves this at the OS level — automatically, passively, without changing how you work.
        </p>
      </div>
    </div>
  </Section>
);

const FeatureAnnotation = () => {
  const steps = [
    { icon: Clipboard, title: "Take a screenshot", description: "Use any tool you already use — Snipping Tool, Win+Shift+S, ShareX, or anything else. No new tools to learn." },
    { icon: MousePointerClick, title: "Annotate freely", description: "Circle things to focus on, draw an X to remove, add arrows to move elements. Draw naturally — no special vocabulary." },
    { icon: Zap, title: "One click to generate", description: "Prombit detects the screenshot on your clipboard instantly and shows a small popup. One click sends it to a vision model." },
    { icon: Layers, title: "Paste and go", description: "A structured, information-dense prompt is generated — with your visual instructions and project context combined — ready to paste into any AI tool." },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(190_95%_50%/0.04),transparent_60%)]" />
      <div className="relative">
        <SectionHeading
          badge="Feature 1"
          title="Annotation to Prompt"
          description="Mark up a screenshot. Prombit turns your visual intent into a precise, structured AI prompt — automatically injecting your project context so the AI understands both what to change and why."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {steps.map((s, i) => (
            <div key={i} className="flex gap-5 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-glow">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 rounded-2xl border border-border bg-card p-6">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Prombit interprets your drawings</p>
          <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {[
              ["Circle / oval", "Focus on this"],
              ["X or scribble", "Remove this"],
              ["Arrow", "Move this here"],
              ["Underline", "Emphasize this"],
              ["Text label", "Added to prompt directly"],
            ].map(([mark, meaning]) => (
              <div key={mark} className="rounded-xl border border-border bg-secondary/30 px-4 py-3 text-center">
                <p className="text-sm font-medium text-foreground">{mark}</p>
                <p className="mt-1 text-xs text-muted-foreground">{meaning}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

const FeatureMemory = () => {
  const capabilities = [
    { icon: Brain, title: "Passive prompt capture", description: "Prombit uses the Windows Accessibility API to capture prompts you submit to any AI tool — Claude, ChatGPT, Cursor, Replit, Lovable — without changing how you work." },
    { icon: Filter, title: "Smart project filtering", description: "A local classifier instantly scores every captured prompt. Development prompts are stored. Personal, off-topic, or short inputs are discarded immediately — never written to disk." },
    { icon: FolderOpen, title: "Automatic project clustering", description: "No naming, no tagging. Prombit groups your prompts into projects automatically based on content. Open the memory view and your projects are already organized." },
    { icon: RefreshCw, title: "Context rot prevention", description: "Only the most recent 10–15 prompts feed into handoff blocks. Rejected decisions are flagged so the AI never re-suggests them. Stale context stays archived, not injected." },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.05),transparent_50%)]" />
      <div className="relative">
        <SectionHeading
          badge="Feature 2"
          title="Persistent Project Memory"
          description="Prombit builds a context pipeline from your existing AI usage — automatically capturing, filtering, and organizing everything so you never have to re-explain your project again."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((c, i) => (
            <div key={i} className="flex gap-5 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-glow">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
                <c.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold">{c.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{c.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Handoff block example */}
        <div className="mt-8 rounded-2xl border border-glow bg-gradient-card p-8 shadow-glow">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">Example — Context Handoff Block</p>
          <pre className="overflow-x-auto rounded-xl border border-border bg-background/60 p-5 text-xs leading-relaxed text-muted-foreground font-mono">
{`Project: Dashboard Redesign
Stack: React + Tailwind + Recharts
Locked decisions: IBM Plex Mono font, no floating-ui (rejected — bundle size)
Done: scaffolding, KPI cards, layout refactor
Current task: adding date range picker
Next: connect to /analytics/v2 endpoint
Constraints: no new UI libraries, token refresh handled in AuthContext`}
          </pre>
          <p className="mt-4 text-sm text-muted-foreground">
            Paste this at the top of any new chat. The AI is immediately oriented — assembled automatically from your captured usage, not typed by hand.
          </p>
        </div>
      </div>
    </Section>
  );
};

const Privacy = () => (
  <Section>
    <SectionHeading
      badge="Privacy First"
      title="Local by default. Yours forever."
      description="All context data lives on your PC. No account required. No internet connection needed for core features."
    />
    <div className="mx-auto max-w-3xl">
      <div className="grid gap-5 sm:grid-cols-2">
        {[
          { icon: ShieldCheck, title: "What is stored", items: ["Structured project summaries", "Annotated screenshots linked to prompts", "Decision log — rejected and locked choices", "Session timestamps and AI tool metadata"] },
          { icon: Lock, title: "What is never stored", items: ["Prompts that failed the project classifier", "Text from password fields or auth flows", "Inputs below the character threshold", "Anything you manually mark as private"] },
        ].map((col, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-7">
            <div className="mb-4 flex items-center gap-3">
              <col.icon className="h-5 w-5 text-primary" />
              <h3 className="font-semibold">{col.title}</h3>
            </div>
            <ul className="space-y-2">
              {col.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-5 text-center text-sm text-muted-foreground">
        Optional cloud sync is planned for a future release — off by default, encrypted end-to-end, deletable at any time.
      </p>
    </div>
  </Section>
);

const BuildOrder = () => {
  const steps = [
    { n: "01", label: "Electron app skeleton", desc: "System tray, starts on boot, stays in background" },
    { n: "02", label: "Clipboard watcher", desc: "Detects new images, shows 'Generate prompt?' popup" },
    { n: "03", label: "Annotation-to-prompt", desc: "Send image to vision API, display and copy generated prompt" },
    { n: "04", label: "UI Automation hook", desc: "Capture submitted prompts from any app via Windows Accessibility API" },
    { n: "05", label: "Project classifier", desc: "Local model filters project vs personal prompts on-device" },
    { n: "06", label: "Project clustering", desc: "Group prompts into projects automatically by content" },
    { n: "07", label: "Context rot prevention", desc: "Decision log, rejection tagging, recency weighting" },
    { n: "08", label: "Continuation prompt", desc: "Assemble project context into a structured handoff block" },
    { n: "09", label: "Memory UI", desc: "View projects, history, pinned decisions, current state" },
    { n: "10", label: "Polish", desc: "Multi-monitor, settings panel, tool-specific prompt formatting" },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(217_91%_60%/0.04),transparent_60%)]" />
      <div className="relative">
        <SectionHeading badge="Build Roadmap" title="Built in public, step by step" description="Each step is independently useful and testable. We ship value at every stage." />
        <div className="mx-auto max-w-3xl space-y-3">
          {steps.map((s) => (
            <div key={s.n} className="flex items-center gap-5 rounded-xl border border-border bg-card px-6 py-4 transition-all hover:border-glow">
              <span className="text-2xl font-extrabold tabular-nums text-primary/30">{s.n}</span>
              <div>
                <p className="font-semibold text-foreground">{s.label}</p>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const CTASection = () => (
  <Section>
    <div className="relative overflow-hidden rounded-3xl border border-glow bg-gradient-card p-12 text-center md:p-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.08),transparent_60%)]" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative">
        <Badge variant="secondary" className="mb-6 text-[10px] uppercase tracking-wider text-muted-foreground">
          Windows · Coming Soon
        </Badge>
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Install once. Your AI tools get{" "}
          <span className="text-gradient">better immediately.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground leading-relaxed">
          No new habits. No workflow changes. Prombit layers context engineering on top of how you already work.
        </p>
        <div className="mt-10">
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base px-8 h-12">
              Join the Waitlist <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

const DesktopApp = () => (
  <Layout>
    <Hero />
    <TheProblem />
    <FeatureAnnotation />
    <FeatureMemory />
    <Privacy />
    <BuildOrder />
    <DownloadSection />
    <CTASection />
  </Layout>
);

export default DesktopApp;
