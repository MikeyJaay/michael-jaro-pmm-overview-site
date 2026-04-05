import { motion } from "framer-motion";

const paragraphs = [
  "I've seen go-to-market from the inside.",
  "Not just from a messaging doc — but from discovery calls, launch pressure, technical build conversations, and the realities that show up when strategy meets the market.",
  "That's what shaped how I work.",
  "I don't think strong GTM comes from louder messaging or more deliverables.",
  "I think it comes from understanding how each team sees the problem — and building a system they can actually move through together.",
];

const InTheirShoesSection = () => (
  <section className="border-t border-border/30 py-14 md:py-24">
    <div className="container mx-auto">
      <div className="md:grid md:grid-cols-[2fr_3fr] md:items-start md:gap-16 lg:gap-20">

        {/* Left — heading */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-0 md:sticky md:top-28"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            My Approach
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            Strategic Empathy
          </h2>
        </motion.div>

        {/* Right — content */}
        <div>
          {/* Staggered paragraphs */}
          <div className="space-y-5 border-l-2 border-primary/20 pl-8 md:pl-10">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className={
                  i === 0
                    ? "text-base font-semibold leading-relaxed text-foreground md:text-lg"
                    : "text-base leading-relaxed text-muted-foreground md:text-lg"
                }
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* Pull quote */}
          <motion.blockquote
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-10 rounded-xl border-l-4 border-primary bg-secondary/60 px-6 py-5 md:px-8 md:py-6"
          >
            <p className="text-lg font-semibold italic leading-snug text-foreground md:text-xl lg:text-[1.35rem]">
              "The best product marketing doesn't just tell a story.
              <br />
              It creates alignment around one."
            </p>
          </motion.blockquote>
        </div>

      </div>
    </div>
  </section>
);

export default InTheirShoesSection;
