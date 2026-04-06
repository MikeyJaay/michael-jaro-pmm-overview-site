import { motion } from "framer-motion";

const columns = [
  {
    label: "Product",
    body: "Builds what's possible.",
    detail: "Holding together sprint cycles, tradeoffs, technical debt, stakeholder pressure, and invisible fires no one else feels unless something breaks.",
    sub: "But not always with enough distance from the roadmap to see what the market is actually ready to buy.",
  },
  {
    label: "Marketing",
    body: "Crafts what the market should feel.",
    detail: "Building campaigns, messaging, launches, and demand motions — usually with less time, less context, and fewer resources than people realize.",
    sub: "But they're not always close enough to the buyer conversation to see the market conversation shift in real time.",
  },
  {
    label: "Sales",
    body: "Carries the pressure of market reality.",
    detail: "The dial tone. The quota. The waiting. The pressure of trying to turn interest into revenue while brushing off every objection.",
    sub: "But they're lessons from the trenches never make it upstream to the rest of the org.",
  },
];

const GtmBreaksSection = () => (
  <section className="bg-dark-section py-14 md:py-20">
    <div className="container mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-14"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
          The Real Problem
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.5rem]">
          Where GTM Actually Breaks
        </h2>
      </motion.div>

      {/* Three cards */}
      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {columns.map((col, i) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-200 hover:border-primary/30 hover:bg-white/[0.07]"
          >
            {/* Top accent + label */}
            <div className="mb-5 h-[3px] w-10 rounded-full bg-primary" />
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {col.label}
            </p>

            {/* Main statement */}
            <p className="text-xl font-bold leading-snug text-white md:text-2xl">
              {col.body}
            </p>

            {/* Detail */}
            <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
              {col.detail}
            </p>

            {/* But... callout */}
            <div className="mt-6 rounded-lg border border-white/8 bg-white/[0.04] px-4 py-3">
              <p className="text-[13px] leading-relaxed text-white/40 italic">
                {col.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 md:mt-14"
      >
        <div className="w-full border-t border-white/10" />
        <p className="py-10 text-center text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl lg:text-[2rem]">
          GTM doesn't fail from lack of talent.{" "}
          <span className="text-primary/90">It fails when strong talent operates out of sync.</span>
        </p>
        <div className="w-full border-b border-white/10" />
      </motion.div>

    </div>
  </section>
);

export default GtmBreaksSection;
