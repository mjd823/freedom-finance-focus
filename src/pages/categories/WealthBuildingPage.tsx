
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const wealthArticles = [
  {
    id: 1,
    title: "How to Build Generational Wealth: Steps Anyone Can Take",
    excerpt: "Practical advice on creating lasting wealth that can benefit future generations of your family.",
    path: "/wealth-building/build-generational-wealth",
    imageUrl: "/placeholder.svg"
  }
];

const WealthBuildingPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Wealth Building Strategies - Create Lasting Financial Security | GV Freedom"
        description="Learn effective wealth building strategies to create long-term financial security and build generational wealth for your family."
        keywords="wealth building, financial independence, generational wealth, retirement planning, wealth creation, financial security"
      />
      
      <section className="bg-indigo-700 text-white py-16">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Wealth Building Resources</h1>
            <p className="text-xl">
              Strategies for long-term financial independence and creating generational wealth.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-content">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Building Long-Term Wealth</h2>
            <p className="text-gray-600 mb-6">
              True financial freedom comes from building sustainable wealth that provides security for you and future generations. Our wealth-building resources focus on proven strategies that anyone can implement, regardless of your current financial situation or income level.
            </p>
          </div>
          
          <h2 className="text-3xl font-serif font-bold mb-8">Wealth Building Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {wealthArticles.map(article => (
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
                <h3 className="text-2xl font-serif font-bold mb-4">Create Lasting Financial Legacy</h3>
                <p className="text-gray-700 mb-4">
                  Learn how to build wealth that lasts for generations and provides security for your family's future.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/wealth-building/build-generational-wealth" className="cta-button">
                    Build Generational Wealth
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img src="/placeholder.svg" alt="Building wealth" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default WealthBuildingPage;
