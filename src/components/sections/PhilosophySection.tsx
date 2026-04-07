import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";

const PhilosophySection = () => (
  <section className="bg-dark-section py-16 md:py-20">
    <div className="container mx-auto">
      <div className="mx-auto max-w-3xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="mb-10"
        >
          <p className="text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl lg:text-[2rem]">
            The best go-to-market doesn&rsquo;t come from louder teams or better plans.
          </p>
          <p className="mt-4 text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl lg:text-[2rem]">
            It comes from people{" "}
            <span className="text-gradient">finally understanding each other</span>
            {" "}&mdash; and moving together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          <MagneticButton href="https://www.linkedin.com/in/michaeljaro/">
            Connect on LinkedIn <ArrowRight size={15} />
          </MagneticButton>
        </motion.div>

      </div>
    </div>
  </section>
);

export default PhilosophySection;
