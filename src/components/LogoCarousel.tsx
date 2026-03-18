import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import codilityLogo from "@/assets/logos/codility.svg";
import crowdstrikeLogo from "@/assets/logos/crowdstrike.svg";
import dominosLogo from "@/assets/logos/dominos.svg";
import hackajobLogo from "@/assets/logos/hackajob.svg";
import mitratechLogo from "@/assets/logos/mitratech.svg";

const logos = [
  { name: "Mitratech", src: mitratechLogo, imageClassName: "h-28 md:h-32 max-w-[260px] md:max-w-[320px]" },
  { name: "Codility", src: codilityLogo, imageClassName: "h-28 md:h-32 max-w-[260px] md:max-w-[320px]" },
  { name: "CrowdStrike", src: crowdstrikeLogo, imageClassName: "h-24 md:h-28 max-w-[300px] md:max-w-[360px]" },
  { name: "Hackajob", src: hackajobLogo, imageClassName: "h-24 md:h-28 max-w-[240px] md:max-w-[300px]" },
  { name: "Domino's", src: dominosLogo, imageClassName: "h-24 md:h-28 max-w-[260px] md:max-w-[320px]" },
];

const LogoCarousel = () => {
  return (
    <section className="overflow-hidden border-y border-border bg-secondary/30 py-8 md:py-10">
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground md:mb-5">
        I've Worked at Companies from Bootstrap Startups to Global Enterprises
      </p>

      <div className="relative mb-4 md:mb-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-secondary/30 to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-secondary/30 to-transparent md:w-24" />

        <div className="logo-marquee">
          <div className="logo-marquee-track">
            {[0, 1].map((groupIndex) => (
              <div key={groupIndex} className="logo-marquee-group" aria-hidden={groupIndex === 1}>
                {logos.map((logo) => (
                  <div
                    key={`${groupIndex}-${logo.name}`}
                    className="inline-flex h-32 w-[240px] shrink-0 items-center justify-center md:h-36 md:w-[300px]"
                  >
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className={`${logo.imageClassName} w-auto object-contain opacity-70 transition-opacity duration-300 hover:opacity-100`}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Button asChild variant="outline" size="sm" className="gap-2 font-semibold">
          <Link to="/career">
            See Career Timeline <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LogoCarousel;
