import { motion } from "framer-motion";
import { TrendingUp, Code2, Rocket } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    title: "Sales",
    body: "As a top-performing sales rep, I've run discovery, handled objections, generated pipeline, and built outbound motions from the ground up.",
    tagline: "I know what moves deals forward — and how the weight of a quota feels.",
  },
  {
    icon: Code2,
    title: "Product Management",
    body: "I've worked side-by-side with engineering and hard coded fullstack applications myself.",
    tagline: "I understand what it takes to build a product 0 → 1.",
  },
  {
    icon: Rocket,
    title: "Product Marketing",
    body: "I've aligned product, marketing, and sales into one GTM system — turning positioning, launches, and enablement into coordinated motions that shift markets.",
    tagline: "I know how to turn strategy into market traction.",
  },
];

const InTheirShoesSection = () => (
  <section className="border-t border-border/30 py-14 md:py-20">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-8 max-w-xl text-center"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">My Approach</p>
        <h2 className="mb-3 font-display text-2xl font-bold tracking-tight md:text-3xl">
          I've Been in Their Shoes
        </h2>
        <p className="text-sm text-muted-foreground md:text-base">
          My approach comes from hands-on experience living every side of go-to-market.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex flex-col rounded-xl border border-border/40 bg-card/80 p-5 transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
          >
            <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <card.icon size={18} />
            </div>
            <h3 className="mb-1 font-display text-base font-semibold text-foreground">{card.title}</h3>
            <p className="mb-3 flex-1 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            <p className="border-t border-border/30 pt-2.5 text-[11px] font-medium italic text-primary/70">
              {card.tagline}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto mt-8 max-w-lg text-center font-display text-lg font-bold tracking-tight text-foreground md:text-xl"
      >
        I know how to turn scattered teams into a{" "}
        <span className="text-gradient">unified GTM engine</span>.
      </motion.p>
    </div>
  </section>
);

export default InTheirShoesSection;
