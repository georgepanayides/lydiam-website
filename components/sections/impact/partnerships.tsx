"use client";

import { FadeIn } from "@/components/ui/motion";
import { Building, Briefcase, Landmark, User } from "lucide-react";
import Image from "next/image";

export const Partnerships = () => {
  const partners = [
    {
      icon: Landmark,
      label: "Financial Institutions",
      desc: "Banks & Liquidity Providers"
    },
    {
      icon: Building,
      label: "Corporates",
      desc: "Global Enterprises"
    },
    {
      icon: Briefcase,
      label: "Fintechs",
      desc: "Payment Processors & Neobanks"
    },
    {
      icon: User,
      label: "HNWIs",
      desc: "Private Wealth Management"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative">
                <h2 className="font-organetto text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-8 leading-tight relative z-10">
                Institutions That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                    Believe in Us
                </span>
                </h2>
            </div>
            <p className="text-xl font-medium text-dark-900 dark:text-white mb-6 border-l-4 border-primary-500 pl-6">
              Partnerships that power progress.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg">
              We&apos;re proud to support a growing network of trusted financial institutions, corporates, fintechs, and HNWIs. Every partnership is built on aligned vision, execution, and results.
            </p>
            
            <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-4">
                    {[1,2,3,4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-2 border-white dark:border-dark-900 bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-xs font-bold text-gray-500">
                            Logo
                        </div>
                    ))}
                </div>
                <div className="text-sm font-bold text-primary-600 dark:text-primary-400">
                    +75 Partners Globally
                </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="grid sm:grid-cols-2 gap-5">
            {partners.map((item, index) => (
                <div key={index} className="group relative bg-gray-50 dark:bg-dark-800/50 p-8 rounded-3xl border border-gray-100 dark:border-dark-700 hover:border-primary-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1 overflow-hidden">
                <div className="absolute -right-8 -top-8 w-32 h-32 opacity-5 animate-spin-slow pointer-events-none select-none">
                    <Image 
                        src="/assets/logos/icons/Logo_Star Dark Green.svg" 
                        alt="Star" 
                        fill
                        className="object-contain"
                    />
                </div>                    
                    <div className="relative z-10">
                        <div className="w-14 h-14 bg-white dark:bg-dark-700 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300 group-hover:shadow-primary-500/20">
                            <item.icon className="w-7 h-7 text-primary-500" />
                        </div>
                        <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                            {item.label}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
