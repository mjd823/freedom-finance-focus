
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { HeroSection } from '@/components/home/HeroSection';
import { CategorySection } from '@/components/home/CategorySection';
import { FeaturedArticles } from '@/components/home/FeaturedArticles';
import { NewsletterSection } from '@/components/home/NewsletterSection';

const Index = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="GV Freedom - Expert Personal Finance Tips for Financial Independence"
        description="Learn about credit, investing, loans, budgeting and more to achieve financial freedom with expert advice from GV Freedom."
        keywords="financial freedom, personal finance, credit score, investing, budgeting, loans, wealth building"
      />
      
      <HeroSection />
      <CategorySection />
      <FeaturedArticles />
      <NewsletterSection />
    </MainLayout>
  );
};

export default Index;
