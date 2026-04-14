import { Link } from "react-router-dom";
import { ArrowRight, Clock, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

const posts = [
  {
    slug: "what-is-prompt-engineering",
    category: "Fundamentals",
    title: "What is Prompt Engineering?",
    excerpt:
      "Prompt engineering is the practice of crafting inputs that guide AI models toward accurate, useful, and reliable outputs. Learn the core techniques that separate good prompts from great ones.",
    readTime: "5 min read",
    date: "April 13, 2026",
  },
  {
    slug: "what-is-context-engineering",
    category: "Advanced",
    title: "What is Context Engineering?",
    excerpt:
      "Context engineering goes beyond writing a single prompt — it's about structuring the information AI models receive so they can reason, remember, and respond at their best.",
    readTime: "6 min read",
    date: "April 13, 2026",
  },
];

const PromptGuide = () => (
  <Layout>
    {/* Hero */}
    <Section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(217_91%_60%/0.08),transparent_60%)]" />
      <div className="relative">
        <SectionHeading
          badge="AI Prompt Guide"
          title="Learn to communicate with AI"
          description="In-depth articles on prompt engineering, context design, and getting the most out of every AI interaction."
        />
      </div>
    </Section>

    {/* Posts grid */}
    <Section className="pt-0 md:pt-0">
      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/prompt-guide/${post.slug}`}
            className="group rounded-xl border border-border bg-gradient-card p-8 transition-all hover:border-glow hover:shadow-glow"
          >
            {/* Category badge */}
            <span className="mb-4 inline-block rounded-full border border-glow bg-secondary px-3 py-1 text-xs font-medium text-primary">
              {post.category}
            </span>

            {/* Title */}
            <h2 className="mb-3 text-2xl font-bold leading-tight tracking-tight group-hover:text-gradient transition-all">
              {post.title}
            </h2>

            {/* Excerpt */}
            <p className="mb-6 text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {post.readTime}
                </span>
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-3.5 w-3.5" />
                  {post.date}
                </span>
              </div>
              <span className="flex items-center gap-1 text-sm font-medium text-primary">
                Read more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  </Layout>
);

export default PromptGuide;
