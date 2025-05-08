
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

// Enhanced article data with better images
const articles = [
  {
    id: 1,
    title: "Best Free Credit Score Apps for 2025",
    excerpt: "Discover the top free apps to monitor your credit score, with detailed reviews of Credit Karma, Credit Sesame, and more.",
    category: "Credit",
    path: "/credit/best-free-credit-score-apps",
    imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Beginner's Guide to Investing Apps",
    excerpt: "Learn how to start investing with user-friendly apps like Acorns, Robinhood, and more, even with little experience.",
    category: "Investing",
    path: "/investing/beginners-guide-to-investing-apps",
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "How to Improve Your Credit Score Fast",
    excerpt: "Follow these proven steps to boost your credit score quickly and effectively, from immediate actions to long-term strategies.",
    category: "Credit",
    path: "/credit/how-to-improve-your-credit-score-fast",
    imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "How to Get a Personal Loan Online",
    excerpt: "Everything you need to know about applying for personal loans online, with a focus on SoFi and other top lenders.",
    category: "Loans",
    path: "/loans/how-to-get-personal-loan-online",
    imageUrl: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Top Budgeting Tools and Apps for Families",
    excerpt: "The best budgeting solutions for families looking to manage their finances, save more, and achieve their financial goals.",
    category: "Budgeting",
    path: "/budgeting/top-budgeting-tools-apps-families",
    imageUrl: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "SoFi Loans Review: Pros, Cons, and How to Apply",
    excerpt: "A comprehensive review of SoFi's loan offerings, including personal loans, student loan refinancing, and more.",
    category: "Loans",
    path: "/loans/sofi-loans-review",
    imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "How to Start Investing with Little Money in 2025",
    excerpt: "Strategies and platforms to begin your investment journey, even with minimal capital.",
    category: "Investing",
    path: "/investing/start-investing-little-money",
    imageUrl: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Credit Karma vs. Credit Sesame: Which Is Better for You?",
    excerpt: "A detailed comparison of these popular credit monitoring services to help you choose the right one.",
    category: "Credit",
    path: "/credit/credit-karma-vs-credit-sesame",
    imageUrl: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    title: "Best Business Funding Options for Entrepreneurs",
    excerpt: "Explore various funding sources for your business, including Advance Funds Network and alternatives.",
    category: "Business Funding",
    path: "/business-funding/options-for-entrepreneurs",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    title: "How to Build Generational Wealth: Steps Anyone Can Take",
    excerpt: "Practical advice on creating lasting wealth that can benefit future generations of your family.",
    category: "Wealth Building",
    path: "/wealth-building/build-generational-wealth",
    imageUrl: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?auto=format&fit=crop&w=800&q=80"
  },
];

const Blog = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Financial Freedom Blog - GV Freedom"
        description="Expert articles on personal finance, credit improvement, investing, loans, budgeting and wealth building strategies."
        keywords="financial blog, money advice, credit tips, investing guides, personal finance articles"
      />
      
      <section className="py-12 bg-white">
        <div className="container-content">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">GV Freedom Blog</h1>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Expert guides and reviews to help you make informed financial decisions and progress on your journey to financial freedom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map(article => (
              <Card key={article.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-48 object-cover rounded-t-lg"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "/placeholder.svg";
                      }}
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-finance-green hover:bg-finance-green">{article.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow pt-6">
                  <CardTitle className="text-xl mb-3">
                    <Link to={article.path} className="hover:text-finance-green transition-colors">
                      {article.title}
                    </Link>
                  </CardTitle>
                  <p className="text-gray-600">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" className="text-finance-blue hover:text-finance-lightBlue p-0" asChild>
                    <Link to={article.path} className="inline-flex items-center">
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Get the latest financial tips, tools and resources delivered straight to your inbox.
            </p>
            
            <div className="max-w-md mx-auto">
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-finance-green"
                  required
                />
                <Button className="bg-finance-green hover:bg-finance-darkGreen text-white font-medium">
                  Subscribe
                </Button>
              </form>
              <p className="text-sm text-gray-500 mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;
