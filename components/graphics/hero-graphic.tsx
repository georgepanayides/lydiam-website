"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CreditCard, TrendingUp, ShieldCheck, Globe, ArrowUpRight } from "lucide-react";

export function HeroGraphic() {
  return (
    <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center perspective-1000">
      {/* Abstract Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-full blur-3xl animate-pulse" />

      {/* Main Card - The "App" View */}
      <motion.div
        initial={{ rotateX: 20, rotateY: -20, opacity: 0, y: 50 }}
        animate={{ rotateX: 10, rotateY: -10, opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 w-[280px] md:w-[320px] bg-white dark:bg-dark-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-dark-700 overflow-hidden"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Gradient Texture Overlay */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none mix-blend-overlay">
          <Image 
            src="/assets/gradient-bg/Gradient.jpg" 
            alt="Gradient Texture" 
            fill 
            className="object-cover"
          />
        </div>

        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-dark-700 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image 
              src="/assets/logos/icons/Logo_Star Circle Dark Green.svg" 
              alt="Lydiam Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8"
            />
            <span className="font-organetto font-bold text-dark-900 dark:text-white">Lydiam</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>

        {/* Balance Section */}
        <div className="p-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">Total Balance</p>
          <h3 className="text-3xl font-bold text-dark-900 dark:text-white mt-1">$1,240,500.00</h3>
          <div className="flex items-center gap-1 text-green-500 text-sm mt-2 font-medium">
            <TrendingUp className="w-4 h-4" />
            <span>+2.4% today</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="px-6 flex gap-4">
          <div className="flex-1 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
            <Globe className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-xs font-medium text-primary-700 dark:text-primary-300">Exchange</span>
          </div>
          <div className="flex-1 bg-primary-50 dark:bg-primary-900/20 rounded-xl p-3 flex flex-col items-center gap-2 cursor-pointer hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
            <ArrowUpRight className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <span className="text-xs font-medium text-primary-700 dark:text-primary-300">Transfer</span>
          </div>
        </div>

        {/* Recent Transactions List */}
        <div className="p-6 space-y-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Recent Activity</p>
          {[1, 2].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-dark-700 flex items-center justify-center">
                  {i === 1 ? <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <CreditCard className="w-5 h-5 text-gray-600 dark:text-gray-300" />}
                </div>
                <div>
                  <p className="text-sm font-medium text-dark-900 dark:text-white">{i === 1 ? "USD to EUR" : "Merchant Payment"}</p>
                  <p className="text-xs text-gray-500">Today, 10:2{i} AM</p>
                </div>
              </div>
              <span className={`text-sm font-medium ${i === 1 ? "text-green-500" : "text-dark-900 dark:text-white"}`}>
                {i === 1 ? "+€50,000" : "-$240.00"}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -right-4 md:right-10 z-30 bg-white dark:bg-dark-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-dark-700 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
          <ShieldCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
        </div>
        <div>
          <p className="text-xs text-gray-500">Security Status</p>
          <p className="text-sm font-bold text-dark-900 dark:text-white">Protected</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 -left-4 md:left-10 z-10 bg-white dark:bg-dark-800 p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-dark-700"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-2 h-2 rounded-full bg-primary-500" />
          <span className="text-xs font-medium text-gray-500">Live Rates</span>
        </div>
        <div className="flex items-center gap-4">
          <div>
            <p className="text-xs text-gray-400">GBP/USD</p>
            <p className="text-sm font-bold text-dark-900 dark:text-white">1.2745</p>
          </div>
          <div className="h-8 w-[1px] bg-gray-200 dark:bg-dark-600" />
          <div>
            <p className="text-xs text-gray-400">EUR/USD</p>
            <p className="text-sm font-bold text-dark-900 dark:text-white">1.0921</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
