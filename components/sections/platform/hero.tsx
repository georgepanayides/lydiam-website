"use client";

import { FadeIn } from "@/components/ui/motion";
import { MasterDashboardGraphic } from "@/components/graphics/platform/master-dashboard";
import Image from "next/image";

export const PlatformHero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-dark-900 max-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Gradient Blob Background */}
      <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] opacity-20 dark:opacity-30 pointer-events-none">
        <div className="absolute inset-0 [mask-image:radial-gradient(closest-side,black,transparent)]">
            <Image 
                src="/assets/gradient-bg/Gradient.jpg" 
                alt="Gradient" 
                fill
                className="object-cover"
                priority
            />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <h1 className="font-organetto text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              One Platform. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Complete Control.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              A unified financial operating interface. Named Accounts, FX, Crypto, Payments, and Reporting—all in one place.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2} className="relative max-w-6xl mx-auto perspective-1000">
            <div className="transform transition-all duration-700 ease-out">
                <MasterDashboardGraphic />
            </div>
            {/* Reflection/Shadow */}
            <div className="absolute -bottom-12 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-dark-900 to-transparent z-20" />
        </FadeIn>
      </div>
    </section>
  );
};
