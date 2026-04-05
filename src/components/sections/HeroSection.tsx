import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RotatingText from "@/components/common/RotatingText";
import MagneticButton from "@/components/common/MagneticButton";

const HeroSection = () => (
  <section className="relative overflow-hidden py-20 md:py-32">
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
          Michael Jaroszynski
        </p>
        <h1 className="font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          Bridging the Gap Between…
        </h1>
        <div className="mt-2 min-h-[2.5rem] md:min-h-[3.5rem] lg:min-h-[4rem]">
          <p className="font-display text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            <RotatingText />
          </p>
        </div>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground md:text-lg lg:mt-6 lg:max-w-3xl lg:text-xl"
      >
        Full-Stack Technical Product Marketing Manager specializing in AI and enterprise GTM
      </motion.p>

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
  </section>
);

export default HeroSection;
