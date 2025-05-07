
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Success!",
        description: "You've successfully subscribed to our newsletter.",
      });
      setEmail("");
    }, 1000);
  };
  
  return (
    <section className="bg-finance-navy py-16">
      <div className="container-content max-w-5xl">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white">
              Get Financial Tips in Your Inbox
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Subscribe to our newsletter for expert advice, market insights, and exclusive tips to help you achieve financial freedom.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button 
              type="submit" 
              className="bg-finance-green hover:bg-finance-lightGreen text-white"
              disabled={isLoading}
            >
              {isLoading ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
          
          <div className="mt-6 text-center text-sm text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </div>
        </div>
      </div>
    </section>
  );
}
