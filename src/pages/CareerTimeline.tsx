import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

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
    period: "NOV. 2019 - MAR. 2022",
    summary:
      "Embedded within the engineering team to lead go-to-market and executive communications for a next-generation point-of-sale system, translating complex technical development into adoption-driving narratives for franchisees and executive leadership.",
  },
  {
    company: "Codility",
    logo: codilityLogo,
    role: "Sales Development Representative",
    period: "2021 – 2022",
    summary:
      "Advanced rapidly from inbound to top-performing outbound SDR by mastering technical buyer conversations and driving pipeline for an enterprise-grade engineering assessment platform.",
  },
  {
    company: "Hackajob",
    logo: hackajobLogo,
    role: "Growth Lead",
    period: "2022 – 2023",
    summary:
      "Brought on as the third U.S employee to drive the 0→1 U.S. go-to-market motion from zero brand awareness, launching and scaling a UK-based technical hiring platform through foundational messaging, positioning, and early customer acquisition.",
  },
  {
    company: "CrowdStrike",
    logo: crowdstrikeLogo,
    role: "Product Marketing Manager",
    period: "2023 – 2024",
    summary:
      "Led the rebrand and go-to-market relaunch of Falcon for IoT to Falcon for XIoT, repositioning the platform for a billion-dollar critical infrastructure security market and contributing to $9M in pipeline generation ahead of full market rollout.",
  },
  {
    company: "Mitratech",
    logo: mitratechLogo,
    role: "Technical Product Marketing Manager, AI Trust & Security",
    period: "2025 – Present",
    summary:
      "Own AI trust and security go-to-market standards across an enterprise portfolio, shaping how LLM-based, solution-specific AI capabilities are responsibly launched, evaluated, and sold in enterprise environments.",
  },
];

const TimelineCard = ({
  item,
  index,
}: {
  item: (typeof timelineData)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Dot */}
      <div
        className={`absolute left-4 top-2 z-10 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1.5 transition-all duration-700 ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />

      {/* Content */}
      <div
        className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}
      >
        <div
          className={`rounded-xl border border-border bg-card p-6 transition-all duration-700 ease-out hover:border-primary/30 hover:shadow-md ${
            isVisible
              ? "opacity-100 translate-y-0 translate-x-0"
              : `opacity-0 translate-y-8 ${isEven ? "md:-translate-x-12" : "md:translate-x-12"}`
          }`}
          style={{ transitionDelay: `${100}ms` }}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-wider text-primary transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            {item.period}
          </p>
          <img
            src={item.logo}
            alt={item.company}
            className={`mt-3 h-[120px] max-w-[300px] w-auto object-contain transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          />
          <p
            className={`text-sm font-medium text-muted-foreground transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {item.role}
          </p>
          <p
            className={`mt-3 text-sm leading-relaxed text-muted-foreground transition-all duration-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {item.summary}
          </p>
        </div>
      </div>
    </div>
  );
};

const TimelineLine = () => {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0,
    rootMargin: "0px 0px 0px 0px",
  });

  return (
    <div
      ref={ref}
      className={`absolute left-4 top-0 w-px bg-border md:left-1/2 md:-translate-x-px transition-all duration-1000 ease-out origin-top ${
        isVisible ? "h-full opacity-100" : "h-0 opacity-0"
      }`}
    />
  );
};

const CareerTimeline = () => {
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("oldest");
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const sortedData =
    sortOrder === "oldest" ? timelineData : [...timelineData].reverse();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto max-w-3xl">
          <div ref={headerRef}>
            <h1
              className={`font-display text-4xl font-bold text-foreground md:text-5xl transition-all duration-700 ${
                headerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              Career Timeline
            </h1>
            <p
              className={`mt-4 text-lg text-muted-foreground transition-all duration-700 ${
                headerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              A track record of building GTM engines and product marketing
              systems from bootstrap startups to global enterprises.
            </p>

            <div
              className={`mt-8 flex items-center gap-2 transition-all duration-700 ${
                headerVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <span className="text-sm text-muted-foreground">Sort:</span>
              <button
                onClick={() => setSortOrder("oldest")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  sortOrder === "oldest"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Oldest First
              </button>
              <button
                onClick={() => setSortOrder("newest")}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  sortOrder === "newest"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                Newest First
              </button>
            </div>
          </div>

          <div className="relative mt-10">
            <TimelineLine />

            <div className="space-y-12">
              {sortedData.map((item, index) => (
                <TimelineCard
                  key={`${sortOrder}-${item.company}`}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerTimeline;