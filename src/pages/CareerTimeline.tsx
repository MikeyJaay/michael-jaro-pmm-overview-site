import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MagneticButton from "@/components/common/MagneticButton";

import codilityLogo from "@/assets/logos/codility.svg";
import crowdstrikeLogo from "@/assets/logos/crowdstrike.svg";
import dominosLogo from "@/assets/logos/dominos.svg";
import hackajobLogo from "@/assets/logos/hackajob.svg";
import mitratechLogo from "@/assets/logos/mitratech.svg";

const timelineData = [
  {
    company: "Domino's",
    logo: dominosLogo,
    role: "Product Marketing Associate",
    period: "NOV. 2019 — MAR. 2022",
    summary:
      "Embedded within the engineering team to support the rollout of a next-generation point-of-sale platform, translating technical development into executive communications, franchise readiness, and adoption across a complex global operator network.",
  },
  {
    company: "Codility",
    logo: codilityLogo,
    role: "Sales Development Representative, Inbound",
    period: "MAR. 2022 — JUN. 2022",
    summary:
      "Pivoted into SaaS sales by running consultative discovery with engineering and talent stakeholders evaluating developer assessment software, building early fluency in technical buyer conversations.",
  },
  {
    company: "Codility",
    logo: codilityLogo,
    role: "Account Development Representative, Outbound",
    period: "JUL. 2022 — FEB. 2023",
    summary:
      "Promoted within one quarter into outbound after becoming a top-performing rep, driving pipeline through technical prospecting and helping onboard new SDR hires navigating complex engineering-led sales conversations.",
  },
  {
    company: "Hackajob",
    logo: hackajobLogo,
    role: "Growth Lead | GTM Founding Team",
    period: "FEB. 2023 — MAY 2024",
    summary:
      "Joined as the third North American hire to help build the company's first U.S. go-to-market motion, taking a UK-based technical hiring platform from zero brand awareness to early customer traction through foundational messaging, positioning, and market development.",
  },
  {
    company: "CrowdStrike",
    logo: crowdstrikeLogo,
    role: "Product Marketing Manager, XIoT (MBA Program)",
    period: "MAY 2024 — AUG. 2024",
    summary:
      "Led the rebrand and GTM relaunch of Falcon for IoT to Falcon for XIoT, repositioning the platform for a $9B critical infrastructure security market and translating complex technical capabilities into differentiated cybersecurity messaging.",
  },
  {
    company: "Mitratech",
    logo: mitratechLogo,
    role: "Product Marketing Manager, Platform",
    period: "FEB. 2025 — DEC. 2025",
    summary:
      "Led go-to-market efforts across multiple solutions, including the launch of Mitratech HQ, while influencing $2.2M+ in pipeline through launches, webinars, and strategic deal support. Also rebuilt the company's competitive intelligence program and helped establish repeatable GTM systems that later supported broader AI enablement efforts.",
  },
  {
    company: "Mitratech",
    logo: mitratechLogo,
    role: "Technical Product Marketing Manager, AI Trust & Security",
    period: "JAN. 2026 — PRESENT",
    summary:
      "Lead AI trust and security product marketing across Mitratech's portfolio, owning the GTM standards for responsibly positioning and launching AI capabilities across 10+ domain-specific solutions. Translate complex AI architecture, security guardrails, and human-in-the-loop design into defensible market narratives that support enterprise adoption and security review.",
  },
];

