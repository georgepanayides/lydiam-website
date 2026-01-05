"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Lydiam has completely transformed how we handle cross-border transactions. The speed, transparency, and ease of use are unmatched—what used to take days now takes minutes.",
      author: "Daniel R.",
      role: "Corporate Client"
    },
    {
      quote: "The Lydiam platform gave us full control and clarity over every transaction. The audit trail is clean, and customer support is responsive and knowledgeable.",
      author: "Tomás E.",
      role: "Finance Director"
    },
    {
      quote: "We've tested multiple fiat on/off-ramp providers, and Lydiam stands out for its reliability and security. Their system is robust and built for serious institutional players.",
      author: "Amir D.",
      role: "Crypto Fund Manager"
    },
    {
      quote: "Lydiam bridges the gap between crypto and traditional finance better than any platform we've used. It's intuitive, compliant, and built with global scale in mind.",
      author: "Rebecca Y.",
      role: "Fintech Founder"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              A Billion Reasons <br />
              <span className="text-primary-500">to Trust Us</span>
            </h2>
            <p className="text-xl font-medium text-dark-900 dark:text-white mb-4">
              Growth you can count on.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              In FY24 alone, Lydiam enabled seamless, secure financial operations for thousands of clients — from growing startups to established global players.
            </p>
          </FadeIn>
        </div>

        <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((item, index) => (
            <StaggerItem key={index} className="bg-gray-50 dark:bg-dark-800 p-8 rounded-3xl relative">
              <Quote className="w-10 h-10 text-primary-200 dark:text-primary-900/50 absolute top-8 left-8" />
              <div className="relative z-10 pt-6">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-6 leading-relaxed">
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold text-sm">
                    {item.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-dark-900 dark:text-white">{item.author}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{item.role}</p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
