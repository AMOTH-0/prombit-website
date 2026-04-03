import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const FORM_URL = "https://forms.gle/BGTMEaHamMpMay5Q9";

const Contact = () => (
  <Layout>
    <Section>
      <div className="mx-auto max-w-xl text-center">
        <SectionHeading
          badge="Get Early Access"
          title="Join the Prombit waitlist"
          description="Be among the first to experience the future of AI prompt crafting."
        />
        <div className="rounded-2xl border border-glow bg-gradient-card p-10 shadow-glow">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary mx-auto">
            <Mail className="h-8 w-8 text-primary-foreground" />
          </div>
          <p className="mb-8 text-muted-foreground leading-relaxed">
            Fill out our quick form to join the waitlist, request a feature, or send us a message. We read every submission.
          </p>
          <a href={FORM_URL} target="_blank" rel="noreferrer">
            <Button variant="hero" size="lg" className="w-full text-base h-12">
              Open Inquiry Form <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </a>
          <p className="mt-4 text-xs text-muted-foreground">Opens in a new tab · Powered by Google Forms</p>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Contact;
