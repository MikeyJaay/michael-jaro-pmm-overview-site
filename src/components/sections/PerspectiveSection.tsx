import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "sales",
    label: "Sales",
    subLabel: "Buyer Reality",
    title: "The Weight of a Quta",
    body: "I started in the part of GTM where reality shows up first. I've run discovery, handled objections, generated pipeline, and built outbound motions from the ground up. That taught me how buyers actually talk, where deals really stall, and what messaging sounds good on paper — but falls apart in a live conversation.",
    image: "/home-page-images/robot-sales.png",
    imageAlt: "Robot in sales mode",
  },
  {
    id: "technical",
    label: "Product",
    subLabel: "Technical Truth",
    title: "Building Something from Nothing",
    body: "I've worked closely with engineering and spent time building software myself. That gave me a deep respect for the complexity behind product decisions — and a much better instinct for translating technical systems into language the market can understand.",
    image: "/home-page-images/robot-product.png",
    imageAlt: "Robot building product",
  },
  {
    id: "pmm",
    label: "Marketing",
    subLabel: "Market Narrative",
    title: "Make the Market Feel Something",
    body: "Product marketing became the place where all of that clicked. It's where product truth, buyer reality, and market narrative are supposed to come together. That's the work I'm most drawn to: building the connective tissue between teams so GTM feels less fragmented — and far more effective.",
    image: "/home-page-images/robot-marketing.png",
    imageAlt: "Robot doing marketing",
  },
];

const PerspectiveSection = () => {
  const [activeTab, setActiveTab] = useState(0);
  const active = tabs[activeTab];

  return (
    <section className="border-t border-border/30 py-14 md:py-20">
      <div className="container mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-12"
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
            My Background
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl lg:text-[2.5rem]">
            Three Perspectives, One Lens
          </h2>
        </motion.div>

        {/* Intro copy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mb-10 md:mb-12 max-w-2xl space-y-4"
        >
          <p className="text-lg font-semibold leading-snug text-foreground md:text-xl">
            I didn&rsquo;t learn strategic empathy in theory.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            I learned it by working inside every part of go-to-market that are usually too far apart to fully understand each other.
          </p>
        </motion.div>

        {/* Tab bar */}
        <div className="mb-8 flex gap-0 border-b border-border/40">
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(i)}
              className={[
                "relative px-5 pb-3 pt-1 text-sm font-medium transition-colors duration-200 focus:outline-none",
                activeTab === i
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground",
              ].join(" ")}
            >
              {tab.label}
              {activeTab === i && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="grid gap-10 md:grid-cols-[55%_1fr] md:gap-12 lg:gap-16"
          >
            {/* Left — text */}
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
                {active.subLabel}
              </p>
              <h3 className="mb-5 text-2xl font-bold text-foreground md:text-3xl">
                {active.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
                {active.body}
              </p>
            </div>

            {/* Right — robot graphic */}
            <div className="flex justify-center items-start">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="w-auto max-h-48 md:max-h-[22rem] object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Closing statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-xl font-bold tracking-tight text-foreground md:mt-14 md:text-2xl"
        >
          My work sits in the middle of{" "}
          <span className="text-gradient">strategy, systems, and translation.</span>
        </motion.p>

      </div>
    </section>
  );
};

export default PerspectiveSection;
