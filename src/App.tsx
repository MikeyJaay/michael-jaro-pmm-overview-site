import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import AppShell from "./components/layout/AppShell";
import ScrollToTop from "./components/common/ScrollToTop";
import Home from "./pages/Home";
import CareerTimeline from "./pages/CareerTimeline";
import Writing from "./pages/Writing";
import WorkSamples from "./pages/WorkSamples";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<AppShell />}>
            <Route path="/" element={<Home />} />
            <Route path="/career" element={<CareerTimeline />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/work-samples" element={<WorkSamples />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
