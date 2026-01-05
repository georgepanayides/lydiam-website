"use client";

import { FadeIn } from "@/components/ui/motion";
import { MobileMockupGraphic } from "@/components/graphics/platform/mobile-mockup";

export const MobileApp = () => {
  return (
    <section className="pt-32 pb-0 bg-white dark:bg-dark-900 relative overflow-hidden min-h-[900px] flex flex-col items-center">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-500/5 dark:bg-primary-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <FadeIn className="max-w-3xl mx-auto mb-16">
            <h2 className="font-organetto text-3xl md:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              Power in <br />
              <span className="text-primary-500">Your Pocket</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Manage your global financial operations from anywhere. Our mobile app brings the full power of the Lydiam platform to your fingertips.
            </p>
            <div className="inline-block px-4 py-2 rounded-lg bg-gray-100 dark:bg-dark-800 border border-gray-200 dark:border-dark-700 text-gray-500 dark:text-gray-400 text-sm font-medium">
                Currently in Development
            </div>
        </FadeIn>

        <FadeIn delay={0.2} className="relative z-20 w-full flex justify-center">
            {/* Clipping Container */}
            <div className="h-[400px] overflow-hidden w-full flex justify-center items-start pt-2">
                <div className="relative transform hover:scale-101 transition-transform duration-500">
                    <MobileMockupGraphic />
                </div>
            </div>
        </FadeIn>
      </div>
      
      {/* Gradient Fade at Bottom to blend/cut off */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white dark:from-dark-900 to-transparent z-30 pointer-events-none" />
    </section>
  );
};
