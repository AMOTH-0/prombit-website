import Layout from "@/components/Layout";
import DownloadSection from "@/components/DownloadSection";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Monitor,
  Keyboard,
  FolderOpen,
  History,
  Layers,
  Cpu,
  Workflow,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Zap,
  Clock,
  Globe,
} from "lucide-react";

const Hero = () => (
  <Section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.1),transparent_50%)]" />
    <div className="relative mx-auto max-w-4xl text-center">
      <div className="mb-8 inline-flex items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-glow bg-secondary/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
          <Monitor className="h-3.5 w-3.5" />
          Desktop App
        </span>
        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Coming Soon
        </Badge>
      </div>
      <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Your full AI prompt{" "}
        <span className="text-gradient">workspace</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        More control. More power. Deeper workflows. The Prombit desktop app gives you a dedicated environment to craft, manage, and optimize prompts at scale — without browser limitations.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link to="/contact">
          <Button variant="hero" size="lg" className="text-base px-8 h-12">
            Join Desktop Waitlist <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </Link>
        <a href="#why-desktop">
          <Button variant="hero-outline" size="lg" className="text-base px-8 h-12">
            Why Desktop?
          </Button>
        </a>
      </div>
    </div>
  </Section>
);

const WhyDesktop = () => {
  const reasons = [
    { icon: Cpu, title: "Dedicated performance", description: "No browser overhead. Prombit runs natively with faster processing and lower memory usage." },
    { icon: Keyboard, title: "Global hotkeys", description: "Trigger prompt enhancement from any app with system-wide keyboard shortcuts." },
    { icon: FolderOpen, title: "Prompt library", description: "Save, organize, and reuse your best prompts in a structured local library." },
    { icon: History, title: "Full history & versioning", description: "Track every prompt iteration. Compare versions and roll back to previous outputs." },
  ];

  return (
    <Section id="why-desktop">
      <SectionHeading badge="Why Desktop?" title="Beyond what a browser extension can do" description="The desktop app unlocks workflows that aren't possible in a browser tab." />
      <div className="grid gap-5 md:grid-cols-2">
        {reasons.map((r, i) => (
          <div key={i} className="flex gap-5 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-glow">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary">
              <r.icon className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">{r.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const AdvancedFeatures = () => {
  const features = [
    { icon: Layers, title: "Multi-prompt chains", description: "Build sequential prompt pipelines — feed the output of one prompt into the next automatically." },
    { icon: Workflow, title: "Custom templates", description: "Create reusable prompt templates with variables. Fill in the blanks and generate consistent results." },
    { icon: Sparkles, title: "Tone & style controls", description: "Fine-tune output style, length, audience, and format with advanced configuration panels." },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(190_95%_50%/0.04),transparent_60%)]" />
      <div className="relative">
        <SectionHeading badge="Advanced Features" title="Built for power users" description="Tools designed for professionals who rely on AI daily." />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {features.map((f, i) => (
            <div key={i} className="relative rounded-2xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:border-glow hover:shadow-glow">
              <Badge variant="secondary" className="absolute top-4 right-4 text-[10px] uppercase tracking-wider text-muted-foreground">
                Planned
              </Badge>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-primary">
                <f.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const WorkflowExamples = () => {
  const workflows = [
    {
      title: "Content creation pipeline",
      description: "Generate a blog outline → refine each section → produce a full draft, all through chained prompts.",
      tags: ["Writing", "Marketing"],
    },
    {
      title: "Code review assistant",
      description: "Paste code → generate a review prompt → get structured feedback with suggested improvements.",
      tags: ["Development", "Review"],
    },
    {
      title: "Research summarizer",
      description: "Input a topic → build a research prompt → receive organized summaries with key takeaways.",
      tags: ["Research", "Analysis"],
    },
  ];

  return (
    <Section>
      <SectionHeading badge="Workflows" title="Real workflows, real productivity" description="See how power users will leverage the desktop app." />
      <div className="mx-auto max-w-3xl space-y-5">
        {workflows.map((w, i) => (
          <div key={i} className="rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-glow">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              {w.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
            <h3 className="mb-2 text-lg font-bold">{w.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{w.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const FutureCapabilities = () => {
  const roadmap = [
    { icon: Globe, label: "Cross-device sync", description: "Sync your prompt library across desktop, extension, and mobile." },
    { icon: Zap, label: "Offline mode", description: "Core enhancement features work without an internet connection." },
    { icon: Clock, label: "Scheduled prompts", description: "Queue and schedule prompt workflows to run at specific times." },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.05),transparent_50%)]" />
      <div className="relative">
        <SectionHeading badge="Roadmap" title="What's coming next" description="We're building the desktop app in public. Here's a look at what's planned." />
        <div className="mx-auto max-w-3xl space-y-4">
          {roadmap.map((item, i) => (
            <div key={i} className="flex items-start gap-5 rounded-2xl border border-border bg-gradient-card p-6 transition-all hover:border-glow">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{item.label}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
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
          Coming Soon
        </Badge>
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Be the first to experience{" "}
          <span className="text-gradient">Prombit Desktop</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground leading-relaxed">
          Join the waitlist and get early access when the desktop app launches for macOS and Windows.
        </p>
        <div className="mt-10">
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base px-8 h-12">
              Join Desktop Waitlist <ArrowRight className="ml-1.5 h-4 w-4" />
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
    <WhyDesktop />
    <AdvancedFeatures />
    <WorkflowExamples />
    <FutureCapabilities />
    <DownloadSection />
    <CTASection />
  </Layout>
);

export default DesktopApp;
