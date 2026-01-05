"use client";

import { motion } from "framer-motion";
import { Building2, Globe, ArrowRightLeft, TrendingUp } from "lucide-react";

export function FXTreasuryGraphic() {
  return (
    <div className="relative w-full max-w-[500px] mx-auto perspective-1000">
      {/* Main Dashboard Card */}
      <motion.div
        initial={{ rotateX: 10, rotateY: -10, opacity: 0, y: 20 }}
        whileInView={{ rotateX: 0, rotateY: 0, opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-dark-700 overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 dark:border-dark-700 flex justify-between items-center bg-gray-50/50 dark:bg-dark-800/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            </div>
            <div>
                <h3 className="font-bold text-dark-900 dark:text-white text-sm">Lydiam Global Ltd</h3>
                <p className="text-xs text-gray-500">Corporate Treasury</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800">
            <span className="text-[10px] font-bold text-green-700 dark:text-green-400 uppercase tracking-wide">Verified Entity</span>
          </div>
        </div>

        {/* Balance Section */}
        <div className="p-6 pb-2">
            <p className="text-sm text-gray-500 mb-1">Total Liquidity</p>
            <div className="flex items-baseline gap-2">
                <h2 className="text-3xl font-bold text-dark-900 dark:text-white">$4,250,000.00</h2>
                <span className="text-sm font-medium text-green-500 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3" /> +1.2%
                </span>
            </div>
        </div>

        {/* Accounts List */}
        <div className="p-6 space-y-3">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Named Accounts</p>
            
            {/* GBP Account */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-dark-700/30 border border-gray-100 dark:border-dark-600 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-dark-600 flex items-center justify-center shadow-sm text-xs font-bold text-dark-900 dark:text-white">
                        🇬🇧
                    </div>
                    <div>
                        <p className="text-sm font-bold text-dark-900 dark:text-white">GBP Operating</p>
                        <p className="text-xs text-gray-500 font-mono">GB89 LYDM 2045...</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-dark-900 dark:text-white">£850,000.00</p>
                    <p className="text-[10px] text-primary-600 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Local Rails (FPS)</p>
                </div>
            </div>

            {/* EUR Account */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-dark-700/30 border border-gray-100 dark:border-dark-600 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-dark-600 flex items-center justify-center shadow-sm text-xs font-bold text-dark-900 dark:text-white">
                        🇪🇺
                    </div>
                    <div>
                        <p className="text-sm font-bold text-dark-900 dark:text-white">EUR Collection</p>
                        <p className="text-xs text-gray-500 font-mono">DE45 LYDM 8901...</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-dark-900 dark:text-white">€1,240,000.00</p>
                    <p className="text-[10px] text-primary-600 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">SEPA Instant</p>
                </div>
            </div>

            {/* USD Account */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-dark-700/30 border border-gray-100 dark:border-dark-600 hover:border-primary-200 dark:hover:border-primary-800 transition-colors group">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white dark:bg-dark-600 flex items-center justify-center shadow-sm text-xs font-bold text-dark-900 dark:text-white">
                        🇺🇸
                    </div>
                    <div>
                        <p className="text-sm font-bold text-dark-900 dark:text-white">USD Treasury</p>
                        <p className="text-xs text-gray-500 font-mono">US12 LYDM 6723...</p>
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-dark-900 dark:text-white">$2,160,000.00</p>
                    <p className="text-[10px] text-primary-600 dark:text-primary-400 font-medium opacity-0 group-hover:opacity-100 transition-opacity">ACH / Swift</p>
                </div>
            </div>
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-8 top-20 z-30 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-dark-700 hidden md:block"
      >
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <Globe className="w-5 h-5 text-blue-500" />
            </div>
            <div>
                <p className="text-xs text-gray-500">Global Reach</p>
                <p className="text-sm font-bold text-dark-900 dark:text-white">180+ Countries</p>
            </div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-8 bottom-20 z-30 bg-white dark:bg-dark-800 p-4 rounded-xl shadow-xl border border-gray-100 dark:border-dark-700 hidden md:block"
      >
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/20 flex items-center justify-center">
                <ArrowRightLeft className="w-5 h-5 text-primary-500" />
            </div>
            <div>
                <p className="text-xs text-gray-500">FX Execution</p>
                <p className="text-sm font-bold text-dark-900 dark:text-white">Real-time Rates</p>
            </div>
        </div>
      </motion.div>
    </div>
  );
}
