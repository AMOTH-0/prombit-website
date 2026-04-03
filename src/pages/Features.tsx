import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Wand2, Languages, Layers, Lightbulb, Repeat, Shield, Play } from "lucide-react";

const features = [
  { icon: Wand2, title: "Smart Prompt Enhancement", description: "Automatically restructures and enriches your rough ideas into detailed, effective prompts." },
  { icon: Languages, title: "Multi-Tool Optimization", description: "Generates prompts tailored for ChatGPT, Claude, Midjourney, DALL-E, and more." },
  { icon: Layers, title: "Template Library", description: "Access a growing library of prompt templates for common tasks — writing, coding, design, and analysis." },
  { icon: Lightbulb, title: "Context Awareness", description: "Prombit understands your intent and adds relevant context, constraints, and formatting." },
  { icon: Repeat, title: "Iteration Mode", description: "Refine and iterate on prompts with version history and comparison tools." },
  { icon: Shield, title: "Privacy First", description: "Your prompts stay local. No data is stored on our servers unless you opt in." },
];

const Features = () => (
  <Layout>
    <Section>
      <SectionHeading badge="Features" title="Everything you need for perfect prompts" description="Prombit packs powerful features into a lightweight, intuitive tool." />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <div key={i} className="rounded-xl border border-border bg-gradient-card p-8 transition-all hover:border-glow hover:shadow-glow">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary">
              <f.icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{f.title}</h3>
            <p className="text-muted-foreground">{f.description}</p>
          </div>
        ))}
      </div>
    </Section>

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
  </Layout>
);

export default Features;
