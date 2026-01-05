"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/motion";
import { Lightbulb, FileSearch, Globe2, Scale, Search, Layers, Rocket, CheckCircle, LayoutDashboard, Users, Settings, PieChart, ArrowUpRight, ArrowDownRight, CreditCard, Wallet } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    id: "discovery",
    title: "Discovery & Assessment",
    description: "We analyze your current business model, payment flows, and risk exposure to identify inefficiencies.",
    icon: Search,
  },
  {
    id: "structuring",
    title: "Structuring",
    description: "We design a bespoke account and payment structure that minimizes friction and cost.",
    icon: Layers,
  },
  {
    id: "implementation",
    title: "Implementation",
    description: "We coordinate with legal and tax advisors to ensure your setup is compliant and future-proof.",
    icon: Rocket,
  },
];

const DiscoveryGraphic = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="relative w-full max-w-sm aspect-square"
  >
    {/* CRM / Dashboard Mockup */}
    <div className="absolute inset-0 bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 shadow-lg overflow-hidden flex flex-col w-150 h-150">
        {/* Header */}
        <div className="h-12 border-b border-gray-100 dark:border-dark-700 flex items-center justify-between px-4 bg-gray-50/50 dark:bg-dark-800/50">
            <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                </div>
            </div>
            <div className="flex items-center gap-3">
                <div className="w-20 h-2 bg-gray-200 dark:bg-dark-600 rounded-full" />
                <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800" />
            </div>
        </div>
        
        <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-14 border-r border-gray-100 dark:border-dark-700 bg-gray-50/30 dark:bg-dark-800/30 flex flex-col items-center py-4 gap-4">
                <div className="p-2 rounded-lg bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400">
                    <LayoutDashboard className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors">
                    <Users className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors">
                    <Wallet className="w-5 h-5" />
                </div>
                <div className="p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors">
                    <PieChart className="w-5 h-5" />
                </div>
                <div className="mt-auto p-2 rounded-lg text-gray-400 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors">
                    <Settings className="w-5 h-5" />
                </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 p-5 space-y-5 overflow-hidden">
                <div className="flex justify-between items-center">
                    <div>
                        <div className="w-24 h-3 bg-gray-200 dark:bg-dark-600 rounded-full mb-2" />
                        <div className="w-32 h-5 bg-gray-900 dark:bg-white rounded-md opacity-10" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-[10px] font-bold uppercase tracking-wider">
                        Active
                    </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-gray-50 dark:bg-dark-700/30 border border-gray-100 dark:border-dark-700 p-3 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-2 opacity-50">
                            <ArrowUpRight className="w-4 h-4 text-green-500" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center mb-2 text-blue-500">
                            <CreditCard className="w-4 h-4" />
                        </div>
                        <div className="w-12 h-2 bg-gray-200 dark:bg-dark-600 rounded-full mb-2" />
                        <div className="w-16 h-4 bg-gray-900 dark:bg-white rounded opacity-10" />
                    </div>
                    <div className="rounded-xl bg-gray-50 dark:bg-dark-700/30 border border-gray-100 dark:border-dark-700 p-3 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-50">
                            <ArrowDownRight className="w-4 h-4 text-red-500" />
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center mb-2 text-purple-500">
                            <Users className="w-4 h-4" />
                        </div>
                        <div className="w-12 h-2 bg-gray-200 dark:bg-dark-600 rounded-full mb-2" />
                        <div className="w-16 h-4 bg-gray-900 dark:bg-white rounded opacity-10" />
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-2">Recent Transactions</div>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-700/30 transition-colors border border-transparent hover:border-gray-100 dark:hover:border-dark-700">
                            <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i === 1 ? 'bg-orange-100 text-orange-500' : i === 2 ? 'bg-blue-100 text-blue-500' : 'bg-green-100 text-green-500'}`}>
                                    <div className="w-4 h-4 rounded-full bg-current opacity-50" />
                                </div>
                                <div>
                                    <div className="w-20 h-2 bg-gray-200 dark:bg-dark-600 rounded-full mb-1" />
                                    <div className="w-12 h-1.5 bg-gray-100 dark:bg-dark-700 rounded-full" />
                                </div>
                            </div>
                            <div className="w-12 h-3 bg-gray-200 dark:bg-dark-600 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    
    {/* Magnifying Glass */}
    <motion.div 
        animate={{ 
            x: [0, 60, 20, -40, 0],
            y: [0, -30, 40, 20, 0],
        }}
        transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        className="absolute -right-6 -bottom-6 bg-white dark:bg-dark-800 p-4 rounded-full shadow-xl border border-gray-100 dark:border-dark-600 text-primary-500 z-20"
    >
        <Search className="w-10 h-10" />
    </motion.div>
  </motion.div>
);

const StructuringGraphic = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="relative w-full max-w-xs aspect-square flex items-center justify-center"
  >
     {/* Abstract Background */}
     <div className="absolute inset-[-100px] -z-20 overflow-hidden pointer-events-none">
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-primary-500/10 rounded-full border-dashed" 
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-primary-500/20 rounded-full" 
        />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
     </div>

     {/* Central Node */}
     <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 }}
        className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30 z-10"
     >
        <Globe2 className="w-10 h-10 text-white" />
     </motion.div>

     {/* Satellite Nodes */}
     {[0, 90, 180, 270].map((deg, i) => (
        <motion.div
            key={i}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{ 
                opacity: 1, 
                x: Math.cos(deg * Math.PI / 180) * 100,
                y: Math.sin(deg * Math.PI / 180) * 100
            }}
            transition={{ delay: 0.4 + (i * 0.1), type: "spring" }}
            className="absolute w-14 h-14 bg-white dark:bg-dark-800 border border-gray-200 dark:border-dark-600 rounded-xl flex items-center justify-center shadow-md"
        >
            <div className="w-6 h-6 bg-gray-200 dark:bg-dark-700 rounded-full" />
        </motion.div>
     ))}
     
     {/* Connecting Lines */}
     {[0, 90, 180, 270].map((deg, i) => (
        <motion.div
            key={`line-${i}`}
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 80, opacity: 1 }}
            transition={{ delay: 0.3 + (i * 0.1) }}
            style={{ rotate: `${deg}deg`, transformOrigin: "left center" }}
            className="absolute left-1/2 top-1/2 h-0.5 bg-primary-200 dark:bg-primary-900/50 -z-10"
        />
     ))}
  </motion.div>
);

const ImplementationStep = ({ title, subtitle, icon: Icon, delay }: { title: string, subtitle: string, icon: React.ElementType, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay }}
        className="flex items-center gap-4 p-3 rounded-lg bg-gray-50 dark:bg-dark-700/30 border border-gray-100 dark:border-dark-700 group"
    >
        <div className="p-2 rounded-md bg-white dark:bg-dark-800 shadow-sm text-gray-400 group-hover:text-primary-500 transition-colors border border-gray-100 dark:border-dark-600">
            <Icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
            <div className="text-sm font-bold text-dark-900 dark:text-white truncate">{title}</div>
            <div className="text-[10px] text-gray-500 dark:text-gray-400 font-mono mt-0.5 truncate">
                {subtitle}
            </div>
        </div>
        <div className="relative w-5 h-5 flex items-center justify-center">
            <motion.div
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 0, scale: 0 }}
                transition={{ delay: delay + 1.2, duration: 0.2 }}
                className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 border-t-primary-500 rounded-full animate-spin"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 1.2, type: "spring" }}
                className="absolute inset-0"
            >
                <CheckCircle className="w-5 h-5 text-green-500" />
            </motion.div>
        </div>
    </motion.div>
);

const ImplementationGraphic = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5 }}
    className="relative w-full max-w-sm"
  >
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-dark-700 shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="h-14 border-b border-gray-100 dark:border-dark-700 flex items-center justify-between px-5 bg-gray-50/80 dark:bg-dark-800/80 backdrop-blur-sm">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                    <Rocket className="w-4 h-4 text-primary-500" />
                </div>
                <div>
                    <div className="text-xs font-bold text-dark-900 dark:text-white uppercase tracking-wider">Deployment</div>
                    <div className="text-[10px] text-gray-500 font-mono">ID: #8829-L</div>
                </div>
            </div>
            <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-green-500/10 border border-green-500/20">
                <motion.div 
                    animate={{ opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-1.5 h-1.5 rounded-full bg-green-500" 
                />
                <span className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wide">Live</span>
            </div>
        </div>

        {/* Progress Bar */}
        <div className="h-1 w-full bg-gray-100 dark:bg-dark-700">
            <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 5, ease: "linear" }}
                className="h-full bg-primary-500"
            />
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
            <ImplementationStep 
                title="Compliance Framework" 
                subtitle="Verifying regulatory requirements"
                icon={Scale} 
                delay={0.5} 
            />
            <ImplementationStep 
                title="Treasury Structure" 
                subtitle="Configuring multi-currency accounts"
                icon={Layers} 
                delay={2.0} 
            />
            <ImplementationStep 
                title="Payment Rails" 
                subtitle="Integrating banking networks"
                icon={Globe2} 
                delay={3.5} 
            />
        </div>

        {/* Footer / Success State */}
        <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            transition={{ delay: 5.2 }}
            className="bg-green-500/5 border-t border-green-500/10 overflow-hidden"
        >
            <div className="p-4 flex items-center justify-center gap-2 text-green-600 dark:text-green-400 font-bold">
                <CheckCircle className="w-5 h-5" />
                <span>System Fully Operational</span>
            </div>
        </motion.div>
    </div>
  </motion.div>
);

export const Advisory = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <section className="py-20 bg-gray-50 dark:bg-dark-800/50 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              Consultancy & <br />
              <span className="text-primary-500">Strategic Advisory</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
              We don&apos;t just provide the platform; we help you design the flow. 
              Our team works as an extension of your finance department to optimize operations.
            </p>

            <div className="space-y-4">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full text-left p-6 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-white dark:bg-dark-800 border-primary-500 shadow-lg scale-[1.02]"
                      : "bg-transparent border-transparent hover:bg-white/50 dark:hover:bg-dark-800/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl transition-colors ${
                        activeTab === tab.id 
                        ? "bg-primary-500 text-white" 
                        : "bg-gray-100 dark:bg-dark-700 text-gray-500 dark:text-gray-400"
                    }`}>
                        <tab.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-2 transition-colors ${
                        activeTab === tab.id ? "text-dark-900 dark:text-white" : "text-gray-500 dark:text-gray-400"
                      }`}>
                        {tab.title}
                      </h3>
                      <p className={`text-sm transition-colors ${
                        activeTab === tab.id ? "text-gray-600 dark:text-gray-300" : "text-gray-400 dark:text-gray-500"
                      }`}>
                        {tab.description}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="h-[500px] relative bg-white dark:bg-dark-900 rounded-3xl border border-gray-100 dark:border-dark-700 overflow-hidden flex items-center justify-center p-8 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]">
             <div className="absolute inset-0 bg-[url('/assets/gradient-bg/Gradient.jpg')] opacity-5 mix-blend-overlay bg-cover" />
             
             <AnimatePresence mode="wait">
                {activeTab === "discovery" && (
                    <DiscoveryGraphic key="discovery" />
                )}
                {activeTab === "structuring" && (
                    <StructuringGraphic key="structuring" />
                )}
                {activeTab === "implementation" && (
                    <ImplementationGraphic key="implementation" />
                )}
             </AnimatePresence>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};
