import { useRef, useEffect } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Zap, Sparkles, MousePointerClick, Chrome, Monitor, Smartphone, ArrowRight, CheckCircle2, Play } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  /* ── Cinematic drifting star field ───────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    type Star = { x: number; y: number; r: number; baseAlpha: number; twinkleOffset: number; blue: boolean };
    const stars: Star[] = Array.from({ length: 250 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight * 2,
      r: Math.random() * 1.8 + 0.2,
      baseAlpha: Math.random() * 0.7 + 0.3,
      twinkleOffset: Math.random() * Math.PI * 2,
      blue: Math.random() < 0.3,
    }));

    const VX = 0.09;
    const VY = -0.06;
    let prevScrollY = window.scrollY;
    let raf: number;
    let t = 0;

    const tick = () => {
      t += 0.016;
      const scrollY = window.scrollY;
      const scrollDelta = scrollY - prevScrollY;
      prevScrollY = scrollY;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of stars) {
        s.x = (s.x + VX + canvas.width)  % canvas.width;
        s.y = (s.y + VY + scrollDelta * 0.4 + canvas.height) % canvas.height;

        const twinkle = 0.5 + 0.5 * Math.sin(t * 1.2 + s.twinkleOffset);
        const alpha = s.baseAlpha * (0.6 + 0.4 * twinkle);

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.blue
          ? `rgba(180,210,255,${alpha})`
          : `rgba(255,255,255,${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  /* ── Render ──────────────────────────────────────────────────────────── */
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24">
      {/* Star field canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      {/* Ambient orbs */}
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      <div className="hero-orb-3" />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 180, background: "linear-gradient(to bottom, transparent, hsl(220, 20%, 4%))", zIndex: 2 }}
      />

      {/* Content — centered */}
      <div className="container mx-auto px-4 relative" style={{ zIndex: 3 }}>
        <div className="mx-auto max-w-3xl text-center" style={{ perspective: "600px" }}>

          <div style={{ animation: "hero-text-in 0.8s cubic-bezier(0.22,1,0.36,1) 0.3s both", transformOrigin: "bottom center" }}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-glow bg-secondary/60 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              AI Prompt Engineering, Simplified
            </span>
          </div>

          <div style={{ animation: "hero-text-in 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s both", transformOrigin: "bottom center" }}>
            <h1 className="mt-4 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              Write one line.
            </h1>
          </div>

          <div style={{ animation: "hero-text-in 0.8s cubic-bezier(0.22,1,0.36,1) 0.7s both", transformOrigin: "bottom center" }}>
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
              <span className="text-gradient">Get the perfect prompt.</span>
            </h1>
          </div>

          <div style={{ animation: "hero-text-in 0.8s cubic-bezier(0.22,1,0.36,1) 0.95s both", transformOrigin: "bottom center" }}>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Prombit takes your rough idea and instantly transforms it into a detailed, optimized prompt — ready for ChatGPT, Claude, Midjourney, and more.
            </p>
          </div>

          <div style={{ animation: "hero-text-in 0.8s cubic-bezier(0.22,1,0.36,1) 1.1s both", transformOrigin: "bottom center" }}>
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

        </div>
      </div>
    </section>
  );
};

const DemoVideo = () => (
  <Section className="relative pt-0 md:pt-0">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.06),transparent_50%)]" />
    <div className="relative mx-auto max-w-4xl">
      <div className="mb-6 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <Play className="h-4 w-4 text-primary" />
        <span>See Prombit in action</span>
      </div>
      <div className="overflow-hidden rounded-2xl border border-glow shadow-glow">
        <video
          src="/prombit-demo.mp4"
          poster="/prombit-thumbnail.png"
          controls
          playsInline
          className="w-full"
        />
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
    <DemoVideo />
    <HowItWorks />
    <Benefits />
    <ProductVersions />
    <CTASection />
  </Layout>
);

export default Index;
