"use client";

import { FadeIn } from "@/components/ui/motion";
import { ExecutionDetailGraphic } from "@/components/graphics/platform/execution-detail";
import { Globe2, Zap, ShieldCheck } from "lucide-react";

export const GlobalExecution = () => {
  return (
    <section className="py-32 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn className="order-2 lg:order-1 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 blur-2xl rounded-full opacity-50" />
            <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
                <ExecutionDetailGraphic />
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                </span>
                Global Payments
            </div>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              Move Money <br />
              <span className="text-primary-500">Effortlessly</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Access local payment rails for speed and cost-efficiency, or use SWIFT for global reach. Our platform gives you the power to execute payments instantly, anywhere.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                        <Globe2 className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-dark-900 dark:text-white">Global Reach</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">180+ countries supported.</p>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0">
                        <Zap className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                        <h4 className="font-bold text-dark-900 dark:text-white">Instant Settlement</h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Real-time payment rails.</p>
                    </div>
                </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
