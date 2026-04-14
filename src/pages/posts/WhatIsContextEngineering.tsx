import { Link } from "react-router-dom";
import { ArrowLeft, Clock, BookOpen } from "lucide-react";
import Layout from "@/components/Layout";

const WhatIsContextEngineering = () => (
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
              Advanced
            </span>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              What is Context Engineering?
            </h1>
            <p className="mb-6 text-xl text-muted-foreground leading-relaxed">
              Beyond writing a single prompt — structuring everything the AI sees so it can reason, remember, and respond at its highest level.
            </p>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                6 min read
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
              Prompt engineering teaches you how to write better instructions. Context engineering teaches you how to build a better environment for those instructions to live in. It's the difference between handing someone a sticky note and handing them a full briefing document.
            </p>

            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Prompt engineering vs. context engineering</h2>
              <p className="text-muted-foreground">
                Prompt engineering focuses on a single input — the words you type. Context engineering is about everything that surrounds and shapes that input: the system prompt, conversation history, injected documents, memory, tool outputs, and the order in which all of this information arrives.
              </p>
              <p className="mt-4 text-muted-foreground">
                Think of it this way: prompt engineering is writing one great email. Context engineering is setting up the entire system — the sender's profile, the thread history, the attached files, and the recipient's known preferences — so that the email lands perfectly.
              </p>
            </div>

            {/* Highlight card */}
            <div className="rounded-xl border border-glow bg-gradient-card p-6">
              <p className="text-sm font-semibold text-primary mb-1">Key insight</p>
              <p className="text-muted-foreground">
                An AI model can only work with what's in its context window. Context engineering is the discipline of deciding what goes in that window, how it's structured, and in what order — to give the model the best possible foundation for every response.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">What is a context window?</h2>
              <p className="text-muted-foreground">
                Every AI model has a context window — the total amount of text it can "see" and reason about at once. This includes your current message, the system instructions, the conversation history, and any documents or tool results you've injected. Once the window fills up, older content is dropped.
              </p>
              <p className="mt-4 text-muted-foreground">
                Modern models like Claude and GPT-4o support windows ranging from 128,000 to over 200,000 tokens. That's a lot of room — but it still fills up fast in complex workflows, and filling it with the wrong things leads to degraded performance.
              </p>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-bold tracking-tight">The pillars of context engineering</h2>
              <div className="space-y-6">

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">System prompts</h3>
                  <p className="text-muted-foreground">
                    The system prompt is the highest-priority instruction the model receives — set before any user message. It defines the model's role, constraints, tone, and rules of engagement. Well-designed system prompts are the foundation of every reliable AI workflow.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">Retrieval-augmented generation (RAG)</h3>
                  <p className="text-muted-foreground">
                    Instead of relying on the model's training data, you retrieve relevant documents and inject them into the context at runtime. The model answers based on what you give it, not what it memorized — making responses far more accurate and up-to-date.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">Conversation history management</h3>
                  <p className="text-muted-foreground">
                    Long conversations accumulate a lot of tokens. Context engineers decide what history to keep verbatim, what to summarize, and what to drop entirely. Compressing old turns intelligently keeps the model focused on what matters most right now.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">Memory and state injection</h3>
                  <p className="text-muted-foreground">
                    AI models have no memory between sessions by default. External memory systems store facts, preferences, and prior decisions — and inject only the relevant subset at the start of each new conversation. This gives the model continuity without flooding the window.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-gradient-card p-6 transition-all hover:border-glow hover:shadow-glow">
                  <h3 className="mb-2 text-lg font-semibold">Information ordering</h3>
                  <p className="text-muted-foreground">
                    Research shows that models pay more attention to information at the start and end of the context window — the "lost in the middle" effect. Context engineers place the most critical information in high-attention positions and structure the context to reduce cognitive load on the model.
                  </p>
                </div>

              </div>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">Why context engineering is the next frontier</h2>
              <p className="text-muted-foreground">
                As AI moves from single-turn chatbots to multi-step agents that browse the web, write code, and execute workflows, context engineering becomes critical. Agents need to maintain state, coordinate tools, and make decisions across dozens of steps — all within a finite context window.
              </p>
              <p className="mt-4 text-muted-foreground">
                The best AI products in the next few years won't just have better models — they'll have better context management. Companies that master this will build AI that feels like it truly understands the user, because structurally, it does.
              </p>
            </div>

            <div>
              <h2 className="mb-4 text-2xl font-bold tracking-tight">How to apply it today</h2>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Write a detailed system prompt for any recurring AI workflow — role, goal, constraints, output format.",
                  "Before a complex task, paste in only the most relevant background documents. More context isn't always better.",
                  "Summarize long conversation history instead of carrying the full transcript forward.",
                  "Put your most important instruction at the very beginning or very end of your prompt — not buried in the middle.",
                  "When using AI agents, design how state is stored and what gets injected at each step, not just what each step says.",
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
              <h3 className="mb-2 text-xl font-bold">Prombit handles the context, automatically</h3>
              <p className="mb-6 text-muted-foreground">
                Prombit enriches your rough input with the right context, constraints, and structure — so every prompt you send is optimized before it reaches the model.
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

export default WhatIsContextEngineering;
