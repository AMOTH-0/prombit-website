import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Zap, Sparkles, MousePointerClick, Chrome, Monitor, Smartphone, ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => (
  <Section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.1),transparent_50%)]" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,hsl(190_95%_50%/0.04),transparent_60%)]" />
    <div className="relative mx-auto max-w-4xl text-center">
      <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-glow bg-secondary/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
        <Sparkles className="h-3.5 w-3.5" />
        AI Prompt Engineering, Simplified
      </span>
      <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
        Write one line.{" "}
        <span className="text-gradient">Get the perfect prompt.</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
        Prombit takes your rough idea and instantly transforms it into a detailed, optimized prompt — ready for ChatGPT, Claude, Midjourney, and more.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link to="/contact">
          <Button variant="hero" size="lg" className="text-base px-8 h-12">
            Try Prombit <ArrowRight className="ml-1.5 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/features">
          <Button variant="hero-outline" size="lg" className="text-base px-8 h-12">
            See How It Works
          </Button>
        </Link>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Free to start</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> No login required</span>
        <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Works with any AI tool</span>
      </div>
    </div>
  </Section>
);

const HowItWorks = () => {
  const steps = [
    { icon: Zap, title: "Type your idea", description: "Enter a rough thought, question, or goal — even a single sentence works.", number: "01" },
    { icon: MousePointerClick, title: "Click improve", description: "Prombit's AI engine restructures, adds context, and optimizes your input instantly.", number: "02" },
    { icon: Sparkles, title: "Get a powerful prompt", description: "Copy the refined prompt into any AI tool and watch the quality of results skyrocket.", number: "03" },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(190_95%_50%/0.04),transparent_60%)]" />
      <div className="relative">
        <SectionHeading badge="How It Works" title="From rough idea to perfect prompt" description="Three simple steps. No prompt engineering skills required." />
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

const Benefits = () => {
  const benefits = [
    { title: "Save hours of prompt crafting", description: "Stop guessing. Get optimized prompts in seconds, not minutes of trial and error." },
    { title: "Works with all major AI tools", description: "Optimized for ChatGPT, Claude, Midjourney, DALL-E, Stable Diffusion, and more." },
    { title: "Learn as you go", description: "See how Prombit transforms your input and sharpen your own prompt skills over time." },
    { title: "Consistent, reliable results", description: "Get the same high-quality output every time instead of hit-or-miss AI responses." },
  ];

  return (
    <Section>
      <SectionHeading badge="Benefits" title="Why choose Prombit?" description="Built for anyone who uses AI — from curious beginners to power users." />
      <div className="grid gap-5 md:grid-cols-2">
        {benefits.map((b, i) => (
          <div key={i} className="group flex gap-5 rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:border-glow">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-primary">
              <CheckCircle2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ProductVersions = () => {
  const products = [
    {
      icon: Chrome,
      title: "Chrome Extension",
      description: "Works right inside your browser. Enhance prompts without leaving ChatGPT, Claude, or any AI tool.",
      cta: "Install Extension",
      link: "/chrome-extension",
      available: true,
    },
    {
      icon: Monitor,
      title: "Desktop App",
      description: "A full workflow tool for power users. Manage, save, and organize prompts from your desktop.",
      cta: "Learn More",
      link: "/desktop-app",
      available: false,
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Create and refine prompts anywhere. Capture ideas on the go and sync across devices.",
      cta: "Learn More",
      link: "/mobile-app",
      available: false,
    },
  ];

  return (
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.05),transparent_50%)]" />
      <div className="relative">
        <SectionHeading badge="Platforms" title="Available everywhere you work" description="Use Prombit wherever inspiration strikes — browser, desktop, or mobile." />
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:shadow-glow ${
                p.available
                  ? "border-glow bg-gradient-card shadow-glow"
                  : "border-border bg-gradient-card hover:border-glow"
              }`}
            >
              {!p.available && (
                <Badge variant="secondary" className="absolute top-4 right-4 text-[10px] uppercase tracking-wider text-muted-foreground">
                  Coming Soon
                </Badge>
              )}
              {p.available && (
                <Badge className="absolute top-4 right-4 bg-gradient-primary text-primary-foreground text-[10px] uppercase tracking-wider border-0">
                  Available
                </Badge>
              )}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary">
                <p.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold">{p.title}</h3>
              <p className="mb-8 flex-1 text-muted-foreground leading-relaxed">{p.description}</p>
              <Link to={p.link}>
                <Button
                  variant={p.available ? "hero" : "hero-outline"}
                  className="w-full"
                >
                  {p.cta}
                </Button>
              </Link>
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
        <h2 className="text-3xl font-extrabold md:text-5xl lg:text-6xl">
          Ready to get <span className="text-gradient">better AI results</span>?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted-foreground leading-relaxed">
          Join thousands of users who stopped guessing and started prompting with precision.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link to="/contact">
            <Button variant="hero" size="lg" className="text-base px-8 h-12">
              Get Early Access <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </Section>
);

const Index = () => (
  <Layout>
    <Hero />
    <HowItWorks />
    <Benefits />
    <ProductVersions />
    <CTASection />
  </Layout>
);

export default Index;
