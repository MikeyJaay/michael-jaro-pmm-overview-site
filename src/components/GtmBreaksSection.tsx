import { motion } from "framer-motion";
import { Box, Megaphone, Handshake } from "lucide-react";

const cards = [
  {
    icon: Box,
    title: "Product",
    body: "Builds what's technically possible",
    sub: "not always what the market needs",
  },
  {
    icon: Megaphone,
    title: "Marketing",
    body: "Creates messaging that sounds right",
    sub: "but doesn't hold up in sales calls",
  },
  {
    icon: Handshake,
    title: "Sales",
    body: "Handles objections and realities",
    sub: "no one else sees upstream",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const GtmBreaksSection = () => (
  <section className="border-t border-border/50 py-20 md:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-4"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-primary">My Approach</p>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.08 }}
        className="mb-12 font-display text-3xl font-bold tracking-tight md:text-4xl"
      >
        Where GTM Breaks
      </motion.h2>

      <div className="grid gap-5 sm:grid-cols-3">
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
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{card.title}</h3>
            <p className="text-sm leading-relaxed text-foreground/80">{card.body}</p>
            <p className="mt-1 text-sm italic text-muted-foreground">({card.sub})</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-10 text-center font-display text-xl font-bold tracking-tight text-foreground md:text-2xl"
      >
        GTM Fails from Misaligned Teams.
      </motion.p>
    </div>
  </section>
);

export default GtmBreaksSection;
