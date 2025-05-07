
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const budgetingArticles = [
  {
    id: 1,
    title: "Top Budgeting Tools and Apps for Families",
    excerpt: "The best budgeting solutions for families looking to manage their finances, save more, and achieve their financial goals.",
    path: "/budgeting/top-budgeting-tools-apps-families",
    imageUrl: "/placeholder.svg"
  }
];

const BudgetingPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Budgeting Resources - Master Your Personal Finances | GV Freedom"
        description="Discover the best budgeting tools, apps, and strategies to take control of your finances and achieve your financial goals."
        keywords="budgeting, personal finance, money management, budgeting apps, family budget, saving money"
      />
      
      <section className="bg-yellow-600 text-white py-16">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Budgeting Resources</h1>
            <p className="text-xl">
              Master your personal finances with effective budgeting tools and strategies.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-content">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Take Control of Your Finances</h2>
            <p className="text-gray-600 mb-6">
              A solid budget is the foundation of financial success. Whether you're looking to get out of debt, save for a major purchase, or simply gain better visibility into your spending habits, our budgeting resources will help you take control of your financial future.
            </p>
          </div>
          
          <h2 className="text-3xl font-serif font-bold mb-8">Budgeting Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {budgetingArticles.map(article => (
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
                <h3 className="text-2xl font-serif font-bold mb-4">Find the Right Budgeting Tool</h3>
                <p className="text-gray-700 mb-4">
                  Discover apps and strategies that make budgeting simple for you and your family.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/budgeting/top-budgeting-tools-apps-families" className="cta-button">
                    Explore Budgeting Tools
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img src="/placeholder.svg" alt="Budgeting tools" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BudgetingPage;
