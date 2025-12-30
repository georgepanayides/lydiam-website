"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { CTAGraphic } from "@/components/graphics/cta-graphic-playful";

export const CTA = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-white dark:bg-dark-900">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <FadeIn className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0 order-2 lg:order-1">
            <h2 className="font-organetto text-5xl md:text-6xl lg:text-7xl font-bold text-dark-900 dark:text-white mb-8 leading-[1.1] tracking-tight">
              Ready to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Upgrade?
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              Join the financial operating system built for the future. 
              Onboard in minutes, operate globally forever.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button variant="gradient" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full shadow-xl shadow-primary-500/20 hover:shadow-primary-500/30 transition-all duration-300">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/solutions" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-lg rounded-full border-2">
                  View Solutions
                </Button>
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-sm font-medium text-gray-500">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span>Instant Onboarding</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-75" />
                    <span>24/7 Support</span>
                </div>
            </div>
          </FadeIn>

          {/* Graphic */}
          <FadeIn delay={0.2} className="order-1 lg:order-2 relative translate-y-12 lg:translate-y-24">
             <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/10 to-transparent rounded-full blur-3xl" />
             <CTAGraphic />
          </FadeIn>

        </div>
      </div>
    </section>
  );
};
