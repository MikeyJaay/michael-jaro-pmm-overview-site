import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => (
  <section className="relative overflow-hidden py-28 md:py-40">
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
          Product Marketing Portfolio
        </p>
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Strategy. Storytelling.
          <br />
          <span className="text-gradient">GTM Execution.</span>
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
      >
        A curated showcase of product marketing artifacts — landing pages, messaging
        frameworks, technical content, and go-to-market strategy.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10"
      >
        <Button asChild size="lg" className="gap-2 rounded-full px-8">
          <Link to="/landing-pages">
            View Landing Pages <ArrowRight size={16} />
          </Link>
        </Button>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
