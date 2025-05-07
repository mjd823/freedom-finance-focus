
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const investingArticles = [
  {
    id: 1,
    title: "Beginner's Guide to Investing Apps",
    excerpt: "Learn how to start investing with user-friendly apps like Acorns, Robinhood, and more, even with little experience.",
    path: "/investing/beginners-guide-to-investing-apps",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "How to Start Investing with Little Money in 2025",
    excerpt: "Strategies and platforms to begin your investment journey, even with minimal capital.",
    path: "/investing/start-investing-little-money",
    imageUrl: "/placeholder.svg"
  }
];

const InvestingPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Investing Guides - Learn How to Invest Wisely | GV Freedom"
        description="Beginner-friendly guides to investing with apps like Acorns and Robinhood. Learn strategies to start investing with any budget."
        keywords="investing, investment apps, Robinhood, Acorns, beginner investing, stock market, ETFs"
      />
      
      <section className="bg-finance-green text-white py-16">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Investing Resources</h1>
            <p className="text-xl">
              Learn how to grow your wealth through smart investment strategies for beginners and experienced investors.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-content">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Investing Matters</h2>
            <p className="text-gray-600 mb-6">
              Investing is one of the most powerful ways to build wealth and achieve financial independence. While it may seem intimidating at first, modern investment apps have made it easier than ever to start with any budget. Our guides will help you navigate the world of investing with confidence.
            </p>
          </div>
          
          <h2 className="text-3xl font-serif font-bold mb-8">Investing Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {investingArticles.map(article => (
              <Card key={article.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="p-0">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
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
                  <Link 
                    to={article.path} 
                    className="text-finance-blue hover:text-finance-lightBlue font-medium transition-colors inline-flex items-center"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-2xl font-serif font-bold mb-4">Start Investing Today</h3>
                <p className="text-gray-700 mb-4">
                  Don't wait to start building your investment portfolio. Even small amounts can grow significantly over time.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/investing/beginners-guide-to-investing-apps" className="cta-button">
                    Explore Investing Apps
                  </Link>
                  <Link to="/investing/start-investing-little-money" className="cta-button-secondary">
                    Start with Little Money
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img src="/placeholder.svg" alt="Start investing" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default InvestingPage;
