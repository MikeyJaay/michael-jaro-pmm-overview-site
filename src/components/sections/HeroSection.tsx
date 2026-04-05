import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import RotatingText from "@/components/common/RotatingText";
import MagneticButton from "@/components/common/MagneticButton";

const HeroSection = () => {

  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28 lg:py-32">
      <div className="container relative mx-auto">
        <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16 lg:gap-20">

          {/* Left — text content */}
          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Michael Jaroszynski
              </p>
              <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl">
                Bridging the Gap Between…
              </h1>
              <div className="mt-2 min-h-[2.75rem] md:min-h-[3.5rem] lg:min-h-[4.25rem]">
                <p className="text-3xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl">
                  <RotatingText />
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
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

          {/* Right — Lottie animation */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center mt-2 md:mt-0 md:w-[42%] lg:w-[45%] xl:w-[48%] shrink-0 items-start"
          >
            <img
              src="/home-page-images/robot-bridge.png"
              alt="Robot on a bridge"
              className="w-auto max-h-48 md:max-h-[22rem] object-contain"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
