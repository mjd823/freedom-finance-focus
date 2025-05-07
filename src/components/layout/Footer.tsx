
import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-finance-navy text-white pt-16 pb-8">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-xl font-serif mb-4">GV Freedom</h4>
            <p className="text-gray-300 mb-4">
              Your path to financial independence starts here. Get expert advice on credit, investing, loans, and more.
            </p>
          </div>
          
          <div>
            <h5 className="font-medium text-lg mb-4">Categories</h5>
            <ul className="space-y-2">
              <li><Link to="/credit" className="text-gray-300 hover:text-finance-green transition-colors">Credit</Link></li>
              <li><Link to="/investing" className="text-gray-300 hover:text-finance-green transition-colors">Investing</Link></li>
              <li><Link to="/loans" className="text-gray-300 hover:text-finance-green transition-colors">Loans</Link></li>
              <li><Link to="/budgeting" className="text-gray-300 hover:text-finance-green transition-colors">Budgeting</Link></li>
              <li><Link to="/business-funding" className="text-gray-300 hover:text-finance-green transition-colors">Business Funding</Link></li>
              <li><Link to="/wealth-building" className="text-gray-300 hover:text-finance-green transition-colors">Wealth Building</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-lg mb-4">Company</h5>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-finance-green transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-finance-green transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-finance-green transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-medium text-lg mb-4">Legal</h5>
            <ul className="space-y-2">
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-finance-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-finance-green transition-colors">Terms of Service</Link></li>
              <li><Link to="/affiliate-disclosure" className="text-gray-300 hover:text-finance-green transition-colors">Affiliate Disclosure</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              © {new Date().getFullYear()} GV Freedom. All rights reserved.
            </p>
            <p>
              Affiliate Disclosure: Some links on this site are affiliate links. We may receive a commission if you make a purchase through these links, at no additional cost to you.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
