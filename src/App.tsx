
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

// Placeholder for future article components that will be created
const ComingSoonArticle = () => (
  <div className="container-content py-16">
    <h1 className="text-3xl font-bold mb-6">Article Coming Soon</h1>
    <p>This article is currently being crafted by our expert team. Please check back soon!</p>
    <div className="mt-8">
      <a href="/blog" className="cta-button">Return to Blog</a>
    </div>
  </div>
);

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
            
            {/* Article Routes - Published */}
            <Route path="/credit/best-free-credit-score-apps" element={<CreditScoreAppsArticle />} />
            
            {/* Article Routes - Coming Soon Placeholders */}
            <Route path="/credit/how-to-improve-your-credit-score-fast" element={<ComingSoonArticle />} />
            <Route path="/investing/beginners-guide-to-investing-apps" element={<ComingSoonArticle />} />
            <Route path="/loans/how-to-get-personal-loan-online" element={<ComingSoonArticle />} />
            <Route path="/budgeting/top-budgeting-tools-apps-families" element={<ComingSoonArticle />} />
            <Route path="/investing/start-investing-little-money" element={<ComingSoonArticle />} />
            <Route path="/credit/credit-karma-vs-credit-sesame" element={<ComingSoonArticle />} />
            <Route path="/business-funding/options-for-entrepreneurs" element={<ComingSoonArticle />} />
            <Route path="/loans/sofi-loans-review" element={<ComingSoonArticle />} />
            <Route path="/wealth-building/build-generational-wealth" element={<ComingSoonArticle />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
