"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CTAGraphic() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center perspective-1000 overflow-visible">
      
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-b from-primary-100/20 to-transparent dark:from-primary-900/10 rounded-full blur-[100px]" />

      {/* The Kinetic Sovereign (Abstract Coin) */}
      <motion.div 
        className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px]"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ rotateY: 0, rotateX: 10 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {/* COIN THICKNESS (Simulated by stacking layers) */}
        {Array.from({ length: 16 }).map((_, i) => (
            <div
                key={i}
                className={cn(
                    "absolute inset-0 rounded-full border border-yellow-600/20 dark:border-yellow-500/10",
                    i % 2 === 0 ? "bg-yellow-500/5" : "bg-dark-900/5"
                )}
                style={{
                    transform: `translateZ(${i * 2 - 16}px)`,
                    width: "100%",
                    height: "100%",
                }}
            />
        ))}

        {/* FRONT FACE */}
        <div 
            className="absolute inset-0 rounded-full backface-hidden"
            style={{ transform: "translateZ(16px)" }}
        >
            {/* Outer Rim */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-500 to-yellow-700 p-[2px] shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-dark-900/95 backdrop-blur-sm overflow-hidden">
                    
                    {/* Radial Texture */}
                    <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0_340deg,rgba(255,255,255,0.1)_360deg)] opacity-30 animate-spin-slow" />
                    
                    {/* Inner Gold Ring */}
                    <div className="absolute inset-4 rounded-full border border-yellow-500/30" />
                    <div className="absolute inset-12 rounded-full border border-yellow-500/10" />

                    {/* Center Content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-32 h-32 md:w-48 md:h-48">
                            <Image 
                                src="/assets/logos/icons/Logo_Star Cool White.svg" 
                                alt="Lydiam Star" 
                                fill
                                className="object-contain drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]"
                            />
                        </div>
                    </div>

                    {/* Text Ring */}
                    <svg className="absolute inset-0 w-full h-full animate-spin-reverse-slow opacity-40" viewBox="0 0 100 100">
                        <path id="textPath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                        <text className="text-[5px] font-mono font-bold tracking-[0.3em] fill-yellow-500 uppercase">
                            <textPath href="#textPath" startOffset="0%">
                                • Global Treasury • Limitless Power • Future Finance • Lydiam Network
                            </textPath>
                        </text>
                    </svg>
                </div>
            </div>
            
            {/* Shine Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* BACK FACE */}
        <div 
            className="absolute inset-0 rounded-full backface-hidden"
            style={{ transform: "translateZ(-16px) rotateY(180deg)" }}
        >
             <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-700 via-yellow-500 to-yellow-200 p-[2px] shadow-2xl">
                <div className="absolute inset-0 rounded-full bg-dark-900/95 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                    {/* Grid Texture */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:20px_20px]" />
                    
                    {/* Back Content */}
                    <div className="text-center">
                        <div className="text-yellow-500/50 text-xs font-mono tracking-[0.5em] uppercase mb-2">Established</div>
                        <div className="text-4xl font-bold text-white/90 font-organetto">2025</div>
                    </div>
                </div>
            </div>
        </div>

      </motion.div>

      {/* Orbiting Elements (Satellites) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full border border-gray-200/20 dark:border-gray-700/30"
        style={{ rotateX: 70 }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.5)]" />
      </motion.div>

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full border border-gray-200/20 dark:border-gray-700/30"
        style={{ rotateX: 70, rotateY: 45 }}
        animate={{ rotateZ: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-yellow-500 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.5)]" />
      </motion.div>

    </div>
  );
}
