
import React from 'react';
import { Button } from "@/components/ui/button";

interface AffiliateBannerProps {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
  image?: string;
  company: string;
}

export function AffiliateBanner({
  title,
  description,
  buttonText,
  buttonUrl,
  image,
  company
}: AffiliateBannerProps) {
  return (
    <div className="affiliate-banner">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {image && (
          <div className="flex-shrink-0 w-full md:w-1/4">
            <img 
              src={image} 
              alt={company} 
              className="max-w-full h-auto mx-auto"
            />
          </div>
        )}
        <div className={image ? "flex-grow" : "w-full"}>
          <h3 className="text-xl font-semibold mb-3">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button asChild className="cta-button">
            <a href={buttonUrl} target="_blank" rel="nofollow noopener">
              {buttonText}
            </a>
          </Button>
          <div className="mt-3 text-xs text-gray-500">
            *This link contains an affiliate code. We may receive a commission if you sign up.
          </div>
        </div>
      </div>
    </div>
  );
}
