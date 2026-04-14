import { Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

const WhatIsPromptEngineering = () => (
  <Layout>
    <article className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">

          {/* Back link */}
          <Link
            to="/prompt-guide"
            className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Prompt Guide
          </Link>

          {/* Header */}
          <div className="mb-12">
            <span className="mb-4 inline-block rounded-full border border-glow bg-secondary px-3 py-1 text-xs font-medium text-primary">
              Fundamentals
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              What is Prompt Engineering?
            </h1>
            <p className="mb-6 text-xl text-muted-foreground leading-relaxed">
              The skill of writing clear, structured instructions that get AI models to produce exactly what you need — every time.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                5 min read
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4" />
                April 13, 2026
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="mb-12 h-px bg-border" />

          {/* Body */}
          <div className="space-y-8 text-base leading-relaxed text-foreground">

            <p className="text-lg text-muted-foreground">
              AI models like ChatGPT and Claude are remarkably capable — but only when you know how to talk to them. Prompt engineering is the discipline of crafting those conversations intentionally, turning a vague idea into a precise instruction that produces reliable, high-quality results.
            </p>

            {/* Section */}
            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">What exactly is a prompt?</h2>
              <p className="text-muted-foreground">
                A prompt is any text input you send to an AI model. It can be a question, a command, a block of context, or a combination of all three. The model has no memory between sessions and no way to read your mind — it only knows what you put in the prompt. That makes the quality of your input directly tied to the quality of your output.
              </p>
            </div>

            {/* Highlight card */}
            <div className="rounded-xl border border-glow bg-gradient-card p-6">
              <p className="text-sm font-semibold text-primary mb-1">Key insight</p>
              <p className="text-muted-foreground">
                AI models are pattern-completion engines. They predict what text should come next based on your input. Better input creates better pattern matches — and better results.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Why does it matter?</h2>
              <p className="text-muted-foreground">
                Two people using the same AI model can get dramatically different results. One writes "summarize this" and gets a flat, generic paragraph. Another writes a structured prompt with role, format, and constraints — and gets a polished executive summary. Prompt engineering is the difference between those two outcomes.
              </p>
              <p className="mt-4 text-muted-foreground">
                As AI becomes central to writing, coding, design, and research, the ability to communicate effectively with these models is quickly becoming a core professional skill.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">Core techniques</h2>
              <div className="space-y-6">

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">Zero-shot prompting</h3>
                  <p className="text-muted-foreground">
                    You give the model a task with no examples — just a clear instruction. Works well for straightforward tasks where the model already has strong training. Example: <span className="text-foreground font-medium">"Translate the following sentence into French:"</span>
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">Few-shot prompting</h3>
                  <p className="text-muted-foreground">
                    You include one or more examples of the desired input/output pattern before your actual request. This teaches the model the format and tone you want without lengthy explanation. Highly effective for classification, reformatting, and style matching.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">Chain-of-thought prompting</h3>
                  <p className="text-muted-foreground">
                    You ask the model to reason step by step before answering. Adding <span className="text-foreground font-medium">"Think through this step by step"</span> to a complex question dramatically improves accuracy on math, logic, and multi-step reasoning tasks.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">Role prompting</h3>
                  <p className="text-muted-foreground">
                    You assign the model a persona or area of expertise at the start of the prompt. <span className="text-foreground font-medium">"You are a senior software engineer with 10 years of experience in Python..."</span> — this anchors the model's tone, vocabulary, and assumptions to a specific context.
                  </p>
                </div>

              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Practical tips for better prompts</h2>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Be specific about the output format — length, structure, tone, audience.",
                  "Set constraints explicitly: word count, language level, what to avoid.",
                  "Provide relevant context the model doesn't know — project background, existing code, prior decisions.",
                  "Split complex tasks into smaller, sequenced prompts instead of one giant request.",
                  "Iterate. If the output is off, adjust one element at a time to find what changed the result.",
                ].map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-xs font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="rounded-xl border border-glow bg-gradient-card p-8 text-center">
              <h3 className="mb-2 text-xl font-bold">Let Prombit do the engineering</h3>
              <p className="mb-6 text-muted-foreground">
                Prombit automatically applies these techniques to your rough input — so you get polished, optimized prompts without writing them from scratch.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-opacity hover:opacity-90"
              >
                Join the waitlist
              </Link>
            </div>

          </div>

          {/* Bottom nav */}
          <div className="mt-16 border-t border-border pt-8">
            <Link
              to="/prompt-guide"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Prompt Guide
            </Link>
          </div>

        </div>
      </div>
    </article>
  </Layout>
);

export default WhatIsPromptEngineering;
