"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, Globe, Shield, ArrowRightLeft, TrendingUp } from "lucide-react";

export function CTAGraphic() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
      
      {/* Subtle Professional Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gray-200/50 dark:bg-gray-900/20 rounded-full blur-[120px]" />

      {/* Main Composition */}
      <motion.div 
        className="relative w-[380px] h-[500px] md:w-[450px] md:h-[600px]"
        initial={{ rotateX: 20, rotateY: -20, rotateZ: 0 }}
        animate={{ 
          rotateX: [20, 15, 20], 
          rotateY: [-20, -15, -20],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* 1. The "Platform" - Abstract Financial Data Layer */}
        <motion.div
          className="absolute inset-0 bg-white/40 dark:bg-dark-900/40 backdrop-blur-md rounded-xl border border-white/20 dark:border-white/5 shadow-2xl overflow-hidden"
          style={{ transform: "translateZ(-40px) scale(0.9)" }}
        >
            {/* Grid Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
            
            {/* Abstract Data Columns */}
            <div className="p-8 flex justify-between h-full opacity-30 grayscale">
                <div className="w-1/4 h-full space-y-4">
                    <div className="h-2 bg-dark-900/20 rounded w-full" />
                    <div className="h-2 bg-dark-900/10 rounded w-2/3" />
                    <div className="h-32 bg-dark-900/5 rounded w-full mt-8" />
                </div>
                <div className="w-1/4 h-full space-y-4 pt-12">
                    <div className="h-2 bg-dark-900/20 rounded w-full" />
                    <div className="h-2 bg-dark-900/10 rounded w-3/4" />
                    <div className="h-20 bg-dark-900/5 rounded w-full mt-8" />
                </div>
                <div className="w-1/4 h-full space-y-4 pt-4">
                    <div className="h-2 bg-dark-900/20 rounded w-full" />
                    <div className="h-2 bg-dark-900/10 rounded w-1/2" />
                    <div className="h-40 bg-dark-900/5 rounded w-full mt-8" />
                </div>
            </div>
        </motion.div>

        {/* 2. The Main Interface - Sleek Dashboard */}
        <motion.div
          className="absolute inset-0 bg-white dark:bg-dark-900 rounded-xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-dark-700 overflow-hidden"
          style={{ transform: "translateZ(0px)" }}
        >
            {/* Header */}
            <div className="h-16 border-b border-gray-100 dark:border-dark-800 flex items-center justify-between px-6 bg-gray-50/50 dark:bg-dark-800/50">
                <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                </div>
                <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">Lydiam Terminal v2.0</div>
            </div>

            {/* Content */}
            <div className="p-8 space-y-8">
                {/* Balance Row */}
                <div className="flex justify-between items-end">
                    <div>
                        <div className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-2">Global Liquidity</div>
                        <div className="text-4xl font-bold text-dark-900 dark:text-white tracking-tight">
                            $2,840,500<span className="text-gray-300 dark:text-gray-600">.00</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1.5 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-xs font-bold">+12.4%</span>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-12 bg-dark-900 dark:bg-white rounded-lg flex items-center justify-center gap-2 text-white dark:text-dark-900 text-sm font-medium shadow-lg shadow-dark-900/10">
                        <ArrowRightLeft className="w-4 h-4" />
                        <span>Exchange</span>
                    </div>
                    <div className="h-12 border border-gray-200 dark:border-dark-700 rounded-lg flex items-center justify-center gap-2 text-dark-900 dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-dark-800 transition-colors">
                        <Shield className="w-4 h-4" />
                        <span>Vault</span>
                    </div>
                </div>

                {/* List */}
                <div className="space-y-4 pt-4">
                    <div className="text-xs text-gray-400 font-medium uppercase tracking-wider">Recent Operations</div>
                    {[
                        { label: "US Treasury Bond", code: "US10Y", val: "+4.2%", up: true },
                        { label: "Euro / USD", code: "EURUSD", val: "-0.1%", up: false },
                        { label: "Bitcoin", code: "BTC", val: "+1.8%", up: true },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 hover:bg-gray-50 dark:hover:bg-dark-800 rounded-lg transition-colors border border-transparent hover:border-gray-100 dark:hover:border-dark-700">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-gray-100 dark:bg-dark-700 flex items-center justify-center text-[10px] font-bold text-gray-500">
                                    {item.code.substring(0, 2)}
                                </div>
                                <div>
                                    <div className="text-sm font-semibold text-dark-900 dark:text-white">{item.label}</div>
                                    <div className="text-[10px] text-gray-400 font-mono">{item.code}</div>
                                </div>
                            </div>
                            <div className={`text-xs font-bold ${item.up ? 'text-emerald-600' : 'text-red-500'}`}>
                                {item.val}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>

        {/* 3. The Premium Card - Floating in Front */}
        <motion.div
            className="absolute top-1/2 -right-12 -translate-y-1/2 w-[260px] h-[160px] md:w-[300px] md:h-[190px] rounded-xl shadow-2xl transform-gpu"
            style={{ transform: "translateZ(60px)" }}
            animate={{ 
                y: [-10, 10, -10],
                rotateX: [0, 5, 0],
                rotateY: [0, -5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Card Body */}
            <div className="absolute inset-0 bg-[#0a0a0a] rounded-xl overflow-hidden border border-white/10 shadow-2xl">
                {/* Texture */}
                <div className="absolute inset-0 bg-[url('/assets/noise.png')] opacity-20 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <Image 
                            src="/assets/logos/icons/Logo_Star Cool White.svg" 
                            alt="Lydiam" 
                            width={28} 
                            height={28} 
                            className="opacity-90"
                        />
                        <Wifi className="w-5 h-5 text-white/30 rotate-90" />
                    </div>
                    
                    <div className="space-y-4">
                        <div className="w-10 h-7 bg-gradient-to-br from-yellow-100/20 to-yellow-600/20 rounded border border-yellow-500/30" />
                        <div className="flex justify-between items-end">
                            <div className="space-y-0.5">
                                <p className="text-white/40 text-[8px] font-mono tracking-[0.2em] uppercase">Business Elite</p>
                                <p className="text-white text-xs font-medium tracking-[0.15em] uppercase">Lydiam</p>
                            </div>
                            <div className="text-white/60 font-mono text-[10px] tracking-widest">VISA</div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Card Glow/Reflection */}
            <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent w-[200%] pointer-events-none"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
            />
        </motion.div>

      </motion.div>
    </div>
  );
}
