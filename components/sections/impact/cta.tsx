"use client";

import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const ImpactCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 dark:from-dark-900 dark:to-dark-800" />
      
      {/* Abstract Shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6 leading-tight">
              Join Thousands Already <br />
              <span className="text-primary-500">Moving Forward</span> with Lydiam
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
              The future of finance is here. Whether you&apos;re an institution looking for large-scale solutions or an individual exploring crypto for the first time, Lydiam gives you the tools to move with confidence. It&apos;s time to bridge the gap between what was and what could be.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-lg px-8 h-14">
                  Own Your Financial Future
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
