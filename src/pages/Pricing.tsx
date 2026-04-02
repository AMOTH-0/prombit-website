import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Chrome } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Get started with basic prompt enhancement.",
    features: ["10 prompt enhancements/day", "Works with ChatGPT & Claude", "Community support"],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Pro",
    price: "$9",
    period: "/month",
    description: "Unlimited enhancements and advanced features.",
    features: ["Unlimited prompt enhancements", "All AI tool optimizations", "Template library access", "Iteration & history", "Desktop & Mobile apps", "Priority support"],
    cta: "Start Pro Trial",
    featured: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    description: "Shared prompts and team collaboration.",
    features: ["Everything in Pro", "5 team members included", "Shared prompt library", "Team analytics", "Admin controls", "Dedicated support"],
    cta: "Contact Sales",
    featured: false,
  },
];

const Pricing = () => (
  <Layout>
    <Section>
      <SectionHeading badge="Pricing" title="Simple, transparent pricing" description="Start free, upgrade when you need more power." />

      {/* Chrome Extension free callout */}
      <div className="mb-10 flex items-center justify-center gap-3 rounded-2xl border border-glow bg-gradient-card px-6 py-4 text-center shadow-glow">
        <Chrome className="h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm font-medium text-foreground">
          <span className="text-primary font-semibold">Chrome Extension is completely free</span> — no plan, no account, no credit card required. Ever.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`flex flex-col rounded-xl border p-8 transition-all hover:shadow-glow ${
              plan.featured ? "border-glow bg-gradient-card shadow-glow" : "border-border bg-card"
            }`}
          >
            {plan.featured && (
              <span className="mb-4 w-fit rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <div className="mt-2 flex items-baseline gap-1">
              <span className="text-4xl font-extrabold">{plan.price}</span>
              <span className="text-muted-foreground">{plan.period}</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            <ul className="mt-6 flex-1 space-y-3">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-secondary-foreground">{f}</span>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="mt-8">
              <Button variant={plan.featured ? "hero" : "hero-outline"} className="w-full">
                {plan.cta}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  </Layout>
);

export default Pricing;
