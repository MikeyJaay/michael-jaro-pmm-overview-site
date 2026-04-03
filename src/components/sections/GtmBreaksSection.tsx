import { motion } from "framer-motion";
import { Box, Megaphone, Handshake } from "lucide-react";

const cards = [
  { icon: Box, title: "Product", body: "Builds what's technically possible", sub: "but not always what the market needs" },
  { icon: Megaphone, title: "Marketing", body: "Creates messaging that sounds punchy", sub: "but doesn't hold up in sales calls" },
  { icon: Handshake, title: "Sales", body: "Handles objections and realities", sub: "that no one else sees upstream" },
];

const GtmBreaksSection = () => (
  <section className="py-14 md:py-20">
    <div className="container mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 font-display text-3xl font-bold tracking-tight md:mb-10 md:text-4xl lg:text-[2.5rem]"
      >
        Where GTM Breaks
      </motion.h2>

      <div className="grid gap-5 sm:grid-cols-3 lg:gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-xl border border-border/40 bg-card/80 p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-sm md:p-7"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary md:h-11 md:w-11">
              <card.icon size={20} />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground md:text-xl">{card.title}</h3>
            <p className="text-base leading-relaxed text-foreground/80">{card.body}</p>
            <p className="mt-1.5 text-sm italic text-muted-foreground">({card.sub})</p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10 text-center font-display text-xl font-bold tracking-tight text-foreground md:mt-12 md:text-2xl"
      >
        GTM Doesn't Fail from Lack of Talent. It Fails from Misaligned Teams.
      </motion.p>
    </div>
  </section>
);

export default GtmBreaksSection;
