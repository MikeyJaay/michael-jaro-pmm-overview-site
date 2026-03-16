import HeroSection from "@/components/HeroSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { landingPages } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const Index = () => (
  <>
    <HeroSection />

    {/* Featured artifacts preview */}
    <section className="border-t border-border/50 py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Featured Work</p>
            <h2 className="font-display text-2xl font-bold tracking-tight md:text-3xl">Landing Pages</h2>
          </div>
          <Link
            to="/landing-pages"
            className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-foreground"
          >
            View all <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {landingPages.map((entry, i) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                to="/landing-pages"
                className="group block rounded-xl border border-border/50 bg-card p-4 transition-shadow glow-border hover:glow-border-hover"
              >
                <div className={`mb-3 flex h-28 items-center justify-center rounded-lg bg-gradient-to-br ${entry.accent}`}>
                  <span className="font-display text-2xl font-bold text-foreground/20">{entry.title.charAt(0)}</span>
                </div>
                <p className="mb-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">{entry.category}</p>
                <h3 className="mb-1 font-display text-sm font-semibold leading-snug text-foreground">{entry.title}</h3>
                <div className="flex flex-wrap gap-1">
                  {entry.tags.slice(0, 2).map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-[9px]">{tag}</Badge>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default Index;
