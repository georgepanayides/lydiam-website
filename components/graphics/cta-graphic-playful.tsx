"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Wifi, ArrowUpRight, Wallet, ShieldCheck, Globe, Battery, Signal } from "lucide-react";

export function CTAGraphic() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000">
      
      {/* Ambient Glows - Refined for Luxury */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-300/10 dark:bg-primary-900/10 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px] mix-blend-overlay" />
      
      {/* Floating Stars */}
      <motion.div
        className="absolute -top-10 right-0 md:right-10 z-20"
        initial={{ opacity: 0, y: 20, rotate: -10 }}
        animate={{ opacity: 1, y: [0, -15, 0], rotate: [-10, 0, -10] }}
        transition={{ 
            opacity: { duration: 1, delay: 0.5 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Image 
            src="assets/logos/icons/Logo_Star Dark Green.svg" 
            alt="Star" 
            width={64} 
            height={64} 
            className="w-12 h-12 md:w-16 md:h-16 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]"
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-0 md:-left-10 z-20"
        initial={{ opacity: 0, y: 20, rotate: 10 }}
        animate={{ opacity: 1, y: [0, 15, 0], rotate: [10, 20, 10] }}
        transition={{ 
            opacity: { duration: 1, delay: 0.8 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            rotate: { duration: 7, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <Image 
            src="assets/logos/icons/Logo_Star Dark Green.svg" 
            alt="Star" 
            width={48} 
            height={48} 
            className="w-8 h-8 md:w-12 md:h-12 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] opacity-80"
        />
      </motion.div>

      {/* Composition Container */}
      <motion.div 
        className="relative w-[350px] h-[650px] md:w-[400px] md:h-[750px]"
        initial={{ rotateX: 10, rotateY: -10, rotateZ: 5 }}
        animate={{ 
          rotateX: [10, 0, 10], 
          rotateY: [-10, -5, -10],
          rotateZ: [5, 2, 5]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >

        {/* 1. The App Interface (Back Layer) - Premium Glass & Detail */}
        <motion.div
          className="absolute inset-0 bg-white dark:bg-dark-900 rounded-[3rem] shadow-2xl border-[8px] border-gray-50 dark:border-dark-800 overflow-hidden"
          style={{ transform: "translateZ(-60px)" }}
        >
            {/* Status Bar */}
            <div className="h-12 px-8 flex justify-between items-center text-[10px] font-medium text-gray-400">
                <span>9:41</span>
                <div className="flex gap-2 items-center">
                    <Signal className="w-3 h-3" />
                    <Battery className="w-4 h-4" />
                </div>
            </div>

            {/* App Header */}
            <div className="px-8 pb-6 flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-dark-700 dark:to-dark-800 border border-white/10 shadow-inner" />
                    <div>
                        <div className="text-xs text-gray-400 font-medium">Welcome back</div>
                        <div className="text-sm font-bold text-dark-900 dark:text-white">Lydiam Treasury</div>
                    </div>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 dark:bg-dark-800 border border-gray-100 dark:border-dark-700 flex items-center justify-center shadow-sm">
                    <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                </div>
            </div>

            {/* Balance Card - Glassmorphism */}
            <div className="px-6 relative z-10">
                <div className="bg-gradient-to-b from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 dark:border-dark-700 space-y-6">
                    <div className="flex justify-between items-start">
                        <div>
                            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Total Liquidity</span>
                            <div className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mt-1 tracking-tight">
                                $2,840,500<span className="text-gray-300 dark:text-gray-600">.00</span>
                            </div>
                        </div>
                        <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-900/30">+12.4%</span>
                    </div>

                    {/* Mini Chart */}
                    <div className="h-16 w-full relative opacity-50">
                        <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                            <path d="M0 35 C 20 35, 20 10, 40 10 C 60 10, 60 25, 80 25 C 90 25, 90 5, 100 5" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-500" vectorEffect="non-scaling-stroke" />
                            <path d="M0 35 C 20 35, 20 10, 40 10 C 60 10, 60 25, 80 25 C 90 25, 90 5, 100 5 V 40 H 0 Z" fill="url(#gradient)" className="opacity-20" />
                            <defs>
                                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0%" stopColor="currentColor" className="text-primary-500" />
                                    <stop offset="100%" stopColor="transparent" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex-1 h-12 bg-dark-900 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-dark-900 text-sm font-semibold shadow-lg shadow-dark-900/10 cursor-pointer hover:scale-[1.02] transition-transform">Transfer</div>
                        <div className="flex-1 h-12 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-2xl flex items-center justify-center text-dark-900 dark:text-white text-sm font-semibold cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-600 transition-colors">Exchange</div>
                    </div>
                </div>
            </div>

            {/* Recent Activity List - Clean & Sharp */}
            <div className="p-8 space-y-6">
                <div className="flex justify-between items-center">
                    <div className="text-sm font-semibold text-dark-900 dark:text-white">Recent Transactions</div>
                    <div className="text-xs text-primary-600 font-medium cursor-pointer">View All</div>
                </div>
                {[
                    { name: "Apple Inc.", type: "Subscription", amount: "-$299.00", icon: "bg-gray-900" },
                    { name: "Stripe Payments", type: "Merchant", amount: "+$12,450.00", icon: "bg-indigo-500", positive: true },
                    { name: "AWS Cloud", type: "Infrastructure", amount: "-$1,240.50", icon: "bg-orange-500" }
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 group cursor-pointer">
                        <div className={`w-10 h-10 rounded-xl ${item.icon} flex items-center justify-center shadow-md group-hover:scale-105 transition-transform`}>
                            <ArrowUpRight className={`w-5 h-5 text-white ${item.positive ? 'rotate-180' : ''}`} />
                        </div>
                        <div className="flex-1">
                            <div className="text-sm font-semibold text-dark-900 dark:text-white">{item.name}</div>
                            <div className="text-xs text-gray-400">{item.type}</div>
                        </div>
                        <div className={`text-sm font-bold ${item.positive ? 'text-emerald-600' : 'text-dark-900 dark:text-white'}`}>
                            {item.amount}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>

        {/* 2. The Metal Card (Middle Layer) - Ultra Premium Detail */}
        <motion.div
            className="absolute top-48 -right-16 w-[300px] h-[190px] md:w-[340px] md:h-[215px] rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] transform-gpu"
            style={{ transform: "translateZ(60px)" }}
            animate={{ y: [-15, 15, -15], rotateX: [0, 5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
            {/* Card Body */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#111] rounded-2xl overflow-hidden border border-white/10">
                {/* Brushed Metal Texture */}
                <div className="absolute inset-0 opacity-40 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:4px_4px]" />
                
                {/* Dynamic Shine Effect */}
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent w-[200%]"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "linear" }}
                />
                
                <div className="relative z-10 p-7 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <Image 
                            src="/assets/logos/icons/Logo_Star Cool White.svg" 
                            alt="Lydiam" 
                            width={36} 
                            height={36} 
                            className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
                        />
                        <Wifi className="w-6 h-6 text-white/40 rotate-90" />
                    </div>
                    
                    <div className="space-y-5">
                        {/* EMV Chip - Realistic */}
                        <div className="w-11 h-8 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 rounded-md border border-yellow-600/50 relative overflow-hidden shadow-inner">
                            <div className="absolute inset-0 border border-black/10 rounded-md" />
                            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-black/20" />
                            <div className="absolute left-1/3 top-0 w-[1px] h-full bg-black/20" />
                            <div className="absolute right-1/3 top-0 w-[1px] h-full bg-black/20" />
                        </div>

                        <div className="flex justify-between items-end">
                            <div className="space-y-1">
                                <p className="text-white/40 text-[10px] font-mono tracking-[0.2em] uppercase">Card Holder</p>
                                <p className="text-white text-sm font-medium tracking-[0.15em] uppercase drop-shadow-md">Lydiam Business</p>
                            </div>
                            <div className="text-white/80 font-mono text-xs tracking-widest">VISA</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Card Thickness */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
        </motion.div>

        {/* 3. Floating Notification (Front Layer) - Frosted Glass */}
        <motion.div
            className="absolute top-28 -left-12 bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 dark:border-white/10 flex items-center gap-4"
            style={{ transform: "translateZ(120px)" }}
            animate={{ y: [10, -10, 10] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                <ShieldCheck className="w-5 h-5 text-white" />
            </div>
            <div>
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Status</p>
                <p className="text-sm font-bold text-dark-900 dark:text-white">Payment Verified</p>
            </div>
        </motion.div>

        {/* 4. Floating Currency Bubble (Front Layer) - Frosted Glass */}
        <motion.div
            className="absolute bottom-40 -right-8 bg-white/80 dark:bg-dark-800/80 backdrop-blur-xl p-4 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-white/20 dark:border-white/10 flex items-center gap-4"
            style={{ transform: "translateZ(90px)" }}
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Wallet className="w-5 h-5 text-white" />
            </div>
            <div className="pr-2">
                <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">Savings</p>
                <p className="text-sm font-bold text-dark-900 dark:text-white">+ $450.00</p>
            </div>
        </motion.div>

      </motion.div>
    </div>
  );
}