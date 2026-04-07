import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";

const PhilosophySection = () => (
  <section className="bg-dark-section py-24 md:py-32">
    <div className="container mx-auto">
      <div className="mx-auto max-w-2xl text-center">

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
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
