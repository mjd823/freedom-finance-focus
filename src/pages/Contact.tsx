
import React from 'react';
import { MainLayout } from '@/layouts/MainLayout';
import { SEOHead } from '@/components/SEOHead';
import { ContactForm } from '@/components/contact/ContactForm';

const Contact = () => {
  return (
    <MainLayout>
      <SEOHead 
        title="Contact GV Freedom | Get in Touch with Our Financial Experts"
        description="Contact the GV Freedom team with your questions about personal finance, credit, investing, loans, or business funding. We're here to help you achieve financial freedom."
        canonicalUrl="/contact"
      />
      
      <div className="py-12 md:py-20">
        <div className="container-content max-w-5xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about personal finance, our articles, or partnership opportunities? Get in touch with our team.
            </p>
          </div>
          
          <div className="bg-white shadow-lg rounded-lg p-6 md:p-10 border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="md:col-span-2">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">Email</h4>
                    <p className="text-gray-600">contact@gvfreedom.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900">For Business Inquiries</h4>
                    <p className="text-gray-600">partners@gvfreedom.com</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-gray-900">Response Time</h4>
                    <p className="text-gray-600">We typically respond within 1-2 business days.</p>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 mt-6 pt-6">
                  <h4 className="font-medium text-gray-900 mb-2">Connect With Us</h4>
                  <div className="flex space-x-4">
                    {/* Social Media Icons */}
                    <a href="#" className="text-gray-600 hover:text-finance-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-finance-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                    <a href="#" className="text-gray-600 hover:text-finance-green">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Contact;
