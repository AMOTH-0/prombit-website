import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Smartphone, Share2, Mic } from "lucide-react";

const benefits = [
  { icon: Smartphone, title: "Native Experience", description: "Built natively for iOS and Android with smooth performance and intuitive gestures." },
  { icon: Share2, title: "Share & Export", description: "Share enhanced prompts directly to your favorite AI apps or copy to clipboard." },
  { icon: Mic, title: "Voice Input", description: "Speak your idea and let Prombit turn it into a polished prompt." },
];

const MobileApp = () => (
  <Layout>
    <Section>
      <SectionHeading badge="Mobile App" title="Perfect prompts on the go" description="Craft AI-ready prompts anywhere with the Prombit mobile app for iOS and Android." />
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
        <Button variant="hero" size="lg">Download for iOS</Button>
        <Button variant="hero-outline" size="lg">Download for Android</Button>
      </div>
    </Section>
  </Layout>
);

export default MobileApp;
