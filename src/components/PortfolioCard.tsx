import { motion } from "framer-motion";
import type { PortfolioEntry } from "@/data/portfolioData";
import { Badge } from "@/components/ui/badge";

interface Props {
  entry: PortfolioEntry;
  index: number;
  total: number;
  isHovered: boolean;
  hoveredIndex: number | null;
  onHover: (i: number | null) => void;
  onClick: () => void;
}

const PortfolioCard = ({ entry, index, total, isHovered, hoveredIndex, onHover, onClick }: Props) => {
  const mid = (total - 1) / 2;
  const offset = index - mid;

  // Fan geometry
  const baseRotate = offset * 6;
  const baseX = offset * 80;
  const baseY = Math.abs(offset) * 15;

  // When hovered, card rises and de-rotates
  const hoverRotate = isHovered ? 0 : baseRotate;
  const hoverY = isHovered ? -40 : baseY;
  const hoverScale = isHovered ? 1.08 : hoveredIndex !== null && !isHovered ? 0.95 : 1;

  // Shift siblings away when one card is hovered
  let shiftX = 0;
  if (hoveredIndex !== null && !isHovered) {
    shiftX = index < hoveredIndex ? -20 : 20;
  }

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{ zIndex: isHovered ? 50 : total - Math.abs(offset) }}
      animate={{
        x: baseX + shiftX,
        y: hoverY,
        rotate: hoverRotate,
        scale: hoverScale,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      onClick={onClick}
      whileTap={{ scale: 0.97 }}
    >
      <div
        className={`relative w-[280px] overflow-hidden rounded-xl border border-border/50 bg-card p-5 transition-shadow duration-300 md:w-[320px] ${
          isHovered ? "glow-border-hover" : "glow-border"
        }`}
      >
        {/* Gradient top accent */}
        <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${entry.accent}`} />

        {/* Thumbnail placeholder */}
        <div className={`mb-4 flex h-40 items-center justify-center rounded-lg bg-gradient-to-br ${entry.accent}`}>
          <span className="font-display text-3xl font-bold text-foreground/20">
            {entry.title.charAt(0)}
          </span>
        </div>

        <p className="mb-1 text-xs font-medium uppercase tracking-wider text-primary">
          {entry.category}
        </p>
        <h3 className="mb-2 font-display text-base font-semibold leading-snug text-foreground">
          {entry.title}
        </h3>
        <p className="mb-3 text-xs leading-relaxed text-muted-foreground line-clamp-2">
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
  );
};

export default PortfolioCard;