const TimelineCard = ({
  item,
  index,
  isLast,
}: {
  item: (typeof timelineData)[0];
  index: number;
  isLast: boolean;
}) => {
  const isEven = index % 2 === 0;

  const cardContent = (
    <div className="group rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-[0_8px_30px_-4px_hsl(221_83%_53%/0.10)] md:p-8">
      {/* Header row — blue bar + period + title on left, logo on right */}
      <div className="flex items-start justify-between gap-6">
        <div className="flex-1 min-w-0">
          <div className="mb-3 h-1 w-8 rounded-full bg-primary" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">
            {item.period}
          </p>
          <h3 className="mt-1.5 text-lg font-bold text-foreground md:text-xl">
            {item.role}
          </h3>
        </div>
        <img
          src={item.logo}
          alt={item.company}
          className="h-10 w-auto max-w-[180px] shrink-0 object-contain object-right opacity-70 transition-opacity group-hover:opacity-100 md:h-[4.5rem] md:max-w-[220px]"
          loading="lazy"
        />
      </div>
      {/* Summary — full width below */}
      <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
        {item.summary}
      </p>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Mobile layout — left spine + card (unchanged) */}
      <div className="flex gap-6 md:hidden">
        <div className="flex flex-col items-center">
          <div className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-background ring-4 ring-primary/10" />
          {!isLast && <div className="mt-1 flex-1 w-px bg-border/60" />}
        </div>
        <div className={`w-full ${isLast ? "" : "pb-10"}`}>
          {cardContent}
        </div>
      </div>

      {/* Desktop layout — centered spine, alternating left/right */}
      <div className={`hidden md:grid md:grid-cols-[1fr_2rem_1fr] ${isLast ? "" : "md:pb-10"}`}>
        {/* Left slot */}
        <div className="pr-8">
          {isEven && cardContent}
        </div>
        {/* Center spine — dot only, continuous line is in parent */}
        <div className="flex justify-center">
          <div className="relative z-10 mt-8 h-3 w-3 shrink-0 rounded-full border-2 border-primary bg-background ring-4 ring-primary/10" />
        </div>
        {/* Right slot */}
        <div className="pl-8">
          {!isEven && cardContent}
        </div>
      </div>
    </motion.div>
  );
};

const CareerTimeline = () => {
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("newest");

  const sortedData =
    sortOrder === "oldest" ? timelineData : [...timelineData].reverse();

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-28 lg:py-32">
        <div className="container relative mx-auto">
          <div className="flex flex-col gap-12 md:flex-row md:items-center md:gap-16 lg:gap-20">

            {/* Left — text */}
            <div className="flex-1 min-w-0">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                  Career Timeline
                </p>
                <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
                  GTM From Every Angle
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              >
                A track record of building GTM engines and product marketing systems from bootstrap startups to global enterprises.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8"
              >
                <MagneticButton href="https://www.linkedin.com/in/michaeljaro/">
                  Connect on LinkedIn <ArrowRight size={15} />
                </MagneticButton>
              </motion.div>
            </div>

            {/* Right — career image */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center mt-2 md:mt-0 md:w-[42%] lg:w-[45%] xl:w-[48%] shrink-0 items-start"
            >
              <img
                src="/home-page-images/robot-career.png"
                alt="Robot career timeline"
                className="w-auto max-h-48 md:max-h-[22rem] object-contain"
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border/30 py-14 md:py-20">
        <div className="container mx-auto">

          {/* Sort controls */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between md:mb-14"
          >
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Experience
              </p>
              {/* <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
                Built at the Intersection of Product, Marketing, and Sales 
              </h2> */}
            </div>

            <div className="flex items-center gap-2 border-b border-border/40 pb-1">
              <span className="text-xs font-medium text-muted-foreground">Sort:</span>
              {(["oldest", "newest"] as const).map((order) => (
                <button
                  key={order}
                  onClick={() => setSortOrder(order)}
                  className={[
                    "relative px-4 pb-2.5 pt-0.5 text-sm font-medium transition-colors duration-200 focus:outline-none capitalize",
                    sortOrder === order
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  ].join(" ")}
                >
                  {order === "oldest" ? "Oldest First" : "Newest First"}
                  {sortOrder === order && (
                    <motion.div
                      layoutId="sort-underline"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Entries */}
          <div className="relative max-w-3xl md:max-w-none">
            {/* Desktop-only continuous center spine line */}
            <div className="absolute hidden md:block left-1/2 top-[2.375rem] bottom-[2.375rem] w-px -translate-x-1/2 bg-border/60" />
            {sortedData.map((item, index) => (
              <TimelineCard
                key={`${sortOrder}-${item.role}`}
                item={item}
                index={index}
                isLast={index === sortedData.length - 1}
              />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default CareerTimeline;
