import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Disable browser's native scroll restoration so we control it entirely
if (typeof window !== "undefined") {
  window.history.scrollRestoration = "manual";
}

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
