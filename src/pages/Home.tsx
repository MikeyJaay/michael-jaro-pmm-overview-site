import HeroSection from "@/components/sections/HeroSection";
import CompanyLogos from "@/components/common/CompanyLogos";
import GtmBreaksSection from "@/components/sections/GtmBreaksSection";
import InTheirShoesSection from "@/components/sections/InTheirShoesSection";
import PerspectiveSection from "@/components/sections/PerspectiveSection";
import WhatIBuildSection from "@/components/sections/WhatIBuildSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { Layout, MessageSquare, FileText, Target } from "lucide-react";

// const workLinks = [
//   { label: "Landing Pages", path: "/landing-pages", icon: Layout, description: "Product positioning, conversion strategy, and technical storytelling" },
//   { label: "Messaging", path: "/messaging", icon: MessageSquare, description: "Messaging frameworks, positioning statements, and value pillar development" },
//   { label: "Technical Marketing", path: "/technical-marketing", icon: FileText, description: "Technical whitepapers, datasheets, and architecture explanations" },
//   { label: "Sales Enablement", path: "/sales-enablement", icon: Target, description: "Discovery guides, demo narratives, and objection handling" },
// ];

const Home = () => (
  <>
    <HeroSection />
    <CompanyLogos />
    <GtmBreaksSection />
    <InTheirShoesSection />
    <PerspectiveSection />
    <WhatIBuildSection />
    <PhilosophySection />

    {/* Work Samples quick links — commented out for MVP */}
    {/* <section id="work-samples" className="border-t border-border/30 py-14 md:py-20">
      <div className="container mx-auto">
        <div className="mb-8 text-center md:mb-10">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">Explore</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.5rem]">Work Samples</h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-6">
          {workLinks.map((item, i) => (
            <motion.div
              key={item.path}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
            >
              <Link
                to={item.path}
                className="group flex flex-col items-center rounded-xl border border-border/40 bg-card/80 p-6 text-center transition-all duration-200 hover:border-primary/20 hover:shadow-sm md:p-7"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15 md:h-12 md:w-12">
                  <item.icon size={24} />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground md:text-lg">{item.label}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground md:text-sm">{item.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}
  </>
);

export default Home;
