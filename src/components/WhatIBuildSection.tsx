import { motion } from "framer-motion";
import { MessageSquareText, Rocket, Target, Shield } from "lucide-react";

const cards = [
  { icon: MessageSquareText, title: "Messaging & Positioning", body: "Positioning built from product truth, competitive pressure, and buyer reality — designed to hold up in real conversations." },
  { icon: Rocket, title: "Launch Strategy", body: "End-to-end launch systems that drive alignment across product, marketing, and sales — from narrative through execution." },
  { icon: Target, title: "Sales Enablement", body: "Sales narratives and assets built from real objections and deal dynamics — not theoretical messaging." },
  { icon: Shield, title: "Technical PMM (AI / Security)", body: "Complex AI and platform systems translated into narratives that stand up in enterprise and security-driven evaluations." },
];

const WhatIBuildSection = () => (
  <section className="border-t border-border/30 py-14 md:py-20">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center font-display text-2xl font-bold tracking-tight md:text-3xl"
      >
        What I Build
      </motion.h2>

      <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="rounded-xl border border-border/40 bg-card/80 p-5 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <card.icon size={18} />
            </div>
            <h3 className="mb-1 font-display text-sm font-semibold text-foreground">{card.title}</h3>
            <p className="text-xs leading-relaxed text-muted-foreground">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIBuildSection;
