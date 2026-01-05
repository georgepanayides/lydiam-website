"use client";

import { motion } from "framer-motion";
import { Building2, Globe2, ShieldCheck } from "lucide-react";

const locations = [
  { 
    name: "London, UK", 
    label: "Strategic HQ", 
    icon: Building2,
    top: "35%", 
    left: "15%", 
  },
  { 
    name: "Dubai, UAE", 
    label: "MENA Gateway", 
    icon: Globe2,
    top: "65%", 
    left: "40%", 
  },
  { 
    name: "European Union", 
    label: "Regulated Entity", 
    icon: ShieldCheck,
    top: "15%", 
    left: "35%", 
  },
];

export const GlobalMapGraphic = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center md:justify-end overflow-visible">
      {/* 
        The Globe Container 
        - Huge size to ensure curvature
        - Positioned to the right to be clipped
        - Tilted
      */}
      <div className="absolute right-[-20%] md:right-[-40%] -bottom-52 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-800 dark:to-dark-900 shadow-[inset_0_0_60px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-dark-700 overflow-hidden rotate-[-15deg]">
        
        {/* Grid Texture */}
        <motion.div 
          animate={{ 
            backgroundPosition: ["0px 0px", "-40px 0px"] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute inset-0 opacity-60 dark:opacity-60"
          style={{
            backgroundImage: "radial-gradient(#888 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Globe Wireframe SVG */}
        <svg className="absolute inset-0 w-full h-full text-gray-400 dark:text-gray-600 opacity-30 pointer-events-none" viewBox="0 0 200 200">
            {/* Longitudes */}
            <ellipse cx="100" cy="100" rx="98" ry="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="80" ry="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="60" ry="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="40" ry="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <ellipse cx="100" cy="100" rx="20" ry="98" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <line x1="100" y1="2" x2="100" y2="198" stroke="currentColor" strokeWidth="0.5" />

            {/* Latitudes */}
            <path d="M2,100 H198" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M4,80 Q100,90 196,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M10,60 Q100,75 190,60" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20,40 Q100,60 180,40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M40,20 Q100,40 160,20" fill="none" stroke="currentColor" strokeWidth="0.5" />
            
            <path d="M4,120 Q100,110 196,120" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M10,140 Q100,125 190,140" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M20,160 Q100,140 180,160" fill="none" stroke="currentColor" strokeWidth="0.5" />
            <path d="M40,180 Q100,160 160,180" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        
        {/* Atmosphere Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent_70%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none mix-blend-overlay" />

        {/* Locations - Layered on top */}
        <div className="absolute inset-0">
          {locations.map((loc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: 15 }}
                whileInView={{ opacity: 1, y: 0, rotate: 15 }}
                whileHover={{ scale: 1.05, rotate: 15 }}
                viewport={{ once: true }}
                transition={{ 
                  opacity: { duration: 0.4, delay: 0.5 + (i * 0.2) },
                  y: { 
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: 0.5 + (i * 0.2)
                  },
                  default: { duration: 0.2 }
                }}
                className="absolute flex items-center gap-3 p-2 pr-4 bg-white/80 dark:bg-dark-800/80 backdrop-blur-md rounded-full shadow-lg border border-gray-100 dark:border-dark-700 z-10 cursor-default"
                style={{ top: loc.top, left: loc.left }}
              >
                <div className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center shadow-md">
                  <loc.icon size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-dark-900 dark:text-white whitespace-nowrap">{loc.name}</span>
                  <span className="text-[10px] text-gray-500 dark:text-gray-400 uppercase tracking-wider">{loc.label}</span>
                </div>
              </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
