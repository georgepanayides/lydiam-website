"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { 
  Landmark, 
  Bitcoin, 
  CreditCard, 
  FileText, 
  X, 
  Check, 
  ShieldCheck,
  MoveHorizontal,
  AlertCircle
} from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { cn } from "@/lib/utils";

const ComparisonSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;

    const { left, width } = containerRef.current.getBoundingClientRect();
    let clientX;

    if ('touches' in event) {
      clientX = event.touches[0].clientX;
    } else {
      clientX = (event as MouseEvent).clientX;
    }

    const position = ((clientX - left) / width) * 100;
    setSliderPosition(Math.min(100, Math.max(0, position)));
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div 
        ref={containerRef}
        className="relative h-[600px] w-full rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.15)] dark:shadow-[0_-25px_50px_-12px_rgba(0,0,0,0.5)] border border-gray-200 dark:border-dark-700 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
        onMouseDown={handleMouseDown}
        onTouchStart={handleMouseDown}
      >
        {/* BEFORE IMAGE (The Friction) - Background Layer */}
        <div className="absolute inset-0 bg-gray-50 dark:bg-dark-900 flex items-center justify-center">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ef4444_1px,transparent_1px)] [background-size:16px_16px]" />
          
          {/* Labels - Moved inside Before Layer */}
          <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 dark:bg-dark-900/90 backdrop-blur rounded-lg shadow-sm border border-red-100 dark:border-red-900/30 text-red-600 dark:text-red-400 font-bold text-sm z-20 pointer-events-none">
            THE TRADITIONAL WAY
          </div>

          {/* Crack Graphic Overlay */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none text-red-900/10 dark:text-red-500/10" viewBox="0 0 400 400" preserveAspectRatio="none">
             <path d="M200,0 L180,100 L220,150 L150,250 L200,400" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="3" fill="none" />
             <path d="M0,200 L100,180 L150,220 L250,150 L400,200" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="3" fill="none" />
             <path d="M150,220 L50,350" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" fill="none" />
             <path d="M220,150 L350,50" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="2" fill="none" />
             <path d="M180,100 L100,50" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="1" fill="none" />
             <path d="M250,150 L300,250" vectorEffect="non-scaling-stroke" stroke="currentColor" strokeWidth="1" fill="none" />
          </svg>

          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center p-8 z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <div className="order-2 md:order-1 space-y-8 text-left pl-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-xs font-bold uppercase tracking-wider border border-red-200 dark:border-red-800">
                        <AlertCircle className="w-3 h-3" />
                        The Problem
                    </div>
                    <div>
                        <h3 className="font-organetto text-4xl md:text-5xl font-bold text-gray-400 dark:text-gray-600 line-through decoration-red-500/50 decoration-4 mb-4">
                            FRAGMENTED <br/> CHAOS
                        </h3>
                        <p className="text-gray-500 dark:text-gray-500 font-medium text-lg leading-relaxed">
                            Managing treasury across disconnected providers creates operational risk and kills efficiency.
                        </p>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Multiple logins & 2FA fatigue",
                            "Opaque FX rates & hidden fees",
                            "Slow T+2 settlement delays",
                            "Scattered reporting & data"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-base text-gray-400 dark:text-gray-600 font-medium">
                                <div className="w-6 h-6 rounded-full bg-red-50 dark:bg-red-900/10 flex items-center justify-center flex-shrink-0">
                                    <X className="w-3.5 h-3.5 text-red-400" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                
                {/* Disconnected Icons Graphic */}
                <div className="order-1 md:order-2 relative h-[400px] w-full flex items-center justify-center opacity-50 grayscale">
                    <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                    {[
                        { icon: Landmark, label: "Bank A" },
                        { icon: Bitcoin, label: "Crypto" },
                        { icon: CreditCard, label: "Payments" },
                        { icon: FileText, label: "Advisory" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 p-6 border-2 border-dashed border-gray-300 dark:border-dark-600 rounded-2xl bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm">
                        <item.icon className="w-10 h-10 text-gray-400" />
                        <span className="text-sm font-bold text-gray-400">{item.label}</span>
                        <X className="w-5 h-5 text-red-500" />
                        </div>
                    ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 text-center">
                        <p className="text-red-500 font-bold uppercase tracking-widest text-sm">Connection Failed</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* AFTER IMAGE (The Lydiam Way) - Foreground Layer (Clipped) */}
        <div 
          className="absolute inset-0 bg-white dark:bg-dark-800 overflow-hidden z-20"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-white dark:from-dark-800 dark:to-dark-900" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          {/* Labels - Moved inside After Layer */}
          <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 dark:bg-dark-900/90 backdrop-blur rounded-lg shadow-sm border border-primary-100 dark:border-primary-900/30 text-primary-600 dark:text-primary-400 font-bold text-sm z-20 pointer-events-none">
            THE LYDIAM WAY
          </div>

          <div className="relative w-full h-full max-w-5xl mx-auto flex items-center justify-center p-8 z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <div className="order-2 md:order-1 space-y-8 text-left pl-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold uppercase tracking-wider border border-primary-200 dark:border-primary-800">
                        <ShieldCheck className="w-3 h-3" />
                        The Solution
                    </div>
                    <div>
                        <h3 className="font-organetto text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
                            UNIFIED <br/> CONTROL
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 font-medium text-lg leading-relaxed">
                            One powerful operating system to manage your entire financial lifecycle in real-time.
                        </p>
                    </div>
                    <ul className="space-y-4">
                        {[
                            "Single secure access point",
                            "Wholesale interbank rates",
                            "Instant global settlement",
                            "Real-time consolidated view"
                        ].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-base text-dark-700 dark:text-gray-200 font-medium">
                                <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center flex-shrink-0">
                                    <Check className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                                </div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Connected Hub Graphic */}
                <div className="order-1 md:order-2 relative h-[400px] w-full flex items-center justify-center">
                    <div className="relative w-full max-w-sm h-[300px] flex items-center justify-center">
                        
                        {/* Connecting Rings (Moved to back) */}
                        <div className="absolute inset-0 border border-dashed border-primary-200 dark:border-primary-800/50 rounded-full scale-75 animate-[spin_60s_linear_infinite]" />
                        <div className="absolute inset-0 border border-primary-100 dark:border-primary-900/30 rounded-full scale-110 opacity-50 animate-[pulse_4s_ease-in-out_infinite]" />

                        {/* Central Hub */}
                        <div className="absolute z-20 w-28 h-28 bg-white dark:bg-dark-800 rounded-full shadow-2xl border border-primary-100 dark:border-primary-800 flex items-center justify-center">
                            <div className="w-20 h-20 bg-primary-500 rounded-full flex items-center justify-center shadow-inner animate-pulse">
                                <Image 
                                    src="/assets/logos/icons/Logo-09.svg" 
                                    alt="Lydiam" 
                                    width={40} 
                                    height={40} 
                                    className="w-10 h-10 brightness-0 invert"
                                />
                            </div>
                        </div>

                        {/* Connected Nodes */}
                        {[
                            { icon: Landmark, label: "Banking", angle: 0 },
                            { icon: Bitcoin, label: "Crypto", angle: 90 },
                            { icon: CreditCard, label: "Payments", angle: 180 },
                            { icon: FileText, label: "Advisory", angle: 270 },
                        ].map((node, i) => (
                            <div
                            key={i}
                            className="absolute flex flex-col items-center gap-2 z-10"
                            style={{
                                transform: `rotate(${node.angle}deg) translate(150px) rotate(-${node.angle}deg)`
                            }}
                            >
                            <div className="w-14 h-14 bg-white dark:bg-dark-800 rounded-2xl shadow-lg border border-primary-100 dark:border-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400">
                                <node.icon className="w-7 h-7" />
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150px] h-[3px] bg-primary-200 dark:bg-primary-800 -z-10" style={{ transform: `rotate(${node.angle + 180}deg) translate(75px)` }} />
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 text-center">
                        <p className="text-primary-600 dark:text-primary-400 font-bold uppercase tracking-widest text-sm">System Operational</p>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Slider Handle */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white z-30 cursor-ew-resize shadow-[0_0_20px_rgba(0,0,0,0.2)]"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-4 border-primary-500">
            <MoveHorizontal className="w-6 h-6 text-primary-500" />
          </div>
        </div>
        
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
          Drag the slider to fix the fragmentation
        </p>
      </div>
    </div>
  );
};

export const ProblemSolution = () => {
  return (
    <section className="py-24 bg-dark-100/25 dark:bg-dark-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeIn>
            <h2 className="font-organetto text-3xl md:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-6">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                Financial Operations
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              See how Lydiam turns chaos into clarity. One platform to replace them all.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <ComparisonSlider />
        </FadeIn>
      </div>
    </section>
  );
};

