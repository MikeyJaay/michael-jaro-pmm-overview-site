import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RotatingText from "@/components/RotatingText";

const HeroSection = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.05] blur-[100px]" />
    </div>

    <div className="container relative mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Michael Jaroszynski
        </p>
        <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight md:text-5xl lg:text-6xl">
          Bridging the Gap Between…
        </h1>
        <div className="mt-2 min-h-[2.5rem] md:min-h-[3.5rem]">
          <p className="font-display text-2xl font-bold md:text-3xl lg:text-4xl">
            <RotatingText />
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-5 max-w-xl text-base text-muted-foreground md:text-lg"
      >
        Full-Stack Technical Product Marketing Manager specializing in AI and enterprise GTM
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="mt-8"
      >
        <Button asChild size="lg" className="gap-2 rounded-full px-8 py-5 text-sm">
          <a href="https://www.linkedin.com/in/michaeljaro/" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn <ArrowRight size={15} />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
