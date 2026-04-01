import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Monitor, Keyboard, Cpu } from "lucide-react";

const benefits = [
  { icon: Monitor, title: "Standalone Power", description: "A dedicated app that runs independently — no browser needed." },
  { icon: Keyboard, title: "Keyboard Shortcuts", description: "Trigger prompt enhancement from anywhere with global hotkeys." },
  { icon: Cpu, title: "Offline Capable", description: "Core features work offline. Enhance prompts even without an internet connection." },
];

const DesktopApp = () => (
  <Layout>
    <Section>
      <SectionHeading badge="Desktop App" title="Prombit on your desktop" description="A powerful standalone application for macOS and Windows with advanced features and keyboard shortcuts." />
      <div className="grid gap-8 md:grid-cols-3">
        {benefits.map((b, i) => (
          <div key={i} className="rounded-xl border border-border bg-gradient-card p-8 transition-all hover:border-glow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
              <b.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{b.title}</h3>
            <p className="text-muted-foreground">{b.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Button variant="hero" size="lg">Download for macOS</Button>
        <Button variant="hero-outline" size="lg">Download for Windows</Button>
      </div>
    </Section>
  </Layout>
);

export default DesktopApp;
