"use client";

import { FadeIn } from "@/components/ui/motion";
import { motion } from "framer-motion";
import { Landmark, Coins, Briefcase, Scale, Network } from "lucide-react";
import Image from "next/image";

const partners = [
  {
    icon: Landmark,
    title: "Regulated Banks",
    description: "Tier-1 institutions providing secure fiat rails.",
  },
  {
    icon: Coins,
    title: "Liquidity Providers",
    description: "Deep liquidity for major and exotic pairs.",
  },
  {
    icon: Network,
    title: "Payment Networks",
    description: "Global settlement infrastructure.",
  },
  {
    icon: Briefcase,
    title: "Crypto Services",
    description: "Licensed custodians and exchanges.",
  },
  {
    icon: Scale,
    title: "Advisory",
    description: "Legal, tax, and compliance specialists.",
  },
];

export const PartnerNetwork = () => {
  return (
    <section className="py-24 bg-white dark:bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
              The Power of <br />
              <span className="text-primary-500">Connection</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Lydiam acts as the coordinating layer for a vast ecosystem. We give you access to best-in-class capabilities without the headache of managing multiple counterparties.
            </p>
          </FadeIn>
        </div>

        {/* Desktop Circular Layout */}
        <div className="hidden lg:block relative h-[900px] w-full max-w-6xl mx-auto mt-10">
            {/* Center Node */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 p-1 shadow-[0_0_40px_rgba(var(--primary-500),0.3)] flex flex-col items-center justify-center text-white text-center z-20 relative rounded-full overflow-hidden"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image 
                            src="/assets/gradient-bg/Gradient.jpg" 
                            alt="Gradient Background" 
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
                    <div className="w-24 h-24 flex items-center justify-center mb-3 backdrop-blur-sm">
                        <Image 
                            src="assets/logos/logo-white-svg.svg" 
                            alt="Lydiam Logo" 
                            width={48} 
                            height={48} 
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>
                
                {/* Pulsing Rings */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.5, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-primary-200 dark:border-dark-600 rounded-full -z-10" 
                />
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 0.3, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-primary-100 dark:border-dark-700 rounded-full -z-20" 
                />
            </div>

            {/* Connecting Lines & Particles */}
            {partners.map((_, index) => {
                const angle = (index * (360 / partners.length)) - 90;
                return (
                    <div 
                        key={`line-${index}`}
                        className="absolute top-1/2 left-1/2 h-[1px] bg-gradient-to-r from-primary-500/30 to-transparent origin-left z-0"
                        style={{ 
                            width: '350px', 
                            transform: `rotate(${angle}deg) translateY(-50%)`,
                        }}
                    >
                        <motion.div 
                            className="absolute top-0 left-0 w-1.5 h-1.5 rounded-full bg-primary-500 shadow-[0_0_8px_rgba(var(--primary-500),1)]"
                            animate={{ left: ["100%", "0%"], opacity: [0, 1, 0] }}
                            transition={{ duration: 3, repeat: Infinity, delay: index * 0.5, ease: "easeInOut" }}
                            style={{ top: '-2px' }}
                        />
                    </div>
                )
             })}

            {/* Orbiting Nodes */}
            {partners.map((partner, index) => {
                const angle = (index * (360 / partners.length)) - 90; // Start top
                const radius = 350;
                const rad = angle * (Math.PI / 180);
                const x = Math.cos(rad) * radius;
                const y = Math.sin(rad) * radius;

                return (
                    <div key={index} className="absolute top-1/2 left-1/2 z-25" style={{ marginLeft: x, marginTop: y }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                            whileInView={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + 0.5 }}
                            className="absolute w-64"
                        >
                            <div className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-gray-100 dark:border-dark-700 shadow-lg hover:border-primary-500/30 hover:shadow-xl transition-all duration-300 text-center group">
                                <div className="w-12 h-12 mx-auto rounded-xl bg-primary-50 dark:bg-dark-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform text-primary-600 dark:text-primary-400">
                                    <partner.icon size={24} />
                                </div>
                                <h3 className="font-bold text-dark-900 dark:text-white mb-2">{partner.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{partner.description}</p>
                            </div>
                        </motion.div>
                    </div>
                );
            })}
        </div>

        {/* Mobile Stack Layout */}
        <div className="lg:hidden space-y-8">
             <FadeIn className="bg-gradient-to-br from-primary-600 to-primary-800 p-8 rounded-2xl text-white text-center shadow-lg">
                <div className="w-16 h-16 mx-auto rounded-full bg-white/20 flex items-center justify-center mb-4 backdrop-blur-sm">
                    <span className="font-organetto font-bold text-2xl">L</span>
                </div>
                <h3 className="font-bold text-xl mb-2">One Platform</h3>
                <p className="text-primary-100">Centralizing the ecosystem</p>
             </FadeIn>
             
             <div className="grid gap-4">
                {partners.map((partner, i) => (
                    <FadeIn key={i} delay={i * 0.1} className="bg-white dark:bg-dark-800 p-6 rounded-xl border border-gray-100 dark:border-dark-700 flex items-start gap-4 shadow-sm">
                        <div className="shrink-0 w-10 h-10 rounded-lg bg-primary-50 dark:bg-dark-700 flex items-center justify-center text-primary-600 dark:text-primary-400 mt-1">
                            <partner.icon size={20} />
                        </div>
                        <div>
                            <h3 className="font-bold text-dark-900 dark:text-white mb-1">{partner.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{partner.description}</p>
                        </div>
                    </FadeIn>
                ))}
             </div>
        </div>

      </div>
    </section>
  );
};
