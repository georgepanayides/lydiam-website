"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeftRight, Wallet, Globe, LineChart } from "lucide-react";
import { FXGraphic, CryptoGraphic, PaymentsGraphic, AdvisoryGraphic } from "@/components/graphics/intro-graphics";

const features = [
  {
    id: "fx",
    title: "Global FX",
    description: "Access 30+ currencies with spot and forward capabilities. Real-time execution and transparent pricing.",
    icon: ArrowLeftRight,
    graphic: FXGraphic,
  },
  {
    id: "crypto",
    title: "Crypto Assets",
    description: "Institutional-grade custody and trading for digital assets. Fully regulated and secure.",
    icon: Wallet,
    graphic: CryptoGraphic,
  },
  {
    id: "payments",
    title: "Payments",
    description: "Global payment rails including SWIFT, SEPA, and Faster Payments. Move money instantly.",
    icon: Globe,
    graphic: PaymentsGraphic,
  },
  {
    id: "advisory",
    title: "Advisory",
    description: "Expert guidance on hedging strategies, market insights, and portfolio management.",
    icon: LineChart,
    graphic: AdvisoryGraphic,
  }
];

export function IntroSlider() {
  const [activeId, setActiveId] = useState(features[0].id);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const interval = setInterval(() => {
      const currentIndex = features.findIndex(f => f.id === activeId);
      const nextIndex = (currentIndex + 1) % features.length;
      setActiveId(features[nextIndex].id);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeId, autoPlay]);

  const activeFeature = features.find(f => f.id === activeId) || features[0];

  return (
    <div className="flex flex-col gap-8 max-w-5xl mx-auto">
      {/* Top Navigation */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {features.map((feature, idx) => (
          <button
            key={feature.id}
            onClick={() => {
              setActiveId(feature.id);
              setAutoPlay(false);
            }}
            className={cn(
              "relative flex flex-col items-center p-4 rounded-xl transition-all duration-300 cursor-pointer",
              activeId === feature.id 
                ? "text-dark-900 dark:text-white" 
                : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            )}
          >
            <span className="text-xs font-medium mb-2 opacity-50">0{idx + 1}</span>
            <span className="text-sm font-bold tracking-wide uppercase">{feature.title}</span>
            
            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-100 dark:bg-dark-800 rounded-full overflow-hidden mt-4">
              {activeId === feature.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="h-full bg-primary-500"
                  initial={{ width: "0%" }}
                  animate={{ width: autoPlay ? "100%" : "100%" }}
                  transition={{ duration: autoPlay ? 5 : 0.3, ease: "linear" }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Graphic Preview */}
      <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-3xl border border-green-100/50 dark:border-green-900/20 bg-green-50/30 dark:bg-green-900/5 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">

         <AnimatePresence mode="wait">
           <motion.div
             key={activeFeature.id}
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -20 }}
             transition={{ duration: 0.4 }}
             className="w-full h-full"
           >
             <activeFeature.graphic />
           </motion.div>
         </AnimatePresence>
      </div>
    </div>
  );
}
