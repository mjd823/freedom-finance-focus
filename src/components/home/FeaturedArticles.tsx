
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

// Sample featured article data
const featuredArticles = [
  {
    id: 1,
    title: "Best Free Credit Score Apps for 2025",
    excerpt: "Discover the top free apps to monitor your credit score, with detailed reviews of Credit Karma, Credit Sesame, and more.",
    category: "Credit",
    path: "/credit/best-free-credit-score-apps",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 2,
    title: "Beginner's Guide to Investing Apps",
    excerpt: "Learn how to start investing with user-friendly apps like Acorns, Robinhood, and more, even with little experience.",
    category: "Investing",
    path: "/investing/beginners-guide-to-investing-apps",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 3,
    title: "How to Improve Your Credit Score Fast",
    excerpt: "Follow these proven steps to boost your credit score quickly and effectively, from immediate actions to long-term strategies.",
    category: "Credit",
    path: "/credit/how-to-improve-your-credit-score-fast",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 4,
    title: "How to Get a Personal Loan Online",
    excerpt: "Everything you need to know about applying for personal loans online, with a focus on SoFi and other top lenders.",
    category: "Loans",
    path: "/loans/how-to-get-personal-loan-online",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 5,
    title: "Top Budgeting Tools and Apps for Families",
    excerpt: "The best budgeting solutions for families looking to manage their finances, save more, and achieve their financial goals.",
    category: "Budgeting",
    path: "/budgeting/top-budgeting-tools-apps-families",
    imageUrl: "/placeholder.svg"
  },
  {
    id: 6,
    title: "SoFi Loans Review: Pros, Cons, and How to Apply",
    excerpt: "A comprehensive review of SoFi's loan offerings, including personal loans, student loan refinancing, and more.",
    category: "Loans",
    path: "/loans/sofi-loans-review",
    imageUrl: "/placeholder.svg"
  },
];

export function FeaturedArticles() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Featured Articles</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Expert guides and reviews to help you make informed financial decisions and progress on your journey to financial freedom.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map(article => (
            <Card key={article.id} className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="p-0">
                <div className="relative">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover rounded-t-lg"
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
        
        <div className="mt-12 text-center">
          <Link 
            to="/blog"
            className="cta-button-secondary"
          >
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
