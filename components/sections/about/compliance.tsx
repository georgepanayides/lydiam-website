"use client";

import { FadeIn } from "@/components/ui/motion";
import { ShieldCheck, Lock, Scale, CheckCircle2 } from "lucide-react";

const standards = [
  {
    icon: ShieldCheck,
    title: "Governance",
    description: "Institutional-grade internal controls and oversight mechanisms ensuring integrity in every operation.",
    features: ["Board Oversight", "Internal Audit", "Risk Management"]
  },
  {
    icon: Scale,
    title: "Regulation",
    description: "Full compliance across multiple jurisdictions, navigating complex regulatory landscapes on your behalf.",
    features: ["Licensing", "KYC/AML", "Reporting"]
  },
  {
    icon: Lock,
    title: "Security",
    description: "Defense-in-depth architecture protecting your assets and data with state-of-the-art encryption.",
    features: ["Cold Storage", "Multi-Sig", "Encryption"]
  },
];

export const Compliance = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              Uncompromising <br />
              <span className="text-primary-500">Standards</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Security isn&apos;t a feature; it&apos;s our foundation. We operate with institutional-grade governance and strict regulatory adherence.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {standards.map((item, index) => (
            <FadeIn key={index} delay={index * 0.2} className="w-full">
              <div className="group relative bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 border border-gray-100 dark:border-dark-700 hover:border-primary-500/50 hover:shadow-lg hover:-translate-y-1 transition-colors transition-shadow transition-transform duration-300">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white dark:bg-dark-700 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-primary-500" />
                  </div>

                  <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-dark-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-primary-500 mr-2 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
