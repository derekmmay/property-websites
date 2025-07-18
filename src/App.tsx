
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import Visuals from "./pages/Contact";
import Locale from "./pages/Lifestyle";
import Proximity from "./pages/Location";
import Education from "./pages/Schools";
import Insights from "./pages/Data";
import PropertyPage from "./pages/PropertyPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visuals" element={<Visuals />} />
          <Route path="/locale" element={<Locale />} />
          <Route path="/proximity" element={<Proximity />} />
          <Route path="/education" element={<Education />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/:propertyAddress" element={<PropertyPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
