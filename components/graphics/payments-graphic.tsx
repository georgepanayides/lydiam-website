"use client";

import { motion } from "framer-motion";
import { Wifi, CreditCard } from "lucide-react";
import Image from "next/image";

export function PaymentsGraphic() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-center overflow-visible [perspective:1000px]">
      
      {/* Card Stack Container */}
      <div className="relative w-[320px] h-[200px] flex items-center justify-center [transform-style:preserve-3d]">
        
        {/* Card 5 (Furthest Back) */}
        <motion.div
          initial={{ y: 0, x: 0, rotateX: 0, rotateZ: 0, opacity: 0, scale: 0.8 }}
          whileInView={{ y: -220, x: 110, rotateX: 40, rotateZ: -20, rotateY: 10, opacity: 0.2, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute w-[320px] h-[200px] bg-gray-950 rounded-2xl shadow-2xl border border-gray-800 p-6 flex flex-col justify-between z-0"
        >
            <div className="w-full h-full opacity-30 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="w-10 h-6 bg-gray-800 rounded-md" />
                    <Image 
                        src="/assets/images/payment-methods/light/paypal.svg" 
                        alt="PayPal" 
                        width={40} 
                        height={24} 
                        className="opacity-80 grayscale invert"
                    />
                </div>
                <div className="space-y-4">
                    <div className="w-full h-2 bg-gray-800 rounded-full" />
                    <div className="w-2/3 h-2 bg-gray-800 rounded-full" />
                </div>
            </div>
        </motion.div>

        {/* Card 4 (Back) */}
        <motion.div
          initial={{ y: 0, x: 0, rotateX: 0, rotateZ: 0, opacity: 0, scale: 0.85 }}
          whileInView={{ y: -165, x: 82, rotateX: 40, rotateZ: -20, rotateY: 10, opacity: 0.4, scale: 0.85 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute w-[320px] h-[200px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 p-6 flex flex-col justify-between z-0"
        >
            <div className="w-full h-full opacity-50 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <div className="w-10 h-6 bg-gray-800 rounded-md" />
                    <Image 
                        src="/assets/images/payment-methods/light/american-express.svg" 
                        alt="Amex" 
                        width={40} 
                        height={24} 
                        className="opacity-80 grayscale invert"
                    />
                </div>
                <div className="space-y-4">
                    <div className="w-full h-2 bg-gray-800 rounded-full" />
                    <div className="w-2/3 h-2 bg-gray-800 rounded-full" />
                </div>
            </div>
        </motion.div>

        {/* Card 3 (Middle Back) */}
        <motion.div
          initial={{ y: 0, x: 0, rotateX: 0, rotateZ: 0, opacity: 0, scale: 0.9 }}
          whileInView={{ y: -110, x: 55, rotateX: 40, rotateZ: -20, rotateY: 10, opacity: 0.7, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute w-[320px] h-[200px] bg-gray-900 rounded-2xl shadow-2xl border border-gray-700 p-6 flex flex-col justify-between z-10"
        >
            <div className="flex justify-between items-start">
                <div className="w-10 h-6 bg-gray-700 rounded-md" />
                <Wifi className="w-6 h-6 text-gray-600 rotate-90" />
            </div>
            <div>
                <div className="flex gap-4 mb-4">
                    <div className="w-full h-2 bg-gray-800 rounded-full" />
                    <div className="w-1/2 h-2 bg-gray-800 rounded-full" />
                </div>
                <div className="flex justify-between items-center">
                    <div className="w-20 h-4 bg-gray-800 rounded-full" />
                    <Image 
                        src="/assets/images/payment-methods/light/mastercard.svg" 
                        alt="Mastercard" 
                        width={40} 
                        height={24} 
                        className="opacity-80 grayscale"
                    />
                </div>
            </div>
        </motion.div>

        {/* Card 2 (Middle) */}
        <motion.div
          initial={{ y: 0, x: 0, rotateX: 0, rotateZ: 0, opacity: 0, scale: 0.95 }}
          whileInView={{ y: -55, x: 27, rotateX: 40, rotateZ: -20, rotateY: 10, opacity: 1, scale: 0.95 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="absolute w-[320px] h-[200px] bg-dark-800 rounded-2xl shadow-2xl border border-dark-600 p-6 flex flex-col justify-between z-20"
        >
            <div className="flex justify-between items-start">
                <Image 
                    src="/assets/logos/icons/Logo_Star Cool White.svg" 
                    alt="Lydiam" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 opacity-50"
                />
                <Wifi className="w-6 h-6 text-gray-500 rotate-90" />
            </div>
            <div>
                <p className="text-gray-400 font-mono text-lg tracking-widest mb-4">**** **** **** 8829</p>
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-[10px] text-gray-500 uppercase tracking-wider mb-1">Card Holder</p>
                        <p className="text-sm font-bold text-gray-300">ALEXANDER SMITH</p>
                    </div>
                    <div className="flex -space-x-3">
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                        <div className="w-8 h-8 rounded-full bg-white/10" />
                    </div>
                </div>
            </div>
        </motion.div>

        {/* Card 1 (Front) */}
        <motion.div
          initial={{ y: 0, x: 0, rotateX: 0, rotateZ: 0, opacity: 0 }}
          whileInView={{ y: 0, x: 0, rotateX: 40, rotateZ: -20, rotateY: 10, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute w-[320px] h-[200px] bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-2xl border border-primary-500/50 p-6 flex flex-col justify-between z-30 overflow-hidden"
        >
            {/* Texture */}
            <div className="absolute inset-0 bg-[url('/assets/gradient-bg/Gradient.jpg')] opacity-20 mix-blend-overlay bg-cover" />
            
            <div className="relative z-10 flex justify-between items-start">
                <div className="flex items-center gap-2">
                    <Image 
                        src="/assets/logos/icons/Logo_Star Cool White.svg" 
                        alt="Lydiam" 
                        width={32} 
                        height={32} 
                        className="w-8 h-8"
                    />
                    <span className="font-organetto font-bold text-white tracking-wide">Lydiam</span>
                </div>
                <Wifi className="w-6 h-6 text-white/70 rotate-90" />
            </div>
            
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-7 bg-yellow-500/20 rounded-md border border-yellow-500/40 flex items-center justify-center">
                        <div className="w-6 h-4 border border-yellow-500/60 rounded-[2px]" />
                    </div>
                    <p className="text-white font-mono text-lg tracking-widest shadow-sm">**** **** **** 4242</p>
                </div>
                
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-[10px] text-primary-200 uppercase tracking-wider mb-1">Card Holder</p>
                        <p className="text-sm font-bold text-white">LYDIAM BUSINESS</p>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-8 h-5 bg-white/90 rounded flex items-center justify-center">
                            <span className="text-[10px] font-bold text-blue-800 italic">VISA</span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>

      </div>
    </div>
  );
}
