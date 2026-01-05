"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { FadeIn } from "@/components/ui/motion";
import { 
  UserCheck, 
  Globe, 
  Wallet, 
  Briefcase, 
  LayoutDashboard,
  ShieldCheck,
  ArrowRightLeft,
  Bitcoin,
  CreditCard
} from "lucide-react";

const CompleteSuiteWidget = () => {
  const [activeTab, setActiveTab] = useState("FX");

  const tabs = [
    { id: "FX", icon: ArrowRightLeft, color: "text-primary-500", label: "FX" },
    { id: "Crypto", icon: Bitcoin, color: "text-secondary-500", label: "Crypto" },
    { id: "Payments", icon: CreditCard, color: "text-accent-500", label: "Pay" },
    { id: "Advisory", icon: Briefcase, color: "text-dark-500", label: "Advice" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "FX":
        return (
          <div className="space-y-3">
            <div className="flex justify-between items-end">
                <div>
                    <div className="text-[10px] text-gray-500">EUR/USD</div>
                    <div className="text-lg font-bold text-dark-900 dark:text-white">1.0842</div>
                </div>
                <div className="text-xs font-medium text-primary-500 mb-1">+0.12%</div>
            </div>
            {/* Simple Chart */}
            <div className="h-12 flex items-end gap-1">
                {[40, 60, 45, 70, 65, 85, 80].map((h, i) => (
                    <div key={i} className="flex-1 bg-primary-100 dark:bg-primary-900/30 rounded-t-sm relative overflow-hidden">
                        <motion.div 
                            initial={{ height: 0 }}
                            animate={{ height: `${h}%` }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="absolute bottom-0 w-full bg-primary-500"
                        />
                    </div>
                ))}
            </div>
            <div className="flex gap-2">
                <div className="flex-1 py-1.5 bg-primary-600 text-white text-[10px] font-medium rounded text-center cursor-pointer hover:bg-primary-700 transition-colors">Buy</div>
                <div className="flex-1 py-1.5 bg-gray-100 dark:bg-dark-700 text-dark-900 dark:text-white text-[10px] font-medium rounded text-center cursor-pointer hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors">Sell</div>
            </div>
          </div>
        );
      case "Crypto":
        return (
           <div className="space-y-3">
             <div className="p-2 bg-gray-50 dark:bg-dark-700/50 rounded-lg border border-gray-100 dark:border-dark-600">
                <div className="text-[8px] text-gray-500">Portfolio Value</div>
                <div className="text-sm font-bold text-dark-900 dark:text-white">$1,240,500.00</div>
             </div>
             <div className="space-y-1.5">
                {[{n: "Bitcoin", v: "24.5 BTC"}, {n: "Ethereum", v: "142 ETH"}].map((c, i) => (
                    <div key={i} className="flex justify-between items-center text-[10px]">
                        <div className="flex items-center gap-1.5">
                            <div className={`w-4 h-4 rounded-full ${i===0 ? 'bg-secondary-100 text-secondary-600' : 'bg-accent-100 text-accent-600'} flex items-center justify-center font-bold text-[8px]`}>{c.n[0]}</div>
                            <span className="text-dark-700 dark:text-gray-300">{c.n}</span>
                        </div>
                        <span className="font-medium text-dark-900 dark:text-white">{c.v}</span>
                    </div>
                ))}
             </div>
           </div>
        );
      case "Payments":
        return (
            <div className="space-y-3">
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {[1,2,3].map(i => (
                        <div key={i} className="flex-shrink-0 flex flex-col items-center gap-1">
                            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-dark-700 border border-dashed border-gray-300 dark:border-dark-500 flex items-center justify-center text-gray-400 cursor-pointer hover:border-primary-500 hover:text-primary-500 transition-colors">+</div>
                            <div className="w-8 h-1 bg-gray-100 dark:bg-dark-700 rounded-full" />
                        </div>
                    ))}
                </div>
                <div className="space-y-2">
                    <div className="text-[8px] font-semibold text-gray-400 uppercase">Recent</div>
                    <div className="flex items-center justify-between p-2 bg-gray-50 dark:bg-dark-700/30 rounded border border-gray-100 dark:border-dark-700">
                        <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center text-[8px]">S</div>
                            <div className="flex flex-col">
                                <span className="text-[9px] font-bold text-dark-900 dark:text-white">Supplier Ltd</span>
                                <span className="text-[8px] text-gray-500">Sent • Today</span>
                            </div>
                        </div>
                        <span className="text-[9px] font-bold text-dark-900 dark:text-white">-$12,450</span>
                    </div>
                </div>
            </div>
        );
      case "Advisory":
        return (
            <div className="space-y-3">
                <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-gray-500">Risk Profile</span>
                    <span className="text-[10px] font-bold text-primary-500">Conservative</span>
                </div>
                <div className="h-2 w-full bg-gray-100 dark:bg-dark-700 rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-primary-500 rounded-full" />
                </div>
                <div className="p-2 bg-dark-50 dark:bg-dark-900/10 border border-dark-100 dark:border-dark-900/30 rounded-lg">
                    <div className="flex gap-2">
                        <div className="w-1 h-full bg-dark-500 rounded-full" />
                        <div>
                            <div className="text-[9px] font-bold text-dark-900 dark:text-dark-300">Strategy Call</div>
                            <div className="text-[8px] text-dark-700 dark:text-dark-400">Tomorrow, 10:00 AM</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
  };

  return (
    <div className="h-48 w-full bg-gradient-to-br from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-lg flex items-center justify-center relative overflow-hidden">
      {/* Dashboard Mockup - Zoomed */}
      <div className="absolute -bottom-8 -right-10 w-full h-full bg-white dark:bg-dark-800 rounded-xl shadow-2xl border border-gray-100 dark:border-dark-700 flex flex-col overflow-hidden">
        
        {/* Mockup Header */}
        <div className="h-10 border-b border-gray-100 dark:border-dark-700 flex items-center px-4 gap-2 bg-gray-50/50 dark:bg-dark-900/50">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          <div className="ml-4 flex-1 h-8" />
        </div>

        <div className="flex flex-1">
          {/* Mockup Sidebar */}
          <div className="w-12 border-r border-gray-100 dark:border-dark-700 flex flex-col items-center py-4 gap-3 bg-gray-50/30 dark:bg-dark-900/30">
            <div className="w-6 h-6 rounded-md bg-primary-100 dark:bg-primary-900/30" />
            <div className="w-6 h-6 rounded-md bg-gray-100 dark:bg-dark-700" />
            <div className="w-6 h-6 rounded-md bg-gray-100 dark:bg-dark-700" />
          </div>

          {/* Mockup Main Content */}
          <div className="flex-1 flex flex-col bg-white dark:bg-dark-800">
            {/* Internal Tabs */}
            <div className="flex border-b border-gray-100 dark:border-dark-700 px-2 gap-1 pt-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-3 py-1.5 text-[10px] font-medium rounded transition-all flex items-center gap-1.5 overflow-hidden mb-1 cursor-pointer ${
                    activeTab === tab.id 
                      ? "text-dark-900 dark:text-white" 
                      : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-700/50"
                  }`}
                >
                  {activeTab === tab.id && (
                    <div className="absolute inset-0 opacity-40 dark:opacity-30">
                        <Image 
                            src="/assets/gradient-bg/Gradient.jpg" 
                            alt="Gradient" 
                            fill 
                            className="object-cover"
                        />
                    </div>
                  )}
                  <div className="relative z-10 flex items-center gap-1.5">
                    <tab.icon className={`w-3 h-3 ${activeTab === tab.id ? tab.color : "currentColor"}`} />
                    {tab.label}
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  {renderContent()}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DedicatedManagerWidget = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = [
    "Hello! 👋",
    "How can I help you?",
    "I've prepared your report.",
    "Let's review your strategy."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-48 w-full bg-gradient-to-br from-gray-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-lg flex items-center justify-center relative overflow-hidden">
       <div className="relative">
         <div className="flex items-center gap-3 bg-white dark:bg-dark-800 p-3 pr-6 rounded-xl shadow-lg border border-gray-100 dark:border-dark-700 relative z-10">
           <div className="relative">
             <div className="w-10 h-10 rounded-full overflow-hidden relative bg-gray-200">
                <Image 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                    alt="Manager"
                    fill
                    className="object-cover"
                />
             </div>
             <motion.div 
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="absolute bottom-0 right-0 w-3 h-3 bg-primary-500 border-2 border-white dark:border-dark-800 rounded-full z-10" 
             />
           </div>
           <div>
             <div className="text-xs font-bold text-dark-900 dark:text-white">Sarah Jenkins</div>
             <div className="text-[10px] text-primary-500 font-medium">Senior Account Manager</div>
           </div>
         </div>

         {/* Chat Bubble Animation */}
         <AnimatePresence mode="wait">
            <motion.div
               key={messageIndex}
               initial={{ opacity: 0, scale: 0.8, y: 10, x: -10 }}
               animate={{ opacity: 1, scale: 1, y: -20, x: -10 }}
               exit={{ opacity: 0, scale: 0.8, y: -30 }}
               transition={{ duration: 0.3 }}
               className="absolute -top-4 -right-4 bg-primary-600 text-white text-[10px] px-3 py-1.5 rounded-lg rounded-bl-none shadow-md z-20 whitespace-nowrap"
             >
               {messages[messageIndex]}
             </motion.div>
         </AnimatePresence>
       </div>
    </div>
  );
};

export const AtAGlance = () => {
  const items = [
    {
      title: "One Onboarding",
      description: "Single KYC process for all services. No repeated paperwork.",
      header: (
        <div className="h-48 w-full bg-gradient-to-br from-primary-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Scanning Effect */}
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 1 }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-50 z-20 blur-[1px]"
          />
          
          <div className="flex flex-col items-center gap-3 z-10">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center relative z-10">
                <ShieldCheck className="w-6 h-6 text-primary-600 dark:text-primary-400" />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute inset-0 bg-primary-400/30 rounded-full"
              />
            </div>
            <motion.div 
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="px-3 py-1 rounded-full bg-white dark:bg-dark-800 shadow-sm border border-primary-100 dark:border-primary-900/30"
            >
              <span className="text-[10px] font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">Verified</span>
            </motion.div>
          </div>
        </div>
      ),
      icon: <UserCheck className="h-4 w-4 text-primary-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Named IBAN Accounts",
      description: "Virtual IBANs in your own name for seamless collections and payments.",
      header: (
        <div className="h-48 w-full bg-gradient-to-br from-secondary-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-lg flex items-center justify-center relative overflow-hidden">
          {/* Dashboard Mockup Container - Positioned to show top-right corner */}
          <div className="absolute top-4 -right-12 w-full shadow-2xl rounded-tl-xl overflow-hidden border border-gray-100 dark:border-dark-700 bg-white dark:bg-dark-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
            {/* Header Row */}
            <div className="flex items-center gap-4 p-3 border-b border-gray-50 dark:border-dark-700 bg-gray-50/50 dark:bg-dark-900/50">
               <div className="w-20 h-2 bg-gray-200 dark:bg-dark-600 rounded-full" />
               <div className="w-12 h-2 bg-gray-100 dark:bg-dark-700 rounded-full ml-auto" />
               <div className="w-8 h-2 bg-gray-100 dark:bg-dark-700 rounded-full" />
            </div>
            
            {/* Rows */}
            <div className="p-2 space-y-2">
               {[
                 { flag: "🇬🇧", code: "GBP", iban: "GB82 LYDM 2931...", bal: "£42,920.00" },
                 { flag: "🇪🇺", code: "EUR", iban: "BE91 LYDM 8821...", bal: "€12,450.00" },
                 { flag: "🇺🇸", code: "USD", iban: "US21 LYDM 1002...", bal: "$8,200.00" },
               ].map((row, i) => (
                 <motion.div 
                   key={i}
                   initial={{ opacity: 0, x: 20 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: i * 0.2 }}
                   className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700/50 transition-colors"
                 >
                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">{row.flag}</div>
                    <div className="flex-1">
                       <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold text-dark-900 dark:text-white">{row.code}</span>
                          <span className="text-[8px] font-mono text-gray-400">{row.iban}</span>
                       </div>
                    </div>
                    <div className="text-[10px] font-medium text-dark-900 dark:text-white">{row.bal}</div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>
      ),
      icon: <Wallet className="h-4 w-4 text-secondary-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Global Reach",
      description: "Support for complex corridors and less-common currencies.",
      header: (
        <div className="h-48 w-full bg-gradient-to-br from-accent-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-lg flex items-center justify-center relative overflow-hidden perspective-[800px]">
          {/* Background Glow */}
          <div className="absolute inset-0 bg-accent-500/5 blur-3xl" />
          
          {/* Central Globe Representation */}
          <div className="relative z-10 w-20 h-20">
            <div className="absolute inset-0 rounded-full border border-accent-200 dark:border-accent-800 opacity-50" />
            <div className="absolute inset-0 rounded-full border border-accent-200 dark:border-accent-800 opacity-50 rotate-45" />
            <div className="absolute inset-0 rounded-full border border-accent-200 dark:border-accent-800 opacity-50 -rotate-45" />
            <div className="absolute inset-2 rounded-full bg-accent-100 dark:bg-accent-900/50 blur-sm" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Globe className="w-10 h-10 text-accent-500 dark:text-accent-400" />
            </div>
          </div>

          {/* Orbiting Currencies */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Orbit 1 */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-32 h-32 rounded-full border border-dashed border-gray-200 dark:border-dark-700"
            >
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white dark:bg-dark-800 p-1.5 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700 flex items-center gap-1"
              >
                <span className="text-xs">🇺🇸</span>
                <span className="text-[8px] font-bold text-gray-600 dark:text-gray-300">USD</span>
              </motion.div>
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white dark:bg-dark-800 p-1.5 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700 flex items-center gap-1"
              >
                <span className="text-xs">🇯🇵</span>
                <span className="text-[8px] font-bold text-gray-600 dark:text-gray-300">JPY</span>
              </motion.div>
            </motion.div>

            {/* Orbit 2 (Reverse) */}
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-44 h-44 rounded-full border border-dashed border-gray-200 dark:border-dark-700 opacity-60"
            >
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -right-3 -translate-y-1/2 bg-white dark:bg-dark-800 p-1.5 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700 flex items-center gap-1"
              >
                <span className="text-xs">🇪🇺</span>
                <span className="text-[8px] font-bold text-gray-600 dark:text-gray-300">EUR</span>
              </motion.div>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/2 -left-3 -translate-y-1/2 bg-white dark:bg-dark-800 p-1.5 rounded-lg shadow-sm border border-gray-100 dark:border-dark-700 flex items-center gap-1"
              >
                <span className="text-xs">🇬🇧</span>
                <span className="text-[8px] font-bold text-gray-600 dark:text-gray-300">GBP</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      ),
      icon: <Globe className="h-4 w-4 text-accent-500" />,
      className: "md:col-span-1",
    },
    {
      title: "Complete Suite",
      description: "FX, Crypto, Payments, and Advisory all integrated in one place.",
      header: <CompleteSuiteWidget />,
      icon: <LayoutDashboard className="h-4 w-4 text-dark-500" />,
      className: "md:col-span-2",
    },
    {
      title: "Dedicated Manager",
      description: "Personal support from an expert who understands your business.",
      header: <DedicatedManagerWidget />,
      icon: <Briefcase className="h-4 w-4 text-gray-500" />,
      className: "md:col-span-1",
    },
  ];

  return (
    <section className="relative py-16 md:py-24 bg-gray-50 dark:bg-dark-900 overflow-hidden">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05] pointer-events-none mix-blend-multiply dark:mix-blend-overlay">
        <Image 
          src="/assets/gradient-bg/Gradient.jpg" 
          alt="Background Texture" 
          fill 
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
              Everything you need. <br />
              <span className="text-primary-500">Nothing you don&apos;t.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built for speed, transparency, and control.
            </p>
          </div>
        </FadeIn>

        <BentoGrid>
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={item.className}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};
