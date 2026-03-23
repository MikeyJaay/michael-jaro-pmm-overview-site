import { useState, useEffect } from "react";
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
    period: "MARCH. 2022 - FEB. 2023",
    summary:
      "Advanced rapidly from inbound to top-performing outbound SDR by mastering technical buyer conversations and driving pipeline for an enterprise-grade engineering assessment platform.",
  },
  {
    company: "Hackajob",
    logo: hackajobLogo,
    role: "Growth Lead",
    period: "FEB. 2023 - MAY 2024",
    summary:
      "Brought on as the third U.S employee to drive the 0→1 U.S. go-to-market motion from zero brand awareness, launching and scaling a UK-based technical hiring platform through foundational messaging, positioning, and early customer acquisition.",
  },
  {
    company: "CrowdStrike",
    logo: crowdstrikeLogo,
    role: "Product Marketing Manager",
    period: "MAY 2024 - AUG. 2024",
    summary:
      "Led the rebrand and go-to-market relaunch of Falcon for IoT to Falcon for XIoT, repositioning the platform for a billion-dollar critical infrastructure security market and contributing to $9M in pipeline generation ahead of full market rollout.",
  },
  {
    company: "Mitratech",
    logo: mitratechLogo,
    role: "Technical Product Marketing Manager, AI Trust & Security",
    period: "FEB. 2025 - PRESENT",
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
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3, rootMargin: "0px 0px -80px 0px" });
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
        className={`absolute left-4 top-2 z-10 h-3 w-3 rounded-full border-2 border-primary bg-background md:left-1/2 md:-translate-x-1.5 transition-all duration-500 ${
          isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      />

      {/* Content */}
      <div
        className={`ml-12 md:ml-0 md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"}`}
      >
        <div
          className={`rounded-xl border border-border bg-card p-6 transition-all duration-[600ms] ease-out hover:border-primary/30 hover:shadow-md ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "0ms" }}
        >
          <p
            className={`text-xs font-semibold uppercase tracking-wider text-primary transition-all duration-[400ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "250ms" }}
          >
            {item.period}
          </p>
          <img
            src={item.logo}
            alt={item.company}
            className={`mt-3 h-[120px] max-w-[300px] w-auto object-contain transition-all duration-500 ${
              isVisible
                ? "opacity-100 translate-y-0 scale-100 blur-none"
                : "opacity-0 translate-y-3 scale-95 blur-sm"
            }`}
            style={{ transitionDelay: "400ms" }}
          />
          <p
            className={`text-sm font-medium text-muted-foreground transition-all duration-[450ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "650ms" }}
          >
            {item.role}
          </p>
          <p
            className={`mt-3 text-sm leading-relaxed text-muted-foreground transition-all duration-[600ms] ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
            style={{ transitionDelay: "900ms" }}
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

const ScrollIndicator = () => {
  const [atBottom, setAtBottom] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const nearBottom = scrollTop + windowHeight >= docHeight - 100;
      const nearTop = scrollTop < 40;
      setAtBottom(nearBottom);
      setVisible(!nearTop || docHeight > windowHeight + 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-28 left-1/2 -translate-x-1/2 z-50"
      aria-hidden="true"
    >
      {/* Bob animation wrapper — keeps translateY separate from rotation */}
      <div style={{ animation: "scrollBob 2s ease-in-out infinite" }}>
        {/* Rotation wrapper */}
        <div
          className={`flex flex-col items-center gap-0.5 text-primary/50 transition-transform duration-500 ${
            atBottom ? "rotate-180" : ""
          }`}
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L9 9L17 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>

      <style>{`
        @keyframes scrollBob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(6px); }
        }
      `}</style>
    </div>
  );
};

const CareerTimeline = () => {
  const [sortOrder, setSortOrder] = useState<"oldest" | "newest">("oldest");
  const { ref: headerRef, isVisible: headerVisible } = useScrollReveal();

  const sortedData =
    sortOrder === "oldest" ? timelineData : [...timelineData].reverse();

  return (
    <div className="min-h-screen py-20">
      <ScrollIndicator />
      <div className="container mx-auto">
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