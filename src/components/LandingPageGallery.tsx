import { useState } from "react";
import { motion } from "framer-motion";
import { landingPages, type PortfolioEntry } from "@/data/portfolioData";
import PortfolioCard from "./PortfolioCard";
import ArtifactViewer from "./ArtifactViewer";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const LandingPageGallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [viewerEntry, setViewerEntry] = useState<PortfolioEntry | null>(null);
  const isMobile = useIsMobile();

  return (
    <>
      <section className="relative py-20 md:py-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
        </div>

        <div className="container relative mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Artifact Showcase
            </p>
            <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">
              Landing Pages
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Archived landing pages demonstrating product positioning, conversion strategy,
              and technical storytelling.
            </p>
          </motion.div>

          {/* Desktop: Dock-style horizontal row */}
          {!isMobile ? (
            <div className="flex items-end justify-center gap-5 pb-8" style={{ minHeight: 420 }}>
              {landingPages.map((entry, i) => (
                <PortfolioCard
                  key={entry.id}
                  entry={entry}
                  index={i}
                  total={landingPages.length}
                  distance={hoveredIndex === null ? -1 : Math.abs(i - hoveredIndex)}
                  onHover={setHoveredIndex}
                  onClick={() => setViewerEntry(entry)}
                />
              ))}
            </div>
          ) : (
            /* Mobile: Stacked cards */
            <div className="flex flex-col gap-4">
              {landingPages.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="cursor-pointer rounded-xl border border-border/50 bg-card overflow-hidden glow-border transition-shadow hover:glow-border-hover"
                  onClick={() => setViewerEntry(entry)}
                >
                  {/* Mobile thumbnail */}
                  <div className="relative h-40 w-full overflow-hidden bg-background">
                    <iframe
                      src={entry.filePath}
                      title={`${entry.title} preview`}
                      className="pointer-events-none absolute left-0 top-0"
                      style={{
                        width: "1280px",
                        height: "960px",
                        transform: "scale(0.3)",
                        transformOrigin: "top left",
                      }}
                      sandbox="allow-same-origin"
                      loading="lazy"
                      tabIndex={-1}
                    />
                    <div className="absolute inset-0" />
                  </div>
                  <div className="p-5">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
                      {entry.category}
                    </p>
                    <h3 className="mb-1.5 font-display text-base font-semibold text-foreground">
                      {entry.title}
                    </h3>
                    <p className="mb-3 text-xs text-muted-foreground line-clamp-2">
                      {entry.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <ArtifactViewer entry={viewerEntry} onClose={() => setViewerEntry(null)} />
    </>
  );
};

export default LandingPageGallery;
