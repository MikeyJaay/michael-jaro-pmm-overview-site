import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import RotatingText from "@/components/RotatingText";

const HeroSection = () => (
  <section className="relative overflow-hidden py-28 md:py-44">
    {/* Background glow */}
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/[0.06] blur-[120px]" />
      <div className="absolute right-1/4 top-2/3 h-[300px] w-[300px] rounded-full bg-accent/[0.06] blur-[100px]" />
    </div>

    <div className="container relative mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
          Michael Jaroszynski
        </p>
        <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          Bridging the Gap Between…
        </h1>
        <div className="mt-4 min-h-[3rem] md:min-h-[4rem]">
          <p className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
            <RotatingText />
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
      >
        Full-Stack Technical Product Marketing Manager specializing in AI and enterprise GTM
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 md:mt-12"
      >
        <Button asChild size="lg" className="gap-2 rounded-full px-10 py-6 text-base">
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            Connect on LinkedIn <ArrowRight size={16} />
          </a>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
