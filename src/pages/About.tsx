
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';

const About = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="About GV Freedom - Our Mission to Help You Achieve Financial Independence"
        description="Learn about GV Freedom's mission to provide expert personal finance guidance and help readers achieve financial independence."
        keywords="about GV Freedom, financial independence, personal finance mission, money experts"
      />
      
      <section className="py-12 bg-white">
        <div className="container-content max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-center">About GV Freedom</h1>
          
          <div className="prose max-w-none">
            <h2 className="text-2xl font-serif font-bold mb-4 text-finance-navy">Our Mission</h2>
            <p className="mb-6">
              At GV Freedom, our mission is simple but powerful: to help everyday people achieve true financial independence. We believe that financial freedom isn't just for the wealthy or financially savvy—it's attainable for anyone with the right guidance, tools, and strategies.
            </p>
            
            <h2 className="text-2xl font-serif font-bold mb-4 text-finance-navy">What We Do</h2>
            <p className="mb-4">
              We provide expert, actionable advice across all areas of personal finance:
            </p>
            <ul className="list-disc pl-6 mb-6">
              <li>Credit improvement and monitoring strategies</li>
              <li>Smart investing approaches for beginners and experienced investors</li>
              <li>Guidance on securing the right loans for your needs</li>
              <li>Budgeting tools and techniques for individuals and families</li>
              <li>Business funding options for entrepreneurs</li>
              <li>Long-term wealth building strategies for generational prosperity</li>
            </ul>
            
            <h2 className="text-2xl font-serif font-bold mb-4 text-finance-navy">Our Approach</h2>
            <p className="mb-6">
              Financial advice shouldn't be complicated or filled with jargon. We pride ourselves on delivering clear, concise, and practical information that you can implement immediately. Our content is thoroughly researched and regularly updated to ensure you're getting the most current advice in an ever-changing financial landscape.
            </p>
            
            <h2 className="text-2xl font-serif font-bold mb-4 text-finance-navy">Why Trust Us</h2>
            <p className="mb-6">
              Our team consists of experienced financial writers, certified financial planners, and industry experts who have a passion for helping others achieve financial success. We're committed to providing honest, unbiased information that puts your financial wellbeing first.
            </p>
            
            <h2 className="text-2xl font-serif font-bold mb-4 text-finance-navy">Affiliate Disclosure</h2>
            <p className="mb-6">
              GV Freedom partners with companies we believe offer valuable services to our readers. Some links on our site are affiliate links, which means we may earn a commission if you click through and make a purchase. This comes at no additional cost to you and helps us continue providing free financial guidance. We only recommend products and services we trust and believe will benefit our readers.
            </p>
            
            <h2 className="text-2xl font-serif font-bold mb-4 text-finance-navy">Contact Us</h2>
            <p className="mb-6">
              Have questions or feedback? We'd love to hear from you! Visit our <a href="/contact" className="text-finance-blue hover:text-finance-lightBlue">Contact Page</a> to get in touch with our team.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;
