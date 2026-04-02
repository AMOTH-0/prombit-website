import { useRef, useEffect, useCallback } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Zap, Sparkles, MousePointerClick, Chrome, Monitor, Smartphone, ArrowRight, CheckCircle2, Play } from "lucide-react";

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef   = useRef<HTMLDivElement>(null);
  const mouseRef  = useRef({ x: -9999, y: -9999 });

  /* ── Particle canvas ─────────────────────────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    setSize();
    const ro = new ResizeObserver(setSize);
    ro.observe(canvas);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    const pts: P[] = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,  y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.35, vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.4 + 0.4,     a: Math.random() * 0.35 + 0.08,
    }));

    let raf: number;
    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const { x: mx, y: my } = mouseRef.current;

      for (const p of pts) {
        const dx = mx - p.x, dy = my - p.y, d = Math.hypot(dx, dy);
        if (d < 180 && d > 0) { p.vx += (dx / d) * 0.018; p.vy += (dy / d) * 0.018; }
        p.vx *= 0.985; p.vy *= 0.985;
        p.x = (p.x + p.vx + canvas.width)  % canvas.width;
        p.y = (p.y + p.vy + canvas.height) % canvas.height;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(148,163,255,${p.a})`;
        ctx.fill();
      }

      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(148,163,255,${(1 - d / 100) * 0.07})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => { ro.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  /* ── Mouse handlers ──────────────────────────────────────────────────── */
  const onMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.08s ease-out";
      const cr = cardRef.current.getBoundingClientRect();
      const rx = ((e.clientY - (cr.top  + cr.height / 2)) / cr.height) * 16;
      const ry = ((e.clientX - (cr.left + cr.width  / 2)) / cr.width)  * -16;
      cardRef.current.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg)`;
    }
  }, []);

  const onMouseLeave = useCallback(() => {
    mouseRef.current = { x: -9999, y: -9999 };
    if (cardRef.current) {
      cardRef.current.style.transition = "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)";
      cardRef.current.style.transform  = "perspective(900px) rotateX(0deg) rotateY(0deg)";
    }
  }, []);

  /* ── Render ──────────────────────────────────────────────────────────── */
  return (
    <section
      className="relative overflow-hidden pt-32 md:pt-40 pb-16 md:pb-24"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }} />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Ambient orbs */}
      <div className="hero-orb-1" />
      <div className="hero-orb-2" />
      <div className="hero-orb-3" />

      {/* Bottom fade into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{ height: 180, background: "linear-gradient(to bottom, transparent, hsl(220, 20%, 4%))", zIndex: 2 }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 relative" style={{ zIndex: 3 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <div className="text-center lg:text-left" style={{ perspective: "600px" }}>
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
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
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
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Free to start</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> No login required</span>
                <span className="inline-flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-primary" /> Works with any AI tool</span>
              </div>
            </div>
          </div>

          {/* Right: 3D parallax card — desktop only */}
          <div className="hidden lg:flex items-center justify-center">
            <div
              ref={cardRef}
              style={{ transformStyle: "preserve-3d", transition: "transform 0.08s ease-out", animation: "hero-text-in 0.9s cubic-bezier(0.22,1,0.36,1) 0.6s both" }}
            >
              <div style={{
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(148,163,255,0.15)",
                borderRadius: 24,
                padding: 28,
                width: 360,
                boxShadow: "0 25px 60px -15px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}>
                {/* Window chrome */}
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 20 }}>
                  {(["#ef4444","#f59e0b","#22c55e"] as const).map((c) => (
                    <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c, opacity: 0.8 }} />
                  ))}
                  <span style={{ marginLeft: 10, fontSize: 11, color: "rgba(148,163,255,0.45)", fontFamily: "monospace" }}>
                    prompt.enhance()
                  </span>
                </div>

                {/* Input */}
                <div style={{ marginBottom: 14 }}>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(255,255,255,0.3)", marginBottom: 8 }}>Your Input</div>
                  <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "rgba(255,255,255,0.45)", fontFamily: "monospace", lineHeight: 1.5 }}>
                    "write me a landing page"
                  </div>
                </div>

                {/* Transform pill */}
                <div style={{ textAlign: "center", margin: "12px 0" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "linear-gradient(135deg, hsl(217, 91%, 60%), hsl(190, 95%, 50%))", borderRadius: 20, padding: "4px 14px", fontSize: 11, fontWeight: 600, color: "white" }}>
                    ✦ Prombit enhanced
                  </span>
                </div>

                {/* Output */}
                <div>
                  <div style={{ fontSize: 10, textTransform: "uppercase", letterSpacing: "0.1em", color: "rgba(148,163,255,0.6)", marginBottom: 8 }}>Optimized Prompt</div>
                  <div style={{ background: "rgba(94,114,255,0.07)", border: "1px solid rgba(148,163,255,0.15)", borderRadius: 10, padding: "10px 14px", fontSize: 12, color: "rgba(255,255,255,0.75)", fontFamily: "monospace", lineHeight: 1.65 }}>
                    "Write a modern, conversion-focused landing page for a SaaS product. Include a hero with clear value proposition, 3-step how it works, benefit cards with icons, and a strong CTA..."
                  </div>
                </div>

                {/* Stats */}
                <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
                  {[["⚡","Instant"],["🎯","Optimized"],["✓","AI-ready"]].map(([icon, label]) => (
                    <div key={label} style={{ flex: 1, textAlign: "center", background: "rgba(148,163,255,0.05)", border: "1px solid rgba(148,163,255,0.1)", borderRadius: 10, padding: "8px 0", fontSize: 11, color: "rgba(148,163,255,0.65)" }}>
                      <div style={{ marginBottom: 2 }}>{icon}</div>
                      <div>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
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
