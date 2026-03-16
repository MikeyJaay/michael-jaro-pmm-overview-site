import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { label: "Home", path: "/", soon: false },
  { label: "Landing Pages", path: "/landing-pages", soon: false },
  { label: "Decks", path: "/decks", soon: true },
  { label: "Messaging", path: "/messaging", soon: true },
  { label: "Technical Marketing", path: "/technical-marketing", soon: true },
  { label: "Sales Enablement", path: "/sales-enablement", soon: true },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
          PMM<span className="text-gradient">Portfolio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="relative flex items-center gap-1.5 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground"
              style={{ color: location.pathname === item.path ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
            >
              {item.label}
              {item.soon && (
                <Badge variant="outline" className="ml-1 border-border/50 px-1.5 py-0 text-[10px] text-muted-foreground">
                  Soon
                </Badge>
              )}
              {location.pathname === item.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-1 -bottom-[17px] h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-border/50 bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  style={{ color: location.pathname === item.path ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                >
                  {item.label}
                  {item.soon && (
                    <Badge variant="outline" className="border-border/50 px-1.5 py-0 text-[10px] text-muted-foreground">
                      Soon
                    </Badge>
                  )}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
