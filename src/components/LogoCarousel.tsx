import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import codilityLogo from "@/assets/logos/codility.svg";
import crowdstrikeLogo from "@/assets/logos/crowdstrike.svg";
import dominosLogo from "@/assets/logos/dominos.svg";
import hackajobLogo from "@/assets/logos/hackajob.svg";
import mitratechLogo from "@/assets/logos/mitratech.svg";

const logos = [
  { name: "CrowdStrike", src: crowdstrikeLogo },
  { name: "Codility", src: codilityLogo },
  { name: "Domino's", src: dominosLogo },
  { name: "Hackajob", src: hackajobLogo },
  { name: "Mitratech", src: mitratechLogo },
];

const LogoCarousel = () => (
  <section className="border-y border-border/40 bg-secondary/20 py-6">
    <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
      I've Worked at Companies from Bootstrap Startups to Global Enterprises.
    </p>

    <div className="container mx-auto flex w-full flex-wrap items-center justify-center gap-x-6 gap-y-8 sm:gap-x-8 md:flex-nowrap md:gap-x-4 lg:gap-x-5 xl:gap-x-7">
      {logos.map((logo) => (
        <div key={logo.name} className="flex shrink-0 basis-[40%] items-center justify-center sm:basis-[28%] md:basis-0 md:min-w-0 md:flex-1">
          <img
            src={logo.src}
            alt={logo.name}
            width={360}
            height={80}
            loading="eager"
            decoding="async"
            className="h-12 w-auto max-h-12 max-w-[min(100%,220px)] object-contain opacity-60 transition-opacity hover:opacity-100 sm:h-14 sm:max-h-14 sm:max-w-[min(100%,260px)] md:h-16 md:max-h-16 md:max-w-[min(100%,300px)] lg:h-20 lg:max-h-20 lg:max-w-[min(100%,360px)] xl:h-[5.25rem] xl:max-h-[5.25rem] xl:max-w-[min(100%,400px)] 2xl:h-24 2xl:max-h-24 2xl:max-w-[min(100%,460px)]"
          />
        </div>
      ))}
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
