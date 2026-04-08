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
    detail: "Building campaigns, messaging, launches, and demand motions—usually with less time, less context, and fewer resources than people realize.",
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
  <>
    {/* Dark section — heading + three cards */}
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
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white md:text-4xl lg:text-[2.5rem]">
            Where GTM Actually Breaks
          </h2>
        </motion.div>

        {/* Three cards */}
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {columns.map((col, i) => (
            <motion.div
              key={col.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-colors duration-200 hover:border-primary/30 hover:bg-white/[0.07]"
            >
              <div className="mb-5 h-[3px] w-10 rounded-full bg-primary" />
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {col.label}
              </p>
              <p className="text-lg sm:text-xl font-bold leading-snug text-white md:text-2xl">
                {col.body}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-white/55">
                {col.detail}
              </p>
              <div className="mt-6 rounded-lg border border-white/8 bg-white/[0.04] px-3 py-2 sm:px-4 sm:py-3">
                <p className="text-[13px] leading-relaxed text-white/80 italic">
                  {col.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>

    {/* Light section — closing card, matches "The Goal" format */}
    <section className="bg-background py-14 md:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="relative overflow-hidden rounded-2xl bg-dark-section px-5 py-10 text-center sm:px-8 sm:py-14 md:px-10 md:py-14 lg:px-16 lg:py-16"
        >
          {/* Opening quote watermark */}
          <span className="pointer-events-none absolute left-6 top-0 select-none hidden sm:block text-[9rem] font-extrabold leading-none text-white/[0.12] md:text-[10rem] lg:text-[12rem]">
            &ldquo;
          </span>

          {/* Closing quote watermark */}
          <span className="pointer-events-none absolute -bottom-20 right-6 select-none hidden sm:block text-[9rem] font-extrabold leading-none text-white/[0.12] md:text-[10rem] lg:text-[12rem]">
            &rdquo;
          </span>

          <p className="relative mb-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            The Takeaway
          </p>

          <p className="relative mx-auto max-w-5xl text-lg sm:text-xl font-bold leading-snug tracking-tight text-white md:text-2xl lg:text-[1.75rem]">
            GTM doesn&rsquo;t fail from lack of talent.
          </p>
          <p className="relative mx-auto mt-4 max-w-5xl text-lg sm:text-xl font-bold leading-snug tracking-tight text-primary/90 md:text-2xl lg:text-[1.75rem]">
            It fails when strong talent<br className="sm:hidden" /> operates out of sync.
          </p>
        </motion.div>
      </div>
    </section>
  </>
);

export default GtmBreaksSection;
