import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Zap, Target, Sparkles, Chrome, Monitor, Smartphone, ArrowRight } from "lucide-react";

const Hero = () => (
  <Section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.08),transparent_60%)]" />
    <div className="relative mx-auto max-w-4xl text-center">
      <span className="mb-6 inline-block rounded-full border border-glow bg-secondary px-4 py-1.5 text-xs font-medium text-primary">
        ✨ AI Prompt Engineering, Simplified
      </span>
      <h1 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
        Turn vague ideas into{" "}
        <span className="text-gradient">perfect AI prompts</span>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl">
        Prombit transforms your short, rough input into high-quality prompts optimized for ChatGPT, Claude, Midjourney, and more. Get better AI results, every time.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Link to="/contact">
          <Button variant="hero" size="lg" className="text-base">
            Join the Waitlist <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
        <Link to="/features">
          <Button variant="hero-outline" size="lg" className="text-base">
            See How It Works
          </Button>
        </Link>
      </div>
    </div>
  </Section>
);

const HowItWorks = () => {
  const steps = [
    { icon: Target, title: "Type your idea", description: "Enter a rough idea, question, or goal — no need to be precise." },
    { icon: Sparkles, title: "Prombit enhances it", description: "Our AI engine restructures, adds context, and optimizes your prompt." },
    { icon: Zap, title: "Get perfect results", description: "Paste the refined prompt into any AI tool and get dramatically better output." },
  ];

  return (
    <Section>
      <SectionHeading badge="How It Works" title="Three steps to better AI" description="No prompt engineering skills needed. Just type and go." />
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={i} className="group rounded-xl border border-border bg-gradient-card p-8 transition-all hover:border-glow hover:shadow-glow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
              <step.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="mb-2 block text-sm font-medium text-primary">Step {i + 1}</span>
            <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
            <p className="text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: "Save hours of prompt crafting", description: "Stop spending time trying to figure out the perfect prompt. Prombit does it for you in seconds." },
    { title: "Works with all major AI tools", description: "Optimized for ChatGPT, Claude, Midjourney, DALL-E, Stable Diffusion, and more." },
    { title: "Learn as you go", description: "See how Prombit transforms your input and improve your own prompt skills over time." },
    { title: "Consistent, reliable results", description: "Get the same high-quality output every time instead of hit-or-miss responses." },
  ];

  return (
    <Section>
      <SectionHeading badge="Benefits" title="Why choose Prombit?" description="Built for anyone who uses AI tools — from beginners to power users." />
      <div className="grid gap-6 md:grid-cols-2">
        {benefits.map((b, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-8 transition-all hover:border-glow">
            <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
            <p className="text-muted-foreground">{b.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const ProductVersions = () => {
  const products = [
    { icon: Chrome, title: "Chrome Extension", description: "Enhance prompts directly in your browser. Works seamlessly with ChatGPT, Claude, and more.", cta: "Install Chrome Extension", link: "/chrome-extension" },
    { icon: Monitor, title: "Desktop App", description: "A powerful standalone app for macOS and Windows. Access Prombit from your desktop anytime.", cta: "Download Desktop App", link: "/desktop-app" },
    { icon: Smartphone, title: "Mobile App", description: "Craft perfect prompts on the go. Available for iOS and Android.", cta: "Get Mobile App", link: "/mobile-app" },
  ];

  return (
    <Section>
      <SectionHeading badge="Platforms" title="Available everywhere you work" description="Use Prombit wherever you are — browser, desktop, or mobile." />
      <div className="grid gap-8 md:grid-cols-3">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col rounded-xl border border-border bg-gradient-card p-8 transition-all hover:border-glow hover:shadow-glow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <p.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
            <p className="mb-6 flex-1 text-muted-foreground">{p.description}</p>
            <Link to={p.link}>
              <Button variant="hero-outline" className="w-full">
                {p.cta}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  );
};

const CTASection = () => (
  <Section>
    <div className="relative rounded-2xl border border-glow bg-gradient-card p-12 text-center md:p-20">
      <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(ellipse_at_center,hsl(217_91%_60%/0.06),transparent_70%)]" />
      <div className="relative">
        <h2 className="text-3xl font-bold md:text-5xl">
          Ready to supercharge your <span className="text-gradient">AI workflow</span>?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-lg text-muted-foreground">
          Join thousands of users who are already getting better results from their AI tools with Prombit.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="lg" className="mt-8 text-base">
            Get Early Access <ArrowRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
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
