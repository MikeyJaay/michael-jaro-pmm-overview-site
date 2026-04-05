import { motion } from "framer-motion";
import { landingPages } from "@/data/portfolioData";
import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";

const LandingPageGallery = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <section className="relative py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[150px]" />
        </div>

        <div className="container relative mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center"
          >
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary md:text-base">
              Artifact Showcase
            </p>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Landing Pages
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground md:text-lg lg:max-w-3xl">
              Archived landing pages demonstrating product positioning, conversion strategy,
              and technical storytelling.
            </p>
          </motion.div>

          {!isMobile ? (
            <div className="grid grid-cols-4 gap-6">
              {landingPages.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="cursor-pointer rounded-2xl border border-border/60 bg-card overflow-hidden transition-all duration-200 hover:border-primary hover:shadow-[0_0_20px_hsl(var(--primary)/0.25)]"
                  onClick={() => window.open(entry.filePath, '_blank')}
                >
                  <div className="relative h-44 w-full overflow-hidden bg-muted">
                    <img
                      src={entry.thumbnail}
                      alt={`${entry.title} preview`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">{entry.category}</p>
                    <h3 className="mb-1.5 text-sm font-semibold leading-snug text-foreground">{entry.title}</h3>
                    <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground line-clamp-2">{entry.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {landingPages.map((entry, i) => (
                <motion.div
                  key={entry.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="cursor-pointer rounded-xl border border-border/50 bg-card overflow-hidden glow-border transition-shadow hover:glow-border-hover"
                  onClick={() => window.open(entry.filePath, '_blank')}
                >
                  <div className="relative h-40 w-full overflow-hidden bg-muted">
                    <img
                      src={entry.thumbnail}
                      alt={`${entry.title} preview`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">{entry.category}</p>
                    <h3 className="mb-1.5 text-base font-semibold text-foreground">{entry.title}</h3>
                    <p className="mb-3 text-xs text-muted-foreground line-clamp-2">{entry.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {entry.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

    </>
  );
};

export default LandingPageGallery;
