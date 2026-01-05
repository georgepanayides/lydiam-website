"use client";

import { FadeIn, StaggerContainer } from "@/components/ui/motion";
import { ShieldCheck, Lock, FileCheck, Eye, Server, Key } from "lucide-react";

const complianceFeatures = [
  {
    icon: FileCheck,
    title: "FCA-Authorised Providers",
    description: "Partnering with FCA-authorised payment providers to ensure regulatory alignment.",
  },
  {
    icon: Eye,
    title: "AML & KYC Procedures",
    description: " rigorous checks that protect the ecosystem without causing unnecessary delays.",
  },
  {
    icon: Landmark,
    title: "EU-Registered",
    description: "Fully registered for virtual currency activities within the European Union.",
  },
];

const safeguardFeatures = [
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description: "Data and payment flows are encrypted at every stage of the journey.",
  },
  {
    icon: Key,
    title: "Layered Access Controls",
    description: "Strict permissions to prevent unauthorized interference with your assets.",
  },
  {
    icon: Server,
    title: "Real-Time Risk Assessment",
    description: "Advanced systems that flag potential fraud before it happens.",
  },
];

import { Landmark } from "lucide-react";

export const TrustSecurity = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
            Your Trust is <span className="text-primary-500">Earned</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Through protection, transparency, and control. We build infrastructure you can rely on.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Compliance Section */}
          <StaggerContainer>
            <h3 className="font-organetto text-2xl font-bold text-dark-900 dark:text-white mb-8 flex items-center gap-3">
              <ShieldCheck className="w-8 h-8 text-primary-500" />
              Compliance-Backed
            </h3>
            <div className="space-y-8">
              {complianceFeatures.map((feature, index) => (
                <FadeIn key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-dark-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </StaggerContainer>

          {/* Safeguards Section */}
          <StaggerContainer delay={0.2}>
            <h3 className="font-organetto text-2xl font-bold text-dark-900 dark:text-white mb-8 flex items-center gap-3">
              <Lock className="w-8 h-8 text-primary-500" />
              Built-In Safeguards
            </h3>
            <div className="space-y-8">
              {safeguardFeatures.map((feature, index) => (
                <FadeIn key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-dark-900 dark:text-white mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
};
