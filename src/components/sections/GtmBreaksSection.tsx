import { motion } from "framer-motion";

const columns = [
  {
    label: "Product",
    body: "Builds what's possible.",
    sub: "But not always what the market is ready to buy.",
  },
  {
    label: "Marketing",
    body: "Creates messaging that sounds good.",
    sub: "But doesn't always survive a real sales conversation.",
  },
  {
    label: "Sales",
    body: "Lives closest to buyer friction.",
    sub: "But usually gets looped in too late to shape the story upstream.",
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

      {/* Three-column system map with connector chevrons */}
      <div className="relative grid md:grid-cols-3">
        {columns.map((col, i) => (
          <motion.div
            key={col.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className={[
              "relative rounded-xl border border-white/10 bg-white/5 p-6 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:py-8",
              i < columns.length - 1
                ? "mb-4 md:mb-0 md:border-r md:border-white/10 md:pr-10"
                : "",
              i > 0 ? "md:pl-10" : "",
            ].join(" ")}
          >
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
              {col.label}
            </p>
            <p className="text-xl font-semibold leading-snug text-white md:text-2xl">
              {col.body}
            </p>
            <p className="mt-3 text-base text-white/50">
              <span className="mr-1.5 text-white/20">—</span>
              <span className="italic">{col.sub}</span>
            </p>

            {/* Connector chevron — desktop only */}
            {i < columns.length - 1 && (
              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 md:flex">
                <div className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <span className="text-[9px] leading-none text-white/40">›</span>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Closing statement */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 rounded-xl border-l-4 border-primary bg-white/5 px-8 py-8 md:mt-14 md:px-10 md:py-10"
      >
        <p className="text-2xl font-bold leading-snug tracking-tight text-white md:text-3xl lg:text-[2rem]">
          Go-to-market rarely fails because teams are weak.{" "}
          <span className="text-primary/90">It fails because they're misaligned.</span>
        </p>
      </motion.div>

    </div>
  </section>
);

export default GtmBreaksSection;
