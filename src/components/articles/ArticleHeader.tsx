
import React from 'react';
import { Badge } from "@/components/ui/badge";
import { Link } from 'react-router-dom';

interface ArticleHeaderProps {
  title: string;
  excerpt: string;
  category: string;
  categoryPath: string;
  publishDate: string;
  updateDate?: string;
  authorName: string;
  authorPath?: string;
  featuredImage?: string;
}

export function ArticleHeader({
  title,
  excerpt,
  category,
  categoryPath,
  publishDate,
  updateDate,
  authorName,
  authorPath,
  featuredImage
}: ArticleHeaderProps) {
  const formattedPublishDate = new Date(publishDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const formattedUpdateDate = updateDate 
    ? new Date(updateDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;
  
  return (
    <header className="mb-8">
      <div className="space-y-1 mb-2">
        <Link to={categoryPath}>
          <Badge className="bg-finance-green hover:bg-finance-green">{category}</Badge>
        </Link>
      </div>
      
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
        {title}
      </h1>
      
      <p className="text-xl text-gray-600 mb-6">
        {excerpt}
      </p>
      
      <div className="flex items-center text-sm text-gray-500 mb-8">
        <div className="flex items-center">
          <span>By </span>
          {authorPath ? (
            <Link to={authorPath} className="font-medium text-gray-900 hover:text-finance-green ml-1">
              {authorName}
            </Link>
          ) : (
            <span className="font-medium text-gray-900 ml-1">{authorName}</span>
          )}
        </div>
        <span className="mx-2">•</span>
        <time dateTime={publishDate}>{formattedPublishDate}</time>
        {formattedUpdateDate && (
          <>
            <span className="mx-2">•</span>
            <span>Updated: {formattedUpdateDate}</span>
          </>
        )}
      </div>
      
      {featuredImage && (
        <div className="mb-8">
          <img 
            src={featuredImage} 
            alt={title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )}
    </header>
  );
}
