import { motion } from "framer-motion";
import { MessageSquareText, Rocket, Target, Shield } from "lucide-react";

const cards = [
  {
    icon: MessageSquareText,
    title: "Messaging & Positioning",
    body: "Positioning built from product truth, competitive pressure, and buyer reality — designed to hold up in real conversations, not just on slides.",
  },
  {
    icon: Rocket,
    title: "Launch Strategy",
    body: "End-to-end launch systems that drive alignment across product, marketing, and sales — from narrative through execution.",
  },
  {
    icon: Target,
    title: "Sales Enablement",
    body: "Sales narratives and assets built from real objections and deal dynamics — not theoretical messaging.",
  },
  {
    icon: Shield,
    title: "Technical PMM (AI / Security)",
    body: "Complex AI and platform systems translated into narratives that stand up in enterprise and security-driven evaluations.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const WhatIBuildSection = () => (
  <section className="border-t border-border/50 py-20 md:py-28">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12 text-center font-display text-3xl font-bold tracking-tight md:text-4xl"
      >
        What I Build
      </motion.h2>

      <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-primary/[0.06]"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <card.icon size={20} />
            </div>
            <h3 className="mb-2 font-display text-base font-semibold text-foreground">{card.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIBuildSection;
