import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What is Prombit?", a: "Prombit is a lightweight tool that transforms your short, vague input into high-quality AI prompts optimized for tools like ChatGPT, Claude, and Midjourney." },
  { q: "How does Prombit improve my prompts?", a: "Prombit analyzes your input, adds relevant context, restructures your request, and applies prompt engineering best practices — all automatically." },
  { q: "Which AI tools does Prombit work with?", a: "Prombit works with all major AI tools including ChatGPT, Claude, Midjourney, DALL-E, Stable Diffusion, Gemini, and more." },
  { q: "Is my data private?", a: "Yes. Prombit is privacy-first. Your prompts are processed locally when possible, and we never store your data without your explicit consent." },
  { q: "Is there a free plan?", a: "Yes! Prombit offers a generous free tier with 10 prompt enhancements per day. Upgrade to Pro for unlimited access." },
  { q: "Can I use Prombit on mobile?", a: "Yes. Prombit is available as a Chrome extension, desktop app (macOS & Windows), and mobile app (iOS & Android)." },
  { q: "How is Prombit different from writing prompts myself?", a: "Prombit applies proven prompt engineering techniques automatically — adding context, structure, and specificity that dramatically improve AI output quality." },
];

const FAQ = () => (
  <Layout>
    <Section>
      <SectionHeading badge="FAQ" title="Frequently asked questions" description="Everything you need to know about Prombit." />
      <div className="mx-auto max-w-2xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="rounded-xl border border-border bg-card px-6">
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  </Layout>
);

export default FAQ;
