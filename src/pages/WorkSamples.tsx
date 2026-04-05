import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";

const artifacts = [
  {
    title: "Messaging & Positioning",
    description: "Frameworks and narratives that align product truth with buyer reality — built to survive sales conversations.",
  },
  {
    title: "Pitch Decks",
    description: "Investor and partner decks that tell a coherent story from market problem through differentiated solution.",
  },
  {
    title: "Landing Pages",
    description: "Conversion-focused pages that translate complex products into clear, compelling value propositions.",
  },
  {
    title: "One-Pagers",
    description: "Tight, scannable assets built for sales teams — objection-aware and grounded in real buyer language.",
  },
  {
    title: "Technical Whitepapers",
    description: "Deep-dive content for technical buyers and enterprise evaluation — credibility at the security and architecture layer.",
  },
];

const WorkSamples = () => (
  <div>
    {/* Hero */}
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28 lg:py-32">
      <div className="container relative mx-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16 lg:gap-20">

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
                Samples span messaging frameworks, launch strategy, sales enablement, and technical content across AI and enterprise software.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Hiring managers and recruiters — reach out on LinkedIn and I'll share what's most relevant to your context.
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
              src="/home-page-images/robot-pen.png"
              alt="Robot with pen"
              className="w-auto max-h-48 md:max-h-[22rem] object-contain"
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
            What's Available
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
