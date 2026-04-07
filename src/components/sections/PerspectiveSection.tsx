import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "sales",
    label: "Sales",
    subLabel: "Sales",
    title: "The Weight of a Quota",
    body: [
      "Sales was my first real exposure to how fast the market tests your assumptions.",
      "At Codility, I led the outbound engine as a top SDR \u2014 cold-breaking into accounts ranging from 10-person SMBs to global enterprises, selling directly to software engineering leaders. I learned quickly that punchy messaging means nothing if it falls apart the second a buyer pushes back \u2014 or if it doesn\u2019t evolve as fast as the market does.",
      "Sales taught me how buyers actually talk, where deals really stall, and how much gets lost when strategy is built too far away from the trenches.",
    ],
    image: "/home-page-images/robot-sales.png",
    imageAlt: "Robot in sales mode",
  },
  {
    id: "technical",
    label: "Product",
    subLabel: "Product",
    title: "Where Technical meets Narrative",
    body: [
      "I\u2019ve spent enough time close to product and engineering to know that what looks simple from the outside is usually anything but.",
      "I\u2019ve hard-coded software myself, worked through technical reviews firsthand, partnered with world-class product leaders at CrowdStrike, and spent hours navigating deals at Codility and hackajob with engineering leaders breaking down how their systems are actually built\u2014and what it really takes to support them.",
      
      "Once you understand the architecture, constraints, and tradeoffs behind the work, product decisions stop looking simple and start telling a story.",
    ],
    image: "/home-page-images/robot-product.png",
    imageAlt: "Robot building product",
  },
  {
    id: "pmm",
    label: "Marketing",
    subLabel: "Marketing",
    title: "Make the Market Feel Something",
    body: [
      "Great marketing ideas mean very little if the music they make can\u2019t connect to the greater orchestra.",
      "Field, customer, demand gen, ops, design, web, and more are all playing different instruments\u2014each carrying their own deadlines, goals, and pressures at the same time.",
      "It\u2019s taught me that marketing isn\u2019t just about creativity. It\u2019s about orchestration, timing, trade-offs, and creating music that makes people feel something in markets saturated with noise.",
      "The best marketing doesn\u2019t happen when every first chair is playing a different piece.",
      "It happens when the entire orchestra works from the same score\u2014giving each instrument space to shine while still advancing the same story.",
    ],
    image: "/home-page-images/robot-marketing.png",
    imageAlt: "Robot doing marketing",
  },
  {
    id: "pmm",
    label: "PMM",
    subLabel: "PMM",
    title: "Where It All Comes Together",
    body: [
      "Product marketing is where everything started to click.",
      "It\u2019s where the separate instruments finally became an orchestra \u2014 where buyer reality, technical depth, and market narrative stopped competing for attention and started moving in the same direction.",
      
      "The best PMMs are conductors. They don\u2019t need to be the most skilled at every instrument \u2014 but they do need to understand each one well enough to bring the full performance to life.",
    ],
    image: "/home-page-images/robot-ven-2.png",
    imageAlt: "Robot PMM",
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
            Four Perspectives, One Lens
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
                "relative px-3 sm:px-5 pb-2.5 sm:pb-3 pt-0.5 text-sm font-medium transition-colors duration-200 focus:outline-none",
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

              {/* Mobile only — image between title and body */}
              <div className="md:hidden flex justify-center my-6">
                <img
                  src={active.image}
                  alt={active.imageAlt}
                  className="w-auto max-h-52 sm:max-h-64 object-contain"
                />
              </div>

              <div className="space-y-4">
                {active.body.map((para, i) => (
                  <p key={i} className="text-base leading-relaxed text-muted-foreground md:text-[1.0625rem]">
                    {para}
                  </p>
                ))}
              </div>
            </div>

            {/* Right — robot graphic (desktop only) */}
            <div className="hidden md:flex justify-center items-start pt-28">
              <img
                src={active.image}
                alt={active.imageAlt}
                className="w-auto md:max-h-[22rem] object-contain"
              />
            </div>
          </motion.div>
        </AnimatePresence>


      </div>
    </section>
  );
};

export default PerspectiveSection;
