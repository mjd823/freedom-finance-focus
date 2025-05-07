
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import CreditScoreAppsArticle from "./pages/articles/CreditScoreAppsArticle";
import Blog from "./pages/Blog";
import About from "./pages/About";
import CreditPage from "./pages/categories/CreditPage";
import InvestingPage from "./pages/categories/InvestingPage";
import LoansPage from "./pages/categories/LoansPage";
import BudgetingPage from "./pages/categories/BudgetingPage";
import BusinessFundingPage from "./pages/categories/BusinessFundingPage";
import WealthBuildingPage from "./pages/categories/WealthBuildingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <HelmetProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            
            {/* Category Pages */}
            <Route path="/credit" element={<CreditPage />} />
            <Route path="/investing" element={<InvestingPage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/budgeting" element={<BudgetingPage />} />
            <Route path="/business-funding" element={<BusinessFundingPage />} />
            <Route path="/wealth-building" element={<WealthBuildingPage />} />
            
            {/* Article Routes */}
            <Route path="/credit/best-free-credit-score-apps" element={<CreditScoreAppsArticle />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
