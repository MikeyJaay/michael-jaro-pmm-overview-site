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
    <section className="border-y border-border bg-secondary/30 py-14 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          We've Worked at companies form Bootstrap Startups to to Global Enterprises
        </p>
      </div>
      <div className="relative mb-10">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-secondary/30 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-secondary/30 to-transparent" />
        <div className="flex animate-scroll whitespace-nowrap">
          {[...logos, ...logos].map((logo, i) => (
            <div
              key={i}
              className="mx-4 inline-flex h-28 items-center justify-center shrink-0 min-w-[260px] md:min-w-[340px]"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="h-20 md:h-28 w-auto max-w-[280px] md:max-w-[420px] object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Button asChild variant="outline" className="gap-2 font-semibold">
          <Link to="/career">
            See Career Timeline <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LogoCarousel;
