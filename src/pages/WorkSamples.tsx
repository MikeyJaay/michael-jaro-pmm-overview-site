import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const artifacts = [
  "Messaging & Positioning",
  "Pitch Decks",
  "Landing Pages",
  "One-Pagers",
  "Technical Whitepapers",
];

const WorkSamples = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
    {/* Background glow — matches HeroSection */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[100px]" />
    </div>

    <div className="container relative mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
          Work Samples
        </p>
        <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Available Upon Request
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-6 max-w-2xl"
      >
        <p className="text-base text-muted-foreground md:text-lg">
          Work samples including
        </p>
        <div className="mt-3 flex flex-wrap justify-center gap-2">
          {artifacts.map((item) => (
            <span
              key={item}
              className="rounded-full border border-border/50 bg-card/80 px-3 py-1 text-sm text-muted-foreground"
            >
              {item}
            </span>
          ))}
          <span className="rounded-full border border-border/50 bg-card/80 px-3 py-1 text-sm text-muted-foreground">
            and more
          </span>
        </div>
        <p className="mt-6 text-base text-muted-foreground md:text-lg">
          Hiring managers and recruiters — feel free to reach out on LinkedIn.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8"
      >
        <Button asChild size="lg" className="gap-2 rounded-full px-8 py-5 text-sm md:text-base">
          <a href="https://www.linkedin.com/in/michaeljaro/" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn <ArrowRight size={15} />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default WorkSamples;
