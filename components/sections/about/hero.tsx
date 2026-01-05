"use client";

import { FadeIn } from "@/components/ui/motion";
import { motion } from "framer-motion";
import Image from "next/image";

export const AboutHero = () => {
  return (
    <section className="relative py-20 lg:py-40 bg-white dark:bg-dark-900 overflow-x-hidden overflow-y-visible">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Gradient Blob Background */}
        <div className="absolute top-[-70%] left-1/2 -translate-x-1/2 w-[1000px] h-[800px] opacity-30 dark:opacity-30">
          <div className="absolute inset-0 [mask-image:radial-gradient(closest-side,black,transparent)]">
              <Image 
                  src="/assets/gradient-bg/Gradient.jpg" 
                  alt="Gradient" 
                  fill
                  className="object-cover"
                  priority
              />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <h1 className="font-organetto text-4xl md:text-5xl lg:text-6xl font-bold text-dark-900 dark:text-white mb-6">
              Simplifying <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Global Finance
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              We are the bridge between traditional banking and the digital asset economy.
            </p>
            
          </FadeIn>
        </div>
      </div>

      {/* Abstract Digital Horizon Bridge */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-48 overflow-hidden z-20 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full flex items-end justify-center"
        >
           {/* The Arch */}
           <svg viewBox="0 0 1440 120" className="w-full h-full text-primary-500/30 dark:text-primary-400/30" preserveAspectRatio="none">
              <motion.path 
                d="M0,120 Q720,20 1440,120" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              {/* Glow Effect */}
              <motion.path 
                d="M0,120 Q720,20 1440,120" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="8"
                className="blur-md opacity-50"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
           </svg>
           
           {/* Vertical Connection Beam */}
           <motion.div 
             className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-gradient-to-t from-primary-500 to-transparent"
             initial={{ height: 0 }}
             animate={{ height: "100%" }}
             transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
           />

           {/* Stars along the arc */}
           {[0.15, 0.3, 0.42, 0.5, 0.58, 0.7, 0.85].map((t, i) => {
              const y = 200 * t * t - 200 * t + 120; // Quadratic Bezier y-coordinate
              const top = (y / 120) * 100;
              const dist = Math.abs(t - 0.5);
              const scale = Math.max(0.4, 1 - dist * 1.5); // Bigger at center
              const opacity = Math.max(0.3, 1 - dist * 2); // More opaque at center
              
              return (
                <motion.div
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{ 
                    left: `${t * 100}%`, 
                    top: `${top}%` 
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: opacity, scale: scale }}
                  transition={{ duration: 0.5, delay: 2 + (dist * 1) }} // Stagger from center outwards
                >
                  <div className="relative w-6 h-6 md:w-8 md:h-8">
                    <Image 
                      src="/assets/logos/icons/Logo_Star Circle Black.svg" 
                      alt="Star" 
                      fill
                      className="dark:invert object-contain"
                    />
                  </div>
                </motion.div>
              );
           })}
        </motion.div>
      </div>
    </section>
  );
};
