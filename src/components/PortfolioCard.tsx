import { motion } from "framer-motion";
import type { PortfolioEntry } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";

interface Props {
  entry: PortfolioEntry;
  index: number;
  total: number;
  distance: number; // 0 = hovered, 1 = adjacent, 2 = two away, etc. -1 = none hovered
  onHover: (i: number | null) => void;
  onClick: () => void;
}

const PortfolioCard = ({ entry, index, total, distance, onHover, onClick }: Props) => {
  // Dock-style magnification: scale based on distance from hovered card
  const getScale = () => {
    if (distance < 0) return 1; // nothing hovered
    if (distance === 0) return 1.18;
    if (distance === 1) return 1.06;
    if (distance === 2) return 1.0;
    return 0.96;
  };

  const getY = () => {
    if (distance < 0) return 0;
    if (distance === 0) return -30;
    if (distance === 1) return -12;
    return 0;
  };

  return (
    <motion.div
      className="cursor-pointer flex-shrink-0"
      style={{ zIndex: distance === 0 ? 50 : 10 - distance }}
      animate={{
        scale: getScale(),
        y: getY(),
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className={`relative w-[260px] overflow-hidden rounded-xl border border-border/50 bg-card transition-shadow duration-300 md:w-[280px] ${
          distance === 0 ? "glow-border-hover" : "glow-border"
        }`}
      >
        {/* Gradient top accent */}
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${entry.accent}`} />

        {/* Live HTML thumbnail via iframe */}
        <div className="relative h-44 w-full overflow-hidden bg-background">
          <iframe
            src={entry.filePath}
            title={`${entry.title} preview`}
            className="pointer-events-none absolute left-0 top-0 origin-top-left"
            style={{
              width: "1280px",
              height: "960px",
              transform: "scale(0.219)",
              transformOrigin: "top left",
            }}
            sandbox="allow-same-origin"
            loading="lazy"
            tabIndex={-1}
          />
          {/* Overlay to prevent interaction */}
          <div className="absolute inset-0" />
        </div>

        <div className="p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
            {entry.category}
          </p>
          <h3 className="mb-1.5 font-display text-sm font-semibold leading-snug text-foreground">
            {entry.title}
          </h3>
          <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground line-clamp-2">
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
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
