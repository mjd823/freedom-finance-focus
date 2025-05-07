
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

export function HeroSection() {
  return (
    <section className="bg-finance-navy text-white py-24">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
              Your Path to <span className="text-finance-green">Financial Freedom</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Expert advice on credit improvement, smart investing, loan options, and wealth building strategies to help you achieve financial independence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="cta-button">
                <Link to="/credit/best-free-credit-score-apps">
                  Check Your Credit Score
                </Link>
              </Button>
              <Button asChild variant="outline" className="text-white border-white hover:bg-white/10">
                <Link to="/investing/beginners-guide-to-investing-apps">
                  Start Investing Today
                </Link>
              </Button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-finance-green/20 rounded-full h-80 w-80 absolute top-0 right-0 blur-3xl"></div>
              <img 
                src="/placeholder.svg" 
                alt="Financial Freedom" 
                className="relative z-10 rounded-lg shadow-xl max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
