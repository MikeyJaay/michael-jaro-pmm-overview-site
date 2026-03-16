import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import type { PortfolioEntry } from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

interface Props {
  entry: PortfolioEntry | null;
  onClose: () => void;
}

const ArtifactViewer = ({ entry, onClose }: Props) => (
  <AnimatePresence>
    {entry && (
      <motion.div
        className="fixed inset-0 z-[100] flex flex-col bg-background/98 backdrop-blur-xl"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-border/50 px-6 py-3">
          <div className="flex items-center gap-3">
            <h2 className="font-display text-sm font-semibold text-foreground md:text-base">
              {entry.title}
            </h2>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="gap-1.5 text-muted-foreground"
              onClick={() => window.open(entry.filePath, "_blank")}
            >
              <ExternalLink size={14} /> Open
            </Button>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X size={18} />
            </Button>
          </div>
        </div>

        {/* Iframe */}
        <div className="flex-1 overflow-hidden">
          <iframe
            src={entry.filePath}
            title={entry.title}
            className="h-full w-full border-none"
            sandbox="allow-same-origin allow-scripts"
          />
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ArtifactViewer;
