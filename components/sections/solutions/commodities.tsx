"use client";

import { FadeIn } from "@/components/ui/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { motion } from "framer-motion";

const TickerItem = ({ symbol, name, price, change, isUp }: { symbol: string, name: string, price: string, change: string, isUp: boolean }) => (
    <div className="flex items-center gap-3 px-6 py-3 border-r border-gray-100 dark:border-dark-700 min-w-[200px]">
        <div className={`p-2 rounded-full ${isUp ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
            {isUp ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
        </div>
        <div>
            <div className="flex items-baseline gap-2">
                <span className="font-bold text-dark-900 dark:text-white">{symbol}</span>
                <span className="text-xs text-gray-500">{name}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
                <span className="font-mono text-gray-700 dark:text-gray-300">{price}</span>
                <span className={`text-xs ${isUp ? 'text-green-500' : 'text-red-500'}`}>{change}</span>
            </div>
        </div>
    </div>
);

const StructuringAnimation = () => (
    <div className="relative w-full h-40 bg-gray-50 dark:bg-dark-900/50 rounded-xl overflow-hidden border border-gray-100 dark:border-dark-700 mb-6 group-hover:border-primary-500/30 transition-colors">
        <div className="absolute inset-0 flex items-center justify-center">
            {/* Central Hub */}
            <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/20 z-10"
            >
                <div className="w-6 h-6 border-2 border-white rounded-md" />
            </motion.div>
            
            {/* Orbiting Nodes */}
            {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: -i * 2 }}
                    className="absolute w-full h-full flex items-center justify-center"
                >
                    <motion.div 
                        className="w-3 h-3 bg-gray-400 dark:bg-gray-600 rounded-full"
                        style={{ transform: `translateX(60px)` }}
                    />
                </motion.div>
            ))}
            
            {/* Connecting Lines (Abstract) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                <circle cx="50%" cy="50%" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-gray-400 dark:text-gray-600" />
            </svg>
        </div>
    </div>
);

const InsightAnimation = () => (
    <div className="relative w-full h-40 bg-gray-50 dark:bg-dark-900/50 rounded-xl overflow-hidden border border-gray-100 dark:border-dark-700 mb-6 group-hover:border-primary-500/30 transition-colors flex items-end px-4 pb-4 gap-1">
        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((height, i) => (
            <motion.div
                key={i}
                initial={{ height: "10%" }}
                animate={{ height: [`${height}%`, `${height - 20}%`, `${height}%`] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.1, ease: "easeInOut" }}
                className={`flex-1 rounded-t-sm ${i > 6 ? 'bg-primary-500' : 'bg-gray-300 dark:bg-dark-600'}`}
            />
        ))}
        {/* Scanning Line */}
        <motion.div 
            animate={{ left: ["0%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 bottom-0 w-px bg-primary-500/50 shadow-[0_0_10px_rgba(var(--primary-500),0.5)]"
        />
    </div>
);

const HedgingAnimation = () => (
    <div className="relative w-full h-40 bg-gray-50 dark:bg-dark-900/50 rounded-xl overflow-hidden border border-gray-100 dark:border-dark-700 mb-6 group-hover:border-primary-500/30 transition-colors flex items-center justify-center">
        {/* Volatile Line */}
        <svg className="absolute inset-0 w-full h-full p-4 overflow-visible">
            <motion.path
                d="M0,80 Q20,40 40,80 T80,80 T120,80 T160,80 T200,80 T240,80 T280,80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-gray-300 dark:text-dark-600 opacity-50"
            />
            <motion.path
                d="M0,80 Q20,20 40,100 T80,40 T120,120 T160,60 T200,100 T240,40 T280,80"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-red-400/30"
                animate={{ d: [
                    "M0,80 Q20,20 40,100 T80,40 T120,120 T160,60 T200,100 T240,40 T280,80",
                    "M0,80 Q20,100 40,60 T80,120 T120,40 T160,100 T200,60 T240,120 T280,80",
                    "M0,80 Q20,20 40,100 T80,40 T120,120 T160,60 T200,100 T240,40 T280,80"
                ] }}
                transition={{ duration: 5, repeat: Infinity }}
            />
        </svg>
        
        {/* Shield / Safe Zone */}
        <div className="absolute inset-x-4 h-16 bg-green-500/10 border-y border-green-500/30 flex items-center justify-center backdrop-blur-[1px]">
            <span className="text-xs font-bold text-green-600 dark:text-green-400 uppercase tracking-widest bg-white/50 dark:bg-dark-900/50 px-2 py-1 rounded">Hedged Range</span>
        </div>
        
        {/* Stable Line */}
        <svg className="absolute inset-0 w-full h-full p-4 overflow-visible">
             <motion.path
                d="M0,80 Q20,70 40,90 T80,80 T120,85 T160,75 T200,80 T240,82 T280,80"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="text-primary-500"
            />
        </svg>
    </div>
);

export const Commodities = () => {
  return (
    <section className="py-20 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-dark-800 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              Commodities
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Navigate the complexities of global commodity markets with expert guidance. 
              We provide the insight and infrastructure to manage physical and paper-based exposure.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            <FadeIn delay={0.1} className="group bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-100 dark:border-dark-700 hover:border-primary-500/20 transition-all duration-300">
                <StructuringAnimation />
                <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">Structuring</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Tailored solutions for supply chain finance and trade flows, connecting producers to global markets.</p>
            </FadeIn>
            
            <FadeIn delay={0.2} className="group bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-100 dark:border-dark-700 hover:border-primary-500/20 transition-all duration-300">
                <InsightAnimation />
                <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">Market Insight</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Real-time intelligence on price movements and market trends to inform your trading decisions.</p>
            </FadeIn>
            
            <FadeIn delay={0.3} className="group bg-white dark:bg-dark-800 p-6 rounded-2xl border border-gray-100 dark:border-dark-700 hover:border-primary-500/20 transition-all duration-300">
                <HedgingAnimation />
                <h3 className="font-bold text-xl text-dark-900 dark:text-white mb-3 group-hover:text-primary-500 transition-colors">Hedging</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">Advanced strategies to mitigate volatility and protect profit margins against market fluctuations.</p>
            </FadeIn>
        </div>

        {/* Ticker Tape */}
        <FadeIn delay={0.4} className="mb-16 relative">
            <div className="w-full overflow-hidden flex border-y border-gray-100 dark:border-dark-800 bg-white/50 dark:bg-dark-900/50 backdrop-blur-sm relative">
                {/* Fade Gradients */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-dark-900 to-transparent z-10" />
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-dark-900 to-transparent z-10" />
                
                <motion.div 
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex whitespace-nowrap"
                >
                    {[...Array(2)].map((_, i) => (
                        <div key={i} className="flex">
                            <TickerItem symbol="XAU/USD" name="Gold" price="2,048.50" change="+0.45%" isUp={true} />
                            <TickerItem symbol="WTI" name="Crude Oil" price="72.45" change="-1.20%" isUp={false} />
                            <TickerItem symbol="HG" name="Copper" price="3.85" change="+0.15%" isUp={true} />
                            <TickerItem symbol="ZW" name="Wheat" price="598.25" change="-0.85%" isUp={false} />
                            <TickerItem symbol="NG" name="Natural Gas" price="2.85" change="+2.10%" isUp={true} />
                            <TickerItem symbol="XAG/USD" name="Silver" price="23.15" change="+0.30%" isUp={true} />
                        </div>
                    ))}
                </motion.div>
            </div>
        </FadeIn>
      </div>
    </section>
  );
};
