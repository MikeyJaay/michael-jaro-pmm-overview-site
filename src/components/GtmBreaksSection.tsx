import { motion } from "framer-motion";
import { Box, Megaphone, Handshake } from "lucide-react";

const cards = [
  { icon: Box, title: "Product", body: "Builds what's technically possible", sub: "not always what the market needs" },
  { icon: Megaphone, title: "Marketing", body: "Creates messaging that sounds right", sub: "but doesn't hold up in sales calls" },
  { icon: Handshake, title: "Sales", body: "Handles objections and realities", sub: "no one else sees upstream" },
];

const GtmBreaksSection = () => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 font-display text-2xl font-bold tracking-tight md:text-3xl"
      >
        Where GTM Breaks
      </motion.h2>

      <div className="grid gap-4 sm:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-xl border border-border/40 bg-card/80 p-5 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <card.icon size={18} />
            </div>
            <h3 className="mb-1 font-display text-base font-semibold text-foreground">{card.title}</h3>
            <p className="text-sm leading-relaxed text-foreground/80">{card.body}</p>
            <p className="mt-0.5 text-xs italic text-muted-foreground">({card.sub})</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-8 text-center font-display text-lg font-bold tracking-tight text-foreground md:text-xl"
      >
        GTM Fails from Misaligned Teams.
      </motion.p>
    </div>
  </section>
);

export default GtmBreaksSection;
