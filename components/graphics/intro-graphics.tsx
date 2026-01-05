"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowDown, Check, TrendingUp, Bitcoin, DollarSign, PoundSterling, ShieldCheck, Wifi, ShoppingBag, Car, Coffee, Send, Paperclip, MoreVertical, Phone } from "lucide-react";

// --- Advisory Graphic (iPhone Chat) ---
export const AdvisoryGraphic = () => {
  return (
    <div className="relative w-full h-full flex justify-center pt-8 overflow-hidden">
      {/* Realistic iPhone Frame */}
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 20, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative w-[320px] h-[650px] bg-[#1a1a1a] rounded-[3.5rem] shadow-2xl border-[6px] border-[#2a2a2a] ring-1 ring-white/10 overflow-hidden"
      >
        {/* Screen */}
        <div className="absolute inset-[2px] bg-gray-50 dark:bg-dark-900 rounded-[3.2rem] overflow-hidden flex flex-col relative">
            {/* Dynamic Island / Notch Area */}
            <div className="absolute top-0 left-0 right-0 h-14 z-30 flex justify-center pt-4 pointer-events-none overflow-hidden">
                <div className="w-28 h-8 bg-black rounded-full flex items-center justify-between px-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center">
                       <div className="w-1.5 h-1.5 rounded-full bg-[#00ff00]/20 animate-pulse" />
                    </div>
                    <div className="w-10 h-10 flex items-center justify-center">
                       <div className="w-12 h-12 rounded-full bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-20" />
                    </div>
                </div>
            </div>

            {/* App Header */}
            <div className="pt-16 pb-4 px-6 bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl border-b border-gray-100 dark:border-dark-800 z-20 flex items-center justify-between sticky top-0 rounded-t-[5rem]">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center text-white shadow-md">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white dark:border-dark-900 rounded-full" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-dark-900 dark:text-white">Lydiam Private</div>
                    <div className="text-[10px] text-primary-500 font-medium">Active Now</div>
                  </div>
                </div>
                <div className="flex gap-3 text-gray-400">
                   <Phone className="w-5 h-5" />
                   <MoreVertical className="w-5 h-5" />
                </div>
            </div>

            {/* Chat Content */}
            <div className="flex-1 p-4 space-y-6 overflow-y-auto no-scrollbar pb-32 bg-gray-50 dark:bg-dark-900">
                <div className="text-center text-[10px] text-gray-400 my-4 font-medium uppercase tracking-wider">Today 9:41 AM</div>

                {/* Message 1: User */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end"
                >
                  <div className="bg-primary-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm">
                    What&apos;s the outlook on GBP/USD volatility?
                  </div>
                </motion.div>

                {/* Message 2: Advisor */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.5 }}
                  className="flex justify-start"
                >
                   <div className="bg-white dark:bg-dark-800 text-dark-900 dark:text-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[85%] shadow-sm border border-gray-100 dark:border-dark-700">
                    <p className="mb-2">Breaking: UK inflation data just released. We&apos;re seeing a spike.</p>
                    {/* Mini Chart Attachment */}
                    <div className="h-24 bg-gray-50 dark:bg-dark-900 rounded-lg border border-gray-100 dark:border-dark-700 p-2 flex items-end gap-1 overflow-hidden">
                       {[30, 45, 35, 60, 50, 75, 65, 90, 80, 100].map((h, i) => (
                          <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ delay: 2 + (i * 0.05), duration: 0.5 }}
                            className="flex-1 bg-primary-500/20 rounded-t-[2px]"
                          >
                             <div className="w-full h-full bg-primary-500 opacity-50" />
                          </motion.div>
                       ))}
                    </div>
                  </div>
                </motion.div>

                {/* Message 3: Advisor */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 3.0 }}
                  className="flex justify-start"
                >
                  <div className="bg-white dark:bg-dark-800 text-dark-900 dark:text-gray-100 px-4 py-3 rounded-2xl rounded-tl-sm text-sm max-w-[85%] shadow-sm border border-gray-100 dark:border-dark-700">
                    Recommend hedging 50% of exposure now to lock in rates.
                  </div>
                </motion.div>

                 {/* Message 4: User (Typing/Sent) */}
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 4.5 }}
                  className="flex justify-end"
                >
                  <div className="bg-primary-600 text-white px-4 py-3 rounded-2xl rounded-tr-sm text-sm max-w-[85%] shadow-sm flex items-center gap-2">
                    <span>Execute trade</span>
                    <Check className="w-3 h-3 text-white/70" />
                  </div>
                </motion.div>
            </div>

            {/* Input Area (Fixed Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-dark-800 pb-8">
                <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-800 flex items-center justify-center text-gray-400">
                      <Paperclip className="w-4 h-4" />
                   </div>
                   <div className="flex-1 h-10 bg-gray-100 dark:bg-dark-800 rounded-full px-4 flex items-center text-sm text-gray-400">
                      Message...
                   </div>
                   <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
                      <Send className="w-4 h-4 ml-0.5" />
                   </div>
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};

// --- Global FX Graphic ---
export const FXGraphic = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsConfirmed(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <div className="w-full max-w-sm bg-white dark:bg-dark-800 rounded-3xl shadow-2xl border border-gray-100 dark:border-dark-700 overflow-hidden relative">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-100 dark:border-dark-700 flex justify-between items-center bg-gray-50/50 dark:bg-dark-900/50">
          <span className="text-sm font-semibold text-gray-500">Spot Trade</span>
          <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wide">
            <motion.div 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-green-500" 
            />
            Live Rate
          </div>
        </div>

        <div className="p-6 space-y-4 relative">
          {/* Sell Input */}
          <motion.div 
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gray-50 dark:bg-dark-900 rounded-2xl p-4 border border-gray-100 dark:border-dark-700"
          >
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-500 font-medium">You Sell</span>
              <span className="text-xs text-gray-400">Balance: £54,200.00</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                  <PoundSterling className="w-5 h-5" />
                </div>
                <span className="font-bold text-dark-900 dark:text-white">GBP</span>
              </div>
              <span className="text-2xl font-mono font-medium text-dark-900 dark:text-white">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  10,000.00
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Exchange Rate Connector */}
          <div className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="w-8 h-8 bg-white dark:bg-dark-800 rounded-full border border-gray-200 dark:border-dark-600 flex items-center justify-center shadow-lg"
            >
              <ArrowDown className="w-4 h-4 text-primary-500" />
            </motion.div>
          </div>

          {/* Buy Input */}
          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="bg-gray-50 dark:bg-dark-900 rounded-2xl p-4 border border-gray-100 dark:border-dark-700"
          >
            <div className="flex justify-between mb-2">
              <span className="text-xs text-gray-500 font-medium">You Buy</span>
              <div className="flex items-center gap-1 text-[10px] text-primary-500 bg-primary-50 dark:bg-primary-900/20 px-1.5 py-0.5 rounded">
                1.2850
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400">
                  <DollarSign className="w-5 h-5" />
                </div>
                <span className="font-bold text-dark-900 dark:text-white">USD</span>
              </div>
              <span className="text-2xl font-mono font-medium text-primary-600 dark:text-primary-400">
                 <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  12,850.00
                </motion.span>
              </span>
            </div>
          </motion.div>

          {/* Action Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              animate={{ 
                scale: [1, 1.05, 1],
              }}
              transition={{ 
                scale: { delay: 3.0, duration: 0.4, times: [0, 0.5, 1] }
              }}
              onClick={() => setIsConfirmed(true)}
              className="w-full py-3 text-white rounded-xl font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-primary-500/20 bg-[url('/assets/gradient-bg/Gradient.jpg')] bg-cover bg-center relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300" />
              <span className="relative z-10">Confirm Trade</span>
              <ArrowRight className="w-4 h-4 relative z-10" />
            </motion.button>
          </motion.div>
        </div>
        
        {/* Success Overlay Animation */}
        <AnimatePresence>
          {isConfirmed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-white/95 dark:bg-dark-900/95 backdrop-blur-sm flex flex-col items-center justify-center z-20"
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: [0.5, 1.1, 1], opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-green-500/30"
              >
                <Check className="w-8 h-8 text-white" />
              </motion.div>
              <motion.h4 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-lg font-bold text-dark-900 dark:text-white"
              >
                Trade Confirmed
              </motion.h4>
              <motion.p 
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-sm text-gray-500"
              >
                ID: #FX-892910
              </motion.p>

              {/* Toast Notification */}
              <motion.div
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring" }}
                className="absolute top-6 left-6 right-6 bg-white dark:bg-dark-800 text-dark-900 dark:text-white py-3 px-4 rounded-lg shadow-2xl flex items-center justify-between text-xs border border-gray-100 dark:border-dark-700"
              >
                <span>Funds added to USD Wallet</span>
                <span className="font-bold text-green-600 dark:text-green-400">+$12,850.00</span>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

// --- Crypto Graphic ---
export const CryptoGraphic = () => {
  return (
    <div className="relative w-full h-full flex items-center justify-center p-8">
      <div className="w-full max-w-md bg-white dark:bg-dark-800 rounded-2xl border border-gray-100 dark:border-dark-700 shadow-xl overflow-hidden p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-sm text-gray-500">Portfolio Value</div>
            <div className="text-2xl font-bold text-dark-900 dark:text-white">$1,245,302.00</div>
          </div>
          <div className="flex items-center gap-1 text-green-500 text-sm font-medium bg-green-500/10 px-2 py-1 rounded-lg">
            <TrendingUp className="w-4 h-4" />
            +12.5%
          </div>
        </div>

        {/* Chart Area */}
        <div className="h-40 relative flex items-end gap-2 mb-6">
          {[40, 65, 45, 80, 55, 90, 75, 100].map((height, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${height}%` }}
              transition={{ delay: i * 0.1, duration: 0.5, type: "spring" }}
              className="flex-1 bg-primary-500/20 rounded-t-sm relative group"
            >
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.1 }}
                className="absolute top-0 left-0 w-full h-1 bg-primary-500" 
              />
            </motion.div>
          ))}
        </div>

        {/* Asset List */}
        <div className="space-y-3">
          {[
            { name: "Bitcoin", symbol: "BTC", amount: "12.5", value: "$542,100", icon: Bitcoin, color: "text-orange-500" },
            { name: "Ethereum", symbol: "ETH", amount: "145.2", value: "$320,400", icon: TrendingUp, color: "text-blue-500" },
          ].map((asset, i) => (
            <motion.div
              key={i}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-dark-900/50"
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full bg-white dark:bg-dark-800 flex items-center justify-center shadow-sm ${asset.color}`}>
                  <asset.icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-medium text-dark-900 dark:text-white">{asset.name}</div>
                  <div className="text-xs text-gray-500">{asset.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-dark-900 dark:text-white">{asset.value}</div>
                <div className="text-xs text-gray-500">{asset.amount} {asset.symbol}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Payments Graphic ---
export const PaymentsGraphic = () => {
  const transactions = [
    { id: 1, merchant: "Apple Store", amount: "$1,299.00", icon: ShoppingBag, color: "bg-gray-900", delay: 1.2 },
    { id: 2, merchant: "Uber Trip", amount: "$24.50", icon: Car, color: "bg-black", delay: 1.35 },
    { id: 3, merchant: "Starbucks", amount: "$5.40", icon: Coffee, color: "bg-green-600", delay: 1.5 },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center p-8 perspective-1000">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="w-[400px] h-[400px] border border-primary-500/30 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-[300px] h-[300px] border border-primary-500/20 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      {/* Premium Metal Card */}
      <motion.div
        initial={{ rotateY: 90, opacity: 0, rotateX: 10, y: -40 }}
        animate={{ rotateY: 0, opacity: 1, rotateX: 0, y: -60 }}
        transition={{ duration: 1.2, type: "spring", bounce: 0.3 }}
        className="relative w-[340px] h-[215px] rounded-2xl z-10 transform-style-3d group"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Card Body */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#022c22] via-[#064e3b] to-[#022c22] rounded-2xl shadow-2xl border border-white/10 overflow-hidden">
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-30 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
          
          {/* Abstract Geometric Accents */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-green-400/10 to-transparent" style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }} />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-400/10 to-transparent" style={{ clipPath: 'polygon(0 100%, 0 0, 100% 100%)' }} />
          
          {/* Metallic Sheen Animation */}
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12"
          />

          {/* Card Content */}
          <div className="relative h-full p-6 flex flex-col justify-between z-20">
            <div className="flex justify-between items-start">
              {/* EMV Chip */}
              <div className="w-12 h-9 rounded-md bg-gradient-to-br from-yellow-100 via-yellow-300 to-yellow-500 border border-yellow-200/50 flex items-center justify-center overflow-hidden relative shadow-sm">
                 <div className="absolute inset-0 border-[0.5px] border-black/20 rounded-md" />
                 <div className="w-full h-[1px] bg-black/20 absolute top-1/3" />
                 <div className="w-full h-[1px] bg-black/20 absolute bottom-1/3" />
                 <div className="h-full w-[1px] bg-black/20 absolute left-1/3" />
                 <div className="h-full w-[1px] bg-black/20 absolute right-1/3" />
              </div>
              {/* Contactless Icon */}
              <Wifi className="w-6 h-6 text-white/50 rotate-90" />
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                 <div className="text-xl tracking-[0.2em] font-mono text-transparent bg-clip-text bg-gradient-to-b from-white to-white/80 drop-shadow-md" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                    •••• •••• •••• 4291
                 </div>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <div className="text-[8px] text-emerald-200/60 uppercase tracking-[0.2em] mb-1.5 font-semibold">Card Holder</div>
                  <div className="text-sm font-medium text-white/95 tracking-[0.15em] font-mono uppercase" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>George Panayides</div>
                </div>
                <div className="text-right">
                  <div className="text-[8px] text-emerald-200/60 uppercase tracking-[0.2em] mb-1.5 font-semibold">Expires</div>
                  <div className="text-sm font-medium text-white/95 tracking-[0.15em] font-mono" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>12/28</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Logo Watermark */}
          <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
      </motion.div>

      {/* Transaction Stack */}
      <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2 z-20 pointer-events-none">
        {transactions.map((tx) => (
          <motion.div
            key={tx.id}
            initial={{ y: -20, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ delay: tx.delay, type: "spring", stiffness: 300, damping: 20 }}
            className="w-[280px] bg-white/90 dark:bg-dark-800/90 backdrop-blur-md rounded-xl shadow-lg p-3 flex items-center gap-3 border border-white/20 dark:border-white/10"
          >
            <div className={`w-8 h-8 rounded-full ${tx.color} flex items-center justify-center text-white shadow-md`}>
              <tx.icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-dark-900 dark:text-white truncate">{tx.merchant}</div>
              <div className="text-[10px] text-gray-500 dark:text-gray-400">Payment Sent</div>
            </div>
            <div className="text-xs font-mono font-medium text-dark-900 dark:text-white">
              -{tx.amount}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
