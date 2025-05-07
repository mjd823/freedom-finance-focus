
import React from 'react';
import { Link } from 'react-router-dom';

interface Article {
  title: string;
  path: string;
  category: string;
  imageUrl?: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="my-12 border-t border-gray-200 pt-8">
      <h3 className="text-2xl font-semibold mb-6">Related Articles</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <Link key={index} to={article.path} className="group">
            <div className="bg-white rounded-lg overflow-hidden border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
              {article.imageUrl && (
                <div className="h-40 overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="text-sm text-finance-green font-medium mb-2">{article.category}</div>
                <h4 className="font-semibold group-hover:text-finance-blue transition-colors">
                  {article.title}
                </h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
