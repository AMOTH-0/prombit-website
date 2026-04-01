import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, ArrowRight } from "lucide-react";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! You've been added to the waitlist.");
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <Layout>
      <Section>
        <div className="mx-auto max-w-xl">
          <SectionHeading badge="Get Early Access" title="Join the Prombit waitlist" description="Be among the first to experience the future of AI prompt crafting." />
          <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-8">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Name</label>
              <Input id="name" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message (optional)</label>
              <Textarea id="message" placeholder="Tell us what you're most excited about..." value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
            </div>
            <Button variant="hero" size="lg" className="w-full" type="submit">
              <Mail className="mr-2 h-4 w-4" /> Join Waitlist <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
