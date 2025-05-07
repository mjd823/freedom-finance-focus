
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100, // Offset for fixed header
        behavior: 'smooth'
      });
    }
  };

  return (
    <Card className="mb-8 border-finance-lightGray">
      <CardHeader className="pb-3">
        <CardTitle>Table of Contents</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <nav>
          <ul className="space-y-1">
            {items.map((item) => (
              <li 
                key={item.id}
                className={`${item.level === 2 ? '' : 'ml-4'}`}
              >
                <button
                  onClick={() => scrollToHeading(item.id)}
                  className="text-left w-full py-1 text-finance-blue hover:text-finance-lightBlue transition-colors"
                >
                  {item.text}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
}
