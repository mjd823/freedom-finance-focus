
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const loanArticles = [
  {
    id: 1,
    title: "How to Get a Personal Loan Online",
    excerpt: "Everything you need to know about applying for personal loans online, with a focus on SoFi and other top lenders.",
    path: "/loans/how-to-get-personal-loan-online",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "SoFi Loans Review: Pros, Cons, and How to Apply",
    excerpt: "A comprehensive review of SoFi's loan offerings, including personal loans, student loan refinancing, and more.",
    path: "/loans/sofi-loans-review",
    imageUrl: "/placeholder.svg"
  }
];

const LoansPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Loan Resources - Find the Right Loan for Your Needs | GV Freedom"
        description="Compare personal loan options, learn about SoFi and other online lenders, and find the best loan terms for your financial situation."
        keywords="personal loans, online loans, SoFi, loan comparison, loan application, loan rates"
      />
      
      <section className="bg-finance-blue text-white py-16">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Loan Resources</h1>
            <p className="text-xl text-gray-200">
              Find the right loan options to meet your financial needs with our expert guides and reviews.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-content">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Making Smart Loan Decisions</h2>
            <p className="text-gray-600 mb-6">
              Whether you're looking to consolidate debt, finance a major purchase, or cover unexpected expenses, the right loan can help you achieve your goals. Our comprehensive guides help you compare options, understand terms, and find lenders with competitive rates and favorable terms.
            </p>
          </div>
          
          <h2 className="text-3xl font-serif font-bold mb-8">Loan Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {loanArticles.map(article => (
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
                <h3 className="text-2xl font-serif font-bold mb-4">Compare Personal Loan Options</h3>
                <p className="text-gray-700 mb-4">
                  Find the best rates and terms from trusted online lenders to meet your financial needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/loans/how-to-get-personal-loan-online" className="cta-button">
                    Apply for a Loan Online
                  </Link>
                  <Link to="/loans/sofi-loans-review" className="cta-button-secondary">
                    Read SoFi Review
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img src="/placeholder.svg" alt="Compare loans" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default LoansPage;
