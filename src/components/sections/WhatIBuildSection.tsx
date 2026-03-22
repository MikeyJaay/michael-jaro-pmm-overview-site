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
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-center font-display text-3xl font-bold tracking-tight md:mb-10 md:text-4xl lg:text-[2.5rem]"
      >
        What I Build
      </motion.h2>

      <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:max-w-none lg:gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.5 }}
            className="rounded-xl border border-border/40 bg-card/80 p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-sm md:p-7"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary md:h-11 md:w-11">
              <card.icon size={20} />
            </div>
            <h3 className="mb-2 font-display text-base font-semibold text-foreground md:text-lg">{card.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">{card.body}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIBuildSection;
