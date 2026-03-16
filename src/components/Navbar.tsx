import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const workSamples = [
  { label: "Landing Pages", path: "/landing-pages", soon: false },
  { label: "Decks", path: "/decks", soon: true },
  { label: "Messaging", path: "/messaging", soon: true },
  { label: "Technical Marketing", path: "/technical-marketing", soon: true },
  { label: "Sales Enablement", path: "/sales-enablement", soon: true },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isWorkSampleActive = workSamples.some((s) => location.pathname === s.path);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
          PMM<span className="text-gradient">Portfolio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {/* Home */}
          <Link
            to="/"
            className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground"
            style={{ color: location.pathname === "/" ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
          >
            Home
            {location.pathname === "/" && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-x-1 -bottom-[17px] h-[2px] bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </Link>

          {/* Work Samples dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="relative flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground"
              style={{ color: isWorkSampleActive ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
            >
              Work Samples
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
              {isWorkSampleActive && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-1 -bottom-[17px] h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-xl border border-border bg-background p-2 shadow-lg"
                >
                  {workSamples.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
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
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
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
              <Link to="/" onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-secondary" style={{ color: location.pathname === "/" ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}>
                Home
              </Link>
              <p className="px-3 pt-3 pb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">Work Samples</p>
              {workSamples.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-md px-3 py-2.5 pl-5 text-sm font-medium transition-colors hover:bg-secondary"
                  style={{ color: location.pathname === item.path ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                >
                  {item.label}
                  {item.soon && (
                    <Badge variant="outline" className="border-border/50 px-1.5 py-0 text-[10px] text-muted-foreground">Soon</Badge>
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
