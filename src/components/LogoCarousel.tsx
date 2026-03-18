import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import codilityLogo from "@/assets/logos/codility.svg";
import crowdstrikeLogo from "@/assets/logos/crowdstrike.svg";
import dominosLogo from "@/assets/logos/dominos.svg";
import hackajobLogo from "@/assets/logos/hackajob.svg";
import mitratechLogo from "@/assets/logos/mitratech.svg";
import veryableLogo from "@/assets/logos/veryable.svg";

const logos = [
  { name: "Mitratech", src: mitratechLogo },
  { name: "Codility", src: codilityLogo },
  { name: "CrowdStrike", src: crowdstrikeLogo },
  { name: "Hackajob", src: hackajobLogo },
  { name: "Domino's", src: dominosLogo },
  { name: "Veryable", src: veryableLogo },
];

const LogoCarousel = () => {
  return (
    <section className="border-y border-border bg-secondary/30 py-8 md:py-10 overflow-hidden">
      <p className="mb-5 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        I've Worked at Companies from Bootstrap Startups to Global Enterprises
      </p>
      <div className="relative mb-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary/30 to-transparent" />
        <div className="flex animate-scroll">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-8 inline-flex h-16 items-center justify-center shrink-0 w-[180px] md:w-[220px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-14 md:h-16 w-auto max-w-[180px] md:max-w-[220px] object-contain opacity-60 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
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
