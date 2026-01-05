"use client";

import { FadeIn } from "@/components/ui/motion";
import { Globe, ArrowRightLeft, ShieldCheck } from "lucide-react";
import { FXTreasuryGraphic } from "@/components/graphics/fx-treasury-graphic";

export const FXTreasury = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6 text-primary-500" />,
      title: "Named Virtual IBANs",
      description: "Accounts in your client's own name for seamless reconciliation and professional presence."
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 text-primary-500" />,
      title: "Multi-Currency Support",
      description: "Core capabilities in GBP, EUR, and USD, with access to exotics on request."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary-500" />,
      title: "Risk Management",
      description: "Comprehensive hedging strategies to protect your bottom line from currency fluctuations."
    }
  ];

  return (
    <section className="py-24 lg:py-32 bg-gray-50 dark:bg-dark-800/50">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-300/20 rounded-3xl blur-xl opacity-50" />
              <FXTreasuryGraphic />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              FX, Treasury & <br />
              <span className="text-primary-500">Named Accounts</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Take control of your global cash flow with institutional-grade infrastructure. 
              We provide the rails, the rates, and the risk management you need to scale.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-900 dark:text-white mb-1">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

