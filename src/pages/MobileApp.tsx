import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Zap,
  Lightbulb,
  PenLine,
  Clock,
  RefreshCw,
  ArrowRight,
  CheckCircle2,
  CloudUpload,
  Fingerprint,
} from "lucide-react";

const Hero = () => (
  <Section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.1),transparent_50%)]" />
    <div className="relative mx-auto max-w-4xl text-center">
      <div className="mb-8 inline-flex items-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-glow bg-secondary/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
          <Smartphone className="h-3.5 w-3.5" />
          Mobile App
        </span>
        <Badge variant="secondary" className="text-[10px] uppercase tracking-wider text-muted-foreground">
          Coming Soon
        </Badge>
      </div>
      <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Create powerful prompts{" "}
        <span className="text-gradient">anywhere</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        Capture ideas the moment they hit. Prombit Mobile lets you craft, refine, and save AI-ready prompts from your phone — fast, simple, and always in your pocket.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link to="/contact">
          <Button variant="hero" size="lg" className="text-base px-8 h-12">
            Join Mobile Waitlist <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </Section>
);

const UseCases = () => {
  const cases = [
    { icon: Lightbulb, title: "Capture quick ideas", description: "Had a flash of inspiration? Type a few words and Prombit turns it into a usable prompt before you forget." },
    { icon: PenLine, title: "Draft prompts on the go", description: "Commuting, waiting, or between meetings — create polished prompts whenever you have a free moment." },
    { icon: Zap, title: "Instant refinement", description: "Paste a rough prompt, tap improve, and get an optimized version in seconds — no editing needed." },
  ];

  return (
    <Section>
      <SectionHeading badge="Use Cases" title="Your prompt notebook, always with you" description="Perfect for moments when ideas strike and you need to act fast." />
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {cases.map((c, i) => (
          <div key={i} className="rounded-2xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:border-glow hover:shadow-glow">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
              <c.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="mb-3 text-xl font-bold">{c.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{c.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const SimplicitySpeed = () => {
  const points = [
    "One-tap prompt improvement — no menus, no settings",
    "Minimal interface designed for speed and focus",
    "Works offline for core prompt drafting",
    "Native iOS and Android performance",
    "Share directly to ChatGPT, Claude, or any AI app",
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(190_95%_50%/0.04),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl">
        <SectionHeading badge="Simple & Fast" title="Designed for thumbs, not tutorials" description="Every interaction is optimized for mobile. No bloat, no learning curve." />
        <div className="space-y-4">
          {points.map((point, i) => (
            <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-glow">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-foreground">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const SyncFeature = () => {
  const features = [
    { icon: CloudUpload, title: "Cloud sync", description: "Every prompt you create on mobile syncs to your desktop and browser extension automatically." },
    { icon: RefreshCw, title: "Seamless handoff", description: "Start a prompt on your phone, refine it on desktop. Pick up exactly where you left off." },
    { icon: Fingerprint, title: "Secure & private", description: "End-to-end encryption keeps your prompts private across all devices." },
  ];

  return (
    <Section>
      <SectionHeading badge="Cross-Device Sync" title="Start on mobile. Finish anywhere." description="Your prompt library travels with you across every Prombit platform." />
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
          Prombit in your <span className="text-gradient">pocket</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground leading-relaxed">
          Be the first to know when Prombit Mobile launches for iOS and Android.
        </p>
        <div className="mt-10">
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base px-8 h-12">
              Join Mobile Waitlist <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

const MobileApp = () => (
  <Layout>
    <Hero />
    <UseCases />
    <SimplicitySpeed />
    <SyncFeature />
    <CTASection />
  </Layout>
);

export default MobileApp;
