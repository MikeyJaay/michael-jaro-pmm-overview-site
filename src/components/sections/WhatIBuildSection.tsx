import { motion } from "framer-motion";

const cards = [
  {
    title: "Messaging & Positioning",
    body: "Positioning rooted in product truth, competitive pressure, and buyer reality — built to hold up beyond the launch deck and into real conversations.",
  },
  {
    title: "Launch Strategy",
    body: "Go-to-market systems that align product, marketing, and sales from narrative through execution — so launches don't break at handoff.",
  },
  {
    title: "Sales Enablement",
    body: "Enablement built from actual objections, deal friction, and buyer hesitation — not generic collateral no one uses.",
  },
  {
    title: "Technical Product Marketing (AI / Security)",
    body: "Complex AI, platform, and trust-driven products translated into narratives that can stand up in enterprise evaluation, technical scrutiny, and security review.",
  },
];

const WhatIBuildSection = () => (
  <section className="border-t border-border/30 py-14 md:py-20">
    <div className="container mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-10 md:mb-14"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
          Capabilities
        </p>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
          Where I Create Leverage
        </h2>
      </motion.div>

      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="group rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-4px_hsl(221_83%_53%/0.12)] md:p-8"
          >
            <div className="mb-4 h-1 w-8 rounded-full bg-primary" />
            <h3 className="mb-3 text-base font-bold text-foreground md:text-lg">
              {card.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default WhatIBuildSection;
