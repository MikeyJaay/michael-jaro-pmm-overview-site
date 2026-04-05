import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";

const bodyParagraphs = [
  "I've never believed the best operators are the ones who started with all the answers.",
  "They're usually the ones willing to stay curious longer, learn faster, and keep moving when the work gets messy.",
  "That's how I've approached every chapter of my career — from sales, to product marketing, to technical PMM work in AI and enterprise software.",
];

const PhilosophySection = () => (
  <section className="bg-dark-section py-24 md:py-32">
    <div className="container mx-auto">
      <div className="mx-auto max-w-2xl text-center">

        <div className="space-y-5">
          {bodyParagraphs.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.09 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className={
                i === 0
                  ? "text-base font-medium leading-relaxed text-white md:text-lg"
                  : "text-base leading-relaxed text-white/50 md:text-lg"
              }
            >
              {p}
            </motion.p>
          ))}
        </div>

        {/* Visual separator */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-12 h-px w-16 origin-center bg-white/20"
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-2xl font-extrabold tracking-tight text-white md:text-3xl lg:text-4xl"
        >
          You don't have to know everything.
          <br />
          <span className="text-primary/90">You have to be willing to learn anything.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10"
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
