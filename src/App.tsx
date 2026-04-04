import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppShell from "./components/layout/AppShell";
import Home from "./pages/Home";
import LandingPages from "./pages/LandingPages";
import CareerTimeline from "./pages/CareerTimeline";
import ComingSoon from "./pages/ComingSoon";
import Writing from "./pages/Writing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<CareerTimeline />} />
            <Route path="/landing-pages" element={<LandingPages />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/:category" element={<ComingSoon />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
