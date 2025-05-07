
import React, { useState } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface ArticleFAQProps {
  title?: string;
  items: FAQItem[];
}

export function ArticleFAQ({ title = "Frequently Asked Questions", items }: ArticleFAQProps) {
  // Generate unique IDs for FAQ schema
  const faqId = `faq-${Math.random().toString(36).substring(2, 9)}`;
  
  return (
    <section className="my-12">
      <h2 className="text-2xl font-semibold mb-6">{title}</h2>
      
      <Accordion type="single" collapsible className="w-full">
        {items.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>
              <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      
      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "@id": `#${faqId}`,
          "mainEntity": items.map((faq, index) => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": faq.answer
            }
          }))
        })}
      </script>
    </section>
  );
}
