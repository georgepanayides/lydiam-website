"use client";

import { FadeIn } from "@/components/ui/motion";
import { TreasuryDetailGraphic } from "@/components/graphics/platform/treasury-detail";
import { CheckCircle2 } from "lucide-react";

export const UnifiedTreasury = () => {
  return (
    <section className="py-32 bg-gray-50 dark:bg-dark-800/30 border-y border-gray-100 dark:border-dark-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Unified Treasury
            </div>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              Named Accounts in <br />
              <span className="text-primary-500">Your Own Name</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Replace multiple banking relationships with one. Lydiam provides you with named virtual IBANs for GBP, EUR, and USD, giving you full control over your treasury operations.
            </p>
            
            <ul className="space-y-4">
                {[
                    "Named IBANs for GBP, EUR, USD",
                    "Multi-currency balances",
                    "Consolidated treasury view"
                ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary-500 shrink-0" />
                        <span className="text-dark-900 dark:text-white font-medium">{item}</span>
                    </li>
                ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 blur-2xl rounded-full opacity-50" />
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                <TreasuryDetailGraphic />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
