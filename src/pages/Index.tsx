import HeroSection from "@/components/HeroSection";
import LogoCarousel from "@/components/LogoCarousel";
import GtmBreaksSection from "@/components/GtmBreaksSection";
import InTheirShoesSection from "@/components/InTheirShoesSection";
import WhatIBuildSection from "@/components/WhatIBuildSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout, MessageSquare, FileText, Target } from "lucide-react";

const workLinks = [
  { label: "Landing Pages", path: "/landing-pages", icon: Layout, description: "Product positioning, conversion strategy, and technical storytelling" },
  { label: "Messaging", path: "/messaging", icon: MessageSquare, description: "Messaging frameworks, positioning statements, and value pillar development" },
  { label: "Technical Marketing", path: "/technical-marketing", icon: FileText, description: "Technical whitepapers, datasheets, and architecture explanations" },
  { label: "Sales Enablement", path: "/sales-enablement", icon: Target, description: "Discovery guides, demo narratives, and objection handling" },
];

const Index = () => (
  <>
    <HeroSection />
    <LogoCarousel />
    <GtmBreaksSection />
    <InTheirShoesSection />
    <WhatIBuildSection />

    {/* Work Samples quick links */}
    <section className="border-t border-border/30 py-14 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-8 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Explore</p>
          <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Work Samples</h2>
        </div>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                className="group flex flex-col items-center rounded-xl border border-border/40 bg-card/80 p-5 text-center transition-all duration-200 hover:border-primary/20 hover:shadow-sm"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                  <item.icon size={20} />
                </div>
                <h3 className="mb-1 font-display text-sm font-semibold text-foreground">{item.label}</h3>
                <p className="text-[11px] leading-relaxed text-muted-foreground">{item.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Index;
