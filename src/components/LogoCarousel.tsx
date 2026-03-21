import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import codilityLogo from "@/assets/logos/codility.svg";
import crowdstrikeLogo from "@/assets/logos/crowdstrike.svg";
import dominosLogo from "@/assets/logos/dominos.svg";
import hackajobLogo from "@/assets/logos/hackajob.svg";
import mitratechLogo from "@/assets/logos/mitratech.svg";

const logos = [
  { name: "Mitratech", src: mitratechLogo },
  { name: "Codility", src: codilityLogo },
  { name: "CrowdStrike", src: crowdstrikeLogo },
  { name: "Hackajob", src: hackajobLogo },
  { name: "Domino's", src: dominosLogo },
];

const LogoCarousel = () => (
  <section className="border-y border-border/40 bg-secondary/20 py-6">
    <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      From Bootstrap Startups to Global Enterprises
    </p>

    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-secondary/20 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-secondary/20 to-transparent" />

      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {[0, 1].map((g) => (
            <div key={g} className="logo-marquee-group" aria-hidden={g === 1}>
              {logos.map((logo) => (
                <div
                  key={`${g}-${logo.name}`}
                  className="inline-flex h-16 w-[180px] shrink-0 items-center justify-center md:h-20 md:w-[220px]"
                >
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-14 max-w-[160px] object-contain opacity-60 transition-opacity hover:opacity-100 md:h-16 md:max-w-[200px]"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="mt-3 flex justify-center">
      <Link
        to="/career"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        See Career Timeline <ArrowRight className="h-3 w-3" />
      </Link>
    </div>
  </section>
);

export default LogoCarousel;
