
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const businessArticles = [
  {
    id: 1,
    title: "Best Business Funding Options for Entrepreneurs",
    excerpt: "Explore various funding sources for your business, including Advance Funds Network and alternatives.",
    path: "/business-funding/options-for-entrepreneurs",
    imageUrl: "/placeholder.svg"
  }
];

const BusinessFundingPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Business Funding Resources - Finance Your Entrepreneurial Journey | GV Freedom"
        description="Discover the best business funding options for entrepreneurs, including SBA loans, venture capital, Advance Funds Network, and alternative financing."
        keywords="business funding, entrepreneur financing, small business loans, startup funding, Advance Funds Network, business capital"
      />
      
      <section className="bg-red-700 text-white py-16">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Business Funding Resources</h1>
            <p className="text-xl">
              Find the capital you need to start or grow your business venture.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-content">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Fund Your Business Dreams</h2>
            <p className="text-gray-600 mb-6">
              Access to capital is often the biggest hurdle for entrepreneurs. Whether you're launching a startup, expanding an existing business, or navigating cash flow challenges, our guides will help you explore various funding options to fuel your entrepreneurial journey.
            </p>
          </div>
          
          <h2 className="text-3xl font-serif font-bold mb-8">Business Funding Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {businessArticles.map(article => (
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
                <h3 className="text-2xl font-serif font-bold mb-4">Find Business Funding Today</h3>
                <p className="text-gray-700 mb-4">
                  Explore your options and connect with funding partners that can help your business grow.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/business-funding/options-for-entrepreneurs" className="cta-button">
                    Explore Funding Options
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img src="/placeholder.svg" alt="Business funding" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BusinessFundingPage;
