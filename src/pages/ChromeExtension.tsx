import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Chrome,
  Zap,
  MousePointerClick,
  Sparkles,
  MessageSquare,
  BrainCircuit,
  ArrowRight,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

const Hero = () => (
  <Section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-20">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.1),transparent_50%)]" />
    <div className="relative mx-auto max-w-4xl text-center">
      <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-glow bg-secondary/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
        <Chrome className="h-3.5 w-3.5" />
        Chrome Extension
      </span>
      <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Turn simple ideas into{" "}
        <span className="text-gradient">powerful AI prompts</span> instantly
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        Prombit works directly inside ChatGPT, Claude, and your favorite AI tools. One click transforms your rough input into an optimized, detailed prompt.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button variant="hero" size="lg" className="text-base px-8 h-12">
          <Chrome className="mr-2 h-5 w-5" /> Install Chrome Extension
        </Button>
        <a href="#how-it-works">
          <Button variant="hero-outline" size="lg" className="text-base px-8 h-12">
            See How It Works <ArrowDown className="ml-1.5 h-4 w-4" />
          </Button>
        </a>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Free to use</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> No account needed</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Works in seconds</span>
      </div>
    </div>
  </Section>
);

const WhatItDoes = () => (
  <Section>
    <div className="mx-auto max-w-3xl">
      <SectionHeading
        badge="What It Does"
        title="Your AI prompt co-pilot, built into the browser"
        description="Prombit sits quietly in your toolbar until you need it. When you do, it transforms any rough input into a well-structured, context-rich prompt."
      />
      <div className="space-y-4">
        {[
          "Rewrites vague prompts into clear, detailed instructions",
          "Adds context, structure, and specificity automatically",
          "Optimized output for ChatGPT, Claude, Midjourney & more",
          "Preserves your intent while dramatically improving quality",
          "Works on any website where you type prompts",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 transition-all hover:border-glow">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-foreground">{item}</p>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Type your idea",
      description: "Write a rough prompt in any AI tool — even a single sentence or a few keywords.",
      number: "01",
    },
    {
      icon: MousePointerClick,
      title: "Click improve",
      description: "Hit the Prombit icon or keyboard shortcut. The extension activates instantly.",
      number: "02",
    },
    {
      icon: Sparkles,
      title: "Get a powerful prompt",
      description: "Your input is rewritten into a detailed, optimized prompt ready to deliver great results.",
      number: "03",
    },
  ];

  return (
    <Section id="how-it-works" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(190_95%_50%/0.04),transparent_60%)]" />
      <div className="relative">
        <SectionHeading badge="How It Works" title="Better prompts in 3 seconds" description="No learning curve. No copy-pasting between tabs. Just click and go." />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={i} className="group relative rounded-2xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:border-glow hover:shadow-glow">
              <div className="absolute -top-4 left-8">
                <span className="inline-flex h-8 items-center rounded-full bg-gradient-primary px-4 text-xs font-bold text-primary-foreground">
                  Step {step.number}
                </span>
              </div>
              <div className="mt-4 mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const KeyFeatures = () => {
  const features = [
    { icon: Zap, title: "One-click prompt improvement", description: "Select any text or type in the popup — Prombit enhances it instantly with zero friction." },
    { icon: BrainCircuit, title: "Works inside ChatGPT, Claude & more", description: "No tab switching. Prombit integrates directly into the AI tools you already use daily." },
    { icon: Sparkles, title: "No prompt engineering skills needed", description: "Just describe what you want. Prombit handles the structure, context, and optimization." },
  ];

  return (
    <Section>
      <SectionHeading badge="Key Features" title="Everything you need, nothing you don't" description="Focused, fast, and designed to stay out of your way." />
      <div className="grid gap-6 md:grid-cols-3 md:gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-start rounded-2xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:border-glow hover:shadow-glow">
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

const ExampleTransformation = () => (
  <Section className="relative">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.05),transparent_50%)]" />
    <div className="relative">
      <SectionHeading badge="See the Difference" title="One input. Dramatically better output." description="Here's what happens when Prombit enhances a real prompt." />
      <div className="mx-auto max-w-4xl">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Before */}
          <div className="rounded-2xl border border-border bg-card p-8">
            <Badge variant="secondary" className="mb-5 text-[10px] uppercase tracking-wider text-muted-foreground">
              Before — Your Input
            </Badge>
            <div className="rounded-xl border border-border bg-muted/50 p-6">
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                "write me a landing page for my app"
              </p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Vague, lacks context. AI will guess and produce generic results.
            </p>
          </div>

          {/* After */}
          <div className="rounded-2xl border border-glow bg-gradient-card p-8 shadow-glow">
            <Badge className="mb-5 bg-gradient-primary text-primary-foreground text-[10px] uppercase tracking-wider border-0">
              After — Prombit Output
            </Badge>
            <div className="rounded-xl border border-glow bg-muted/50 p-6">
              <p className="font-mono text-sm text-foreground leading-relaxed">
                "Write a modern, conversion-focused landing page for a SaaS product called Prombit. Include a hero section with a clear value proposition headline, a 3-step 'how it works' section, key benefits with icons, a pricing comparison, and a strong CTA. Use a dark tech aesthetic with blue accent colors. Make it mobile-responsive and SEO-friendly."
              </p>
            </div>
            <p className="mt-4 text-sm text-primary">
              Detailed, structured, and ready to produce exceptional results.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

const CTASection = () => (
  <Section>
    <div className="relative overflow-hidden rounded-3xl border border-glow bg-gradient-card p-12 text-center md:p-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.08),transparent_60%)]" />
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
      <div className="relative">
        <h2 className="text-3xl font-extrabold md:text-5xl">
          Stop guessing. <span className="text-gradient">Start prompting.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground leading-relaxed">
          Install the free Chrome extension and get better AI results starting today.
        </p>
        <div className="mt-10">
          <Button variant="hero" size="lg" className="text-base px-8 h-12">
            <Chrome className="mr-2 h-5 w-5" /> Install Chrome Extension <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">Free forever on the Starter plan. No credit card required.</p>
      </div>
    </div>
  </Section>
);

const ChromeExtension = () => (
  <Layout>
    <Hero />
    <WhatItDoes />
    <HowItWorks />
    <KeyFeatures />
    <ExampleTransformation />
    <CTASection />
  </Layout>
);

export default ChromeExtension;
