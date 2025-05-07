
import React from 'react';
import { Link } from 'react-router-dom';

// Finance category data
const categories = [
  {
    title: "Credit",
    description: "Learn how to build, improve, and maintain good credit.",
    path: "/credit",
    iconClass: "bg-blue-100",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-finance-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    )
  },
  {
    title: "Investing",
    description: "Start building wealth through smart investment strategies.",
    path: "/investing",
    iconClass: "bg-green-100",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-finance-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Loans",
    description: "Find the right loan options for your financial needs.",
    path: "/loans",
    iconClass: "bg-purple-100",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Budgeting",
    description: "Master your personal finances with effective budgeting tools.",
    path: "/budgeting",
    iconClass: "bg-yellow-100",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Business Funding",
    description: "Explore funding options to start or grow your business.",
    path: "/business-funding",
    iconClass: "bg-red-100",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Wealth Building",
    description: "Strategies for long-term financial independence and security.",
    path: "/wealth-building",
    iconClass: "bg-indigo-100",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
];

export function CategorySection() {
  return (
    <section className="py-16">
      <div className="container-content">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Financial Topics</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive resources across all aspects of personal finance to help you achieve your financial goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Link 
              key={index}
              to={category.path}
              className="block group"
            >
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 h-full hover:shadow-md transition-shadow duration-300">
                <div className={`${category.iconClass} p-3 rounded-full inline-flex mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-finance-green transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
