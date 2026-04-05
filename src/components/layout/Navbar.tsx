import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Home", path: "/" },
    { label: "Career Timeline", path: "/career" },
    { label: "Blog", path: "/writing" },
    { label: "Work Samples", path: "/work-samples" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4">
      {/* Pill container */}
      <div
        className={`mx-auto max-w-4xl rounded-full px-5 h-14 flex items-center justify-between transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl border border-border/60 shadow-sm"
            : "bg-transparent border border-transparent"
        }`}
      >
        <Link to="/" className="font-display text-lg font-bold tracking-tight text-foreground">
          MJ<span className="text-gradient">Portfolio</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-foreground"
              style={{ color: location.pathname === link.path ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
            >
              {link.label}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute inset-x-1 -bottom-[2px] h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu — drops below pill */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-4xl overflow-hidden rounded-2xl border border-border/60 bg-background/95 backdrop-blur-xl shadow-sm md:hidden"
          >
            <div className="flex flex-col gap-1 p-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
                  style={{ color: location.pathname === link.path ? "hsl(var(--foreground))" : "hsl(var(--muted-foreground))" }}
                >
                  {link.label}
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
