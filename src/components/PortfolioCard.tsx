import { motion } from "framer-motion";
import type { PortfolioEntry } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";

interface Props {
  entry: PortfolioEntry;
  index: number;
  total: number;
  isHovered: boolean;
  animateProps: { scale: number; rotate: number; x: number; y: number };
  zIndex: number;
  onHover: (i: number | null) => void;
  onClick: () => void;
}

const PortfolioCard = ({ entry, index, isHovered, animateProps, zIndex, onHover, onClick }: Props) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      style={{ zIndex }}
      animate={animateProps}
      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.8 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      whileTap={{ scale: animateProps.scale * 0.96 }}
    >
      <div
        className={`relative w-[260px] overflow-hidden rounded-2xl border transition-shadow duration-300 ${
          isHovered ? "border-primary/20 bg-background shadow-xl shadow-black/[0.08]" : "border-border/60 bg-background shadow-md shadow-black/[0.04]"
        }`}
      >
        {/* Gradient top accent */}
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${entry.accent}`} />

        {/* Live HTML thumbnail */}
        <div className="relative h-40 w-full overflow-hidden bg-background">
          <iframe
            src={entry.filePath}
            title={`${entry.title} preview`}
            className="pointer-events-none absolute left-0 top-0 origin-top-left"
            style={{ width: "1280px", height: "960px", transform: "scale(0.203)", transformOrigin: "top left" }}
            sandbox="allow-same-origin"
            loading="eager"
            tabIndex={-1}
          />
          <div className="absolute inset-0" />
        </div>

        <div className="p-4">
          <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">{entry.category}</p>
          <h3 className="mb-1.5 font-display text-sm font-semibold leading-snug text-foreground">{entry.title}</h3>
          <p className="mb-3 text-[11px] leading-relaxed text-muted-foreground line-clamp-2">{entry.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {entry.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-[10px]">{tag}</Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
