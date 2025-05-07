
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const creditArticles = [
  {
    id: 1,
    title: "Best Free Credit Score Apps for 2025",
    excerpt: "Discover the top free apps to monitor your credit score, with detailed reviews of Credit Karma, Credit Sesame, and more.",
    path: "/credit/best-free-credit-score-apps",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "How to Improve Your Credit Score Fast",
    excerpt: "Follow these proven steps to boost your credit score quickly and effectively, from immediate actions to long-term strategies.",
    path: "/credit/how-to-improve-your-credit-score-fast",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "Credit Karma vs. Credit Sesame: Which Is Better for You?",
    excerpt: "A detailed comparison of these popular credit monitoring services to help you choose the right one.",
    path: "/credit/credit-karma-vs-credit-sesame",
    imageUrl: "/placeholder.svg"
  }
];

const CreditPage = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Credit Resources - Build, Monitor & Improve Your Credit Score | GV Freedom"
        description="Expert advice on how to build, monitor, and improve your credit score with tools like Credit Karma and Credit Sesame."
        keywords="credit score, credit monitoring, credit improvement, Credit Karma, Credit Sesame, free credit score"
      />
      
      <section className="bg-finance-navy text-white py-16">
        <div className="container-content">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Credit Resources</h1>
            <p className="text-xl text-gray-200">
              Expert advice on building, monitoring, and improving your credit score to unlock better financial opportunities.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-content">
          <div className="mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Why Your Credit Matters</h2>
            <p className="text-gray-600 mb-6">
              Your credit score is more than just a number—it's a key that unlocks financial opportunities. A good credit score can help you qualify for better interest rates on loans and credit cards, secure housing, and even affect job opportunities. At GV Freedom, we provide you with the resources you need to understand, monitor, and improve your credit.
            </p>
          </div>
          
          <h2 className="text-3xl font-serif font-bold mb-8">Credit Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {creditArticles.map(article => (
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
                <h3 className="text-2xl font-serif font-bold mb-4">Check Your Credit Score for Free</h3>
                <p className="text-gray-700 mb-4">
                  Knowledge is power when it comes to your credit. Start by checking your score for free with our trusted partners.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/credit/best-free-credit-score-apps" className="cta-button">
                    Explore Credit Score Apps
                  </Link>
                  <Link to="/credit/credit-karma-vs-credit-sesame" className="cta-button-secondary">
                    Compare Top Services
                  </Link>
                </div>
              </div>
              <div className="md:w-1/3">
                <img src="/placeholder.svg" alt="Check your credit score" className="rounded-lg shadow-md" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CreditPage;
