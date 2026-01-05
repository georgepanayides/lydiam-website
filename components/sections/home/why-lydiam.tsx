"use client";

import Image from "next/image";
import { Check, X, Minus } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

export const WhyLydiam = () => {
  type FeatureStatus = {
    status: boolean | "partial";
    label?: string;
  };

  const features: {
    name: string;
    lydiam: FeatureStatus;
    banks: FeatureStatus;
    brokers: FeatureStatus;
  }[] = [
    {
      name: "Crypto On-Ramping",
      lydiam: { status: true },
      banks: { status: false },
      brokers: { status: false },
    },
    {
      name: "Off-Ramping to Fiat",
      lydiam: { status: true },
      banks: { status: false },
      brokers: { status: "partial", label: "Some" },
    },
    {
      name: "Privacy & Security",
      lydiam: { status: true, label: "Trusted solutions" },
      banks: { status: false, label: "Accounts can be frozen" },
      brokers: { status: "partial", label: "Limited" },
    },
    {
      name: "24/7 Trading & Swaps",
      lydiam: { status: true },
      banks: { status: false, label: "Weekdays only" },
      brokers: { status: "partial", label: "Some" },
    },
    {
      name: "Regulated & Flexible",
      lydiam: { status: true },
      banks: { status: true },
      brokers: { status: true },
    },
    {
      name: "Competitive Rates",
      lydiam: { status: true },
      banks: { status: false },
      brokers: { status: false, label: "High Spreads" },
    },
    {
      name: "Named Bank Accounts",
      lydiam: { status: true, label: "Future-proof compliance" },
      banks: { status: false },
      brokers: { status: false },
    },
    {
      name: "Card Payments",
      lydiam: { status: true, label: "Low fees" },
      banks: { status: false },
      brokers: { status: false },
    },
  ];

  const StatusIcon = ({ status, label, isLydiam }: { status: boolean | "partial"; label?: string, isLydiam?: boolean }) => {
    return (
      <div className="flex flex-col items-center gap-1">
        {status === true && (
          <div className={cn(
            "w-8 h-8 rounded-full flex items-center justify-center",
            isLydiam ? "bg-primary-500 shadow-lg shadow-primary-500/30" : "bg-green-100 dark:bg-green-900/30"
          )}>
            {isLydiam ? (
               <Image 
                 src="/assets/logos/icons/Logo_Star Cool White.svg" 
                 alt="Check" 
                 width={16} 
                 height={16} 
                 className="w-4 h-4"
               />
            ) : (
              <Check className="w-5 h-5 text-green-600 dark:text-green-400" />
            )}
          </div>
        )}
        {status === false && (
          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <X className="w-4 h-4 text-gray-400" />
          </div>
        )}
        {status === "partial" && (
          <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <Minus className="w-4 h-4 text-gray-400" />
          </div>
        )}
        {label && (
          <span className="text-[10px] md:text-xs font-medium text-gray-500 dark:text-gray-400 text-center max-w-[100px] leading-tight mt-1">
            {label}
          </span>
        )}
      </div>
    );
  };

  return (
    <section className="relative py-24 bg-primary-50/50 dark:bg-dark-900 overflow-hidden">
      {/* Background Elements - Smaller Mask */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_0%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              Why Clients Choose <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Lydiam
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how we stack up against traditional banking and brokers.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="relative max-w-6xl mx-auto">
            
            {/* Top Callouts */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                    { title: "Banks provide accounts", subtitle: "Lydiam provides coordination" },
                    { title: "Fintechs provide tools", subtitle: "Lydiam provides solutions" },
                    { title: "Brokers execute trades", subtitle: "Lydiam supports the full lifecycle" }
                ].map((item, i) => (
                    <div key={i} className="bg-primary-50/50 dark:bg-primary-900/10 border border-primary-100 dark:border-primary-800/30 rounded-2xl p-4 text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
                            <span className="font-bold text-dark-900 dark:text-white text-sm">{item.title}</span>
                        </div>
                        <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">{item.subtitle}</p>
                    </div>
                ))}
            </div>

            {/* Table Container */}
            <div className="bg-white dark:bg-dark-800 rounded-l-3xl rounded-r-none md:rounded-3xl shadow-xl border border-r-0 md:border-r border-gray-200 dark:border-dark-700 overflow-hidden overflow-x-auto -mr-4 md:mr-0">
              
              {/* Header */}
              <div className="grid grid-cols-4 p-6 border-b border-gray-100 dark:border-dark-700 bg-gray-50/50 dark:bg-dark-800/50 min-w-[600px]">
                <div className="col-span-1 font-bold text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wider flex items-end pb-2">
                  
                </div>
                <div className="col-span-1 flex flex-col items-center justify-end gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/20">
                    <Image 
                        src="/assets/logos/icons/Logo-09.svg" 
                        alt="Lydiam" 
                        width={24} 
                        height={24} 
                        className="w-6 h-6 brightness-0 invert"
                    />
                  </div>
                  <span className="font-organetto font-bold text-primary-600 dark:text-primary-400 text-lg tracking-widest">LYDIAM</span>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-end gap-2 text-center pb-1">
                  <span className="font-organetto font-bold text-gray-500 dark:text-gray-400 text-xs md:text-sm uppercase tracking-wide">Traditional<br/>Banks</span>
                </div>
                <div className="col-span-1 flex flex-col items-center justify-end gap-2 text-center pb-1">
                  <span className="font-organetto font-bold text-gray-500 dark:text-gray-400 text-xs md:text-sm uppercase tracking-wide">Traditional<br/>FX Brokers</span>
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-gray-100 dark:divide-dark-700 min-w-[600px]">
                {features.map((feature, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "grid grid-cols-4 p-4 md:p-6 items-center transition-colors hover:bg-gray-50/50 dark:hover:bg-dark-700/30",
                      "relative"
                    )}
                  >
                    {/* Lydiam Column Highlight Background */}
                    <div className="absolute top-0 bottom-0 left-[25%] right-[50%] bg-primary-50/30 dark:bg-primary-900/5 pointer-events-none border-x border-primary-100/50 dark:border-primary-900/10" />

                    <div className="col-span-1 text-sm md:text-base font-bold text-dark-900 dark:text-gray-200 relative z-10 pr-2">
                      {feature.name}
                    </div>
                    <div className="col-span-1 flex justify-center relative z-10">
                      <StatusIcon {...feature.lydiam} isLydiam={true} />
                    </div>
                    <div className="col-span-1 flex justify-center relative z-10">
                      <StatusIcon {...feature.banks} />
                    </div>
                    <div className="col-span-1 flex justify-center relative z-10">
                      <StatusIcon {...feature.brokers} />
                    </div>
                  </div>
                ))}
              </div>

            </div>
            
            <div className="mt-8 text-center max-w-3xl mx-auto">
                <p className="text-sm md:text-base font-medium text-dark-900 dark:text-white">
                    In a world of fragmented providers and disconnected tools, Lydiam offers a single, structured alternative - built for clients who operate globally and think long term.
                </p>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
};