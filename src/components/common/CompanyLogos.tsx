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

const CompanyLogos = () => (
  <section className="border-y border-border/40 bg-secondary/30 py-8">
    <p className="mb-5 px-6 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground/70">
      Companies I've helped go to market
    </p>

    {/* Mobile — auto-scrolling marquee */}
    <div className="md:hidden overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-x-6 pointer-events-none">
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="flex w-[140px] shrink-0 items-center justify-center">
            <img
              src={logo.src}
              alt={logo.name}
              loading="eager"
              decoding="async"
              className="h-14 w-auto max-w-[130px] object-contain opacity-60"
            />
          </div>
        ))}
      </div>
    </div>

    {/* Desktop — static spread layout */}
    <div className="container mx-auto hidden w-full items-center justify-center gap-x-4 md:flex lg:gap-x-5 xl:gap-x-7">
      {logos.map((logo) => (
        <div key={logo.name} className="flex min-w-0 flex-1 items-center justify-center">
          <img
            src={logo.src}
            alt={logo.name}
            width={360}
            height={80}
            loading="eager"
            decoding="async"
            className="h-16 w-auto max-h-16 max-w-[min(100%,300px)] object-contain opacity-60 transition-opacity hover:opacity-100 lg:h-20 lg:max-h-20 lg:max-w-[min(100%,360px)] xl:h-[5.25rem] xl:max-h-[5.25rem] xl:max-w-[min(100%,400px)] 2xl:h-24 2xl:max-h-24 2xl:max-w-[min(100%,460px)]"
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

export default CompanyLogos;
