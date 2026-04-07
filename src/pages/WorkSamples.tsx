import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";

const artifacts = [
  {
    title: "GTM Systems & Frameworks",
    description: "End-to-end launch and go-to-market systems \u2014 including briefs, workflows, stakeholder alignment models, and execution frameworks that scale across teams.",
  },
  {
    title: "Launch Strategy & Execution",
    description: "Structured launch approaches from narrative through rollout \u2014 aligning product, marketing, and sales across every phase of go-to-market.",
  },
  {
    title: "Messaging & Positioning",
    description: "Narratives built from product truth, competitive pressure, and buyer reality \u2014 designed to hold up in real conversations, not just on slides.",
  },
  {
    title: "Sales Enablement & Outbound",
    description: "Outbound frameworks, discovery guides, objection handling, and enablement assets built from real deal experience \u2014 not theoretical buyer journeys.",
  },
  {
    title: "Technical PMM & AI Content",
    description: "Technical narratives, whitepapers, and security-aligned messaging that translate complex AI and platform systems into enterprise-ready positioning.",
  },
  {
    title: "Campaigns, Web & Conversion",
    description: "Landing pages, campaign strategy, and conversion-focused experiences designed to translate GTM strategy into measurable pipeline impact.",
  },
  {
    title: "Executive & Strategic Narratives",
    description: "Keynotes, executive messaging, and high-level narratives that shape how products, platforms, and AI strategies are presented at the leadership level.",
  },
  {
    title: "Pitch Decks & Storytelling",
    description: "Structured narratives for investors, partners, and internal stakeholders \u2014 built to clearly communicate market opportunity and differentiated value.",
  },
  {
    title: "Sales Assets & One-Pagers",
    description: "Concise, high-impact collateral built for real sales conversations \u2014 grounded in objection handling and buyer language.",
  },
];

const WorkSamples = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28 lg:py-32">
      <div className="container relative mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-16 lg:gap-20">

          {/* Left — text */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Work Samples
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                Available Upon Request
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl space-y-3"
            >
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                My work spans more than individual assets. It spans systems, narratives, and frameworks that drive go-to-market from strategy through execution.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                If you&rsquo;re a hiring manager or recruiter, reach out on LinkedIn &mdash; I&rsquo;ll share examples tailored to your team context, where permissible.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8"
            >
              <MagneticButton href="https://www.linkedin.com/in/michaeljaro/">
                Connect on LinkedIn <ArrowRight size={15} />
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right — placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mt-2 md:mt-0 md:w-[42%] lg:w-[45%] xl:w-[48%] shrink-0 items-start"
          >
            <img
              src="/home-page-images/robot-samples.png"
              alt="Robot with samples"
              className="w-auto max-h-36 sm:max-h-48 md:max-h-[22rem] object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>

    {/* Artifact grid */}
    <section className="border-t border-border/30 py-14 md:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            What I Build
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Types of Work
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {artifacts.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-4px_hsl(221_83%_53%/0.12)] md:p-8"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-primary" />
              <h3 className="mb-3 text-base font-bold text-foreground md:text-lg">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default WorkSamples;
