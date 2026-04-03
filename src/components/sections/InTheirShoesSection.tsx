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
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mb-10 max-w-3xl text-center md:mb-12 lg:max-w-4xl"
      >
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">My Approach</p>
        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem]">
          Strategic Empathy
        </h2>
        <p className="text-base text-muted-foreground md:text-lg lg:text-xl">
          I've been in their shoes. My approach comes from hands-on experience living every side of go-to-market.
        </p>
      </motion.div>

      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3 lg:max-w-none lg:gap-6">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex flex-col rounded-xl border border-border/40 bg-card/80 p-6 transition-all duration-200 hover:border-primary/20 hover:shadow-sm md:p-7"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary md:h-11 md:w-11">
              <card.icon size={20} />
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold text-foreground md:text-xl">{card.title}</h3>
            <p className="mb-4 flex-1 text-base leading-relaxed text-muted-foreground">{card.body}</p>
            <p className="border-t border-border/30 pt-3 text-sm font-medium text-primary/80">
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
        className="mx-auto mt-10 max-w-3xl text-center font-display text-xl font-bold tracking-tight text-foreground md:mt-12 md:max-w-4xl md:text-2xl"
      >
        My passion is briding cross-deparment teams to create a{" "}
        <span className="text-gradient">unified GTM engine</span>.
      </motion.p>
    </div>
  </section>
);

export default InTheirShoesSection;
