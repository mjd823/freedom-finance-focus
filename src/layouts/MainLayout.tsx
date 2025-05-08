
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        
        {/* Global styles for CTA buttons */}
        <style>{`
          .container-content {
            width: 100%;
            max-width: 1200px;
            margin-left: auto;
            margin-right: auto;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .cta-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: #22c55e;
            color: white;
            font-weight: 600;
            padding: 0.5rem 1.25rem;
            border-radius: 0.375rem;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          
          .cta-button:hover {
            background-color: #16a34a;
          }
          
          .cta-button-secondary {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background-color: white;
            color: #0f172a;
            font-weight: 600;
            padding: 0.5rem 1.25rem;
            border-radius: 0.375rem;
            border: 1px solid #e2e8f0;
            transition-property: all;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 150ms;
          }
          
          .cta-button-secondary:hover {
            background-color: #f8fafc;
            border-color: #cbd5e1;
          }
        `}</style>
      </div>
    </HelmetProvider>
  );
}
