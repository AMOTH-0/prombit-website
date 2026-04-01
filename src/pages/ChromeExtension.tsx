import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Chrome, Zap, Puzzle, Globe } from "lucide-react";

const benefits = [
  { icon: Zap, title: "One-Click Enhancement", description: "Highlight text or click the extension icon to instantly optimize any prompt." },
  { icon: Puzzle, title: "Seamless Integration", description: "Works natively inside ChatGPT, Claude, and other AI tool interfaces." },
  { icon: Globe, title: "Works Everywhere", description: "Activate Prombit on any website where you interact with AI." },
];

const ChromeExtension = () => (
  <Layout>
    <Section>
      <SectionHeading badge="Chrome Extension" title="Enhance prompts right in your browser" description="Install the Prombit Chrome extension and upgrade every AI interaction without leaving your workflow." />
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
      <div className="mt-12 text-center">
        <Button variant="hero" size="lg">
          <Chrome className="mr-2 h-5 w-5" /> Install Chrome Extension
        </Button>
      </div>
    </Section>
  </Layout>
);

export default ChromeExtension;
