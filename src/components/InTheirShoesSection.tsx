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

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

const InTheirShoesSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mb-12 max-w-2xl text-center"
      >
        <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">My Approach</p>
        <h2 className="mb-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
          I've Been in Their Shoes
        </h2>
        <p className="text-base text-muted-foreground md:text-lg">
          My approach comes from hands-on experience living every side of go-to-market, not just observing it.
        </p>
      </motion.div>

      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 md:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group flex flex-col rounded-2xl border border-border/50 bg-card p-6 shadow-sm transition-shadow duration-300 hover:shadow-md hover:shadow-primary/[0.06]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <card.icon size={20} />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold text-foreground">{card.title}</h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
              <p className="border-t border-border/50 pt-3 text-xs font-medium italic text-primary/80">
                {card.tagline}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-12 max-w-2xl text-center font-display text-xl font-bold tracking-tight text-foreground md:text-2xl"
      >
        I know how to turn scattered teams into a{" "}
        <span className="text-gradient">unified GTM engine</span>.
      </motion.p>
    </div>
  </section>
);

export default InTheirShoesSection;
