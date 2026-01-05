"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

const ScrollRevealText = ({ 
  children, 
  className, 
  highlightColor = "text-dark-900 dark:text-white",
  progress,
  range = [0, 1]
}: { 
  children: string; 
  className?: string; 
  highlightColor?: string;
  progress: MotionValue<number>;
  range?: [number, number];
}) => {
  const words = children.split(" ");
  const amount = range[1] - range[0];
  const step = amount / words.length;

  return (
    <p className={`flex flex-wrap justify-center gap-x-[0.3em] gap-y-[0.1em] ${className}`}>
      {words.map((word, i) => {
        const start = range[0] + (i * step);
        const end = start + step;
        return (
          <Word key={i} range={[start, end]} progress={progress} highlightColor={highlightColor}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

const Word = ({ children, range, progress, highlightColor }: { children: string; range: [number, number]; progress: MotionValue<number>; highlightColor: string }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  
  return (
    <span className="relative">
      <span className="opacity-20">{children}</span>
      <motion.span 
        style={{ opacity }} 
        className={`absolute left-0 top-0 ${highlightColor}`}
      >
        {children}
      </motion.span>
    </span>
  );
};

export const Mission = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Opacity transforms for the three sections
  const titleOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 0.25], [0, -50]);
  
  const para1Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [0, 1, 1, 0]);
  const para1Y = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.65], [50, 0, 0, -50]);
  
  const para2Opacity = useTransform(scrollYProgress, [0.65, 0.75], [0, 1]);
  const para2Y = useTransform(scrollYProgress, [0.65, 0.75], [50, 0]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-gray-50 dark:bg-dark-900">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
        
        {/* Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 h-full flex items-center justify-center">
          
          {/* Title Section */}
          <motion.div 
            style={{ opacity: titleOpacity, y: titleY }}
            className="absolute inset-0 flex flex-col items-center justify-center max-w-5xl mx-auto text-center px-4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 text-primary-500 text-sm font-medium mb-12">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              <span className="font-audio text-xs md:text-sm">Why We Exist</span>
            </div>
            
            <h3 className="font-organetto text-4xl md:text-6xl lg:text-6xl font-bold text-dark-900 dark:text-white leading-[1.1]">
              Global Finance Has Outgrown <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 dark:from-gray-600 dark:to-gray-800">
                Traditional Banking Models.
              </span>
            </h3>
          </motion.div>

          {/* Paragraph 1 */}
          <motion.div 
            style={{ opacity: para1Opacity, y: para1Y }}
            className="absolute inset-0 flex items-center justify-center max-w-4xl mx-auto text-center px-4"
          >
            <ScrollRevealText 
              progress={scrollYProgress}
              range={[0.35, 0.55]}
              className="text-2xl md:text-4xl font-light text-dark-900 dark:text-white leading-relaxed"
            >
              Businesses and individuals operating internationally need more than a bank account or a fintech app—they need coordination, expertise, and access.
            </ScrollRevealText>
          </motion.div>

          {/* Paragraph 2 */}
          <motion.div 
            style={{ opacity: para2Opacity, y: para2Y }}
            className="absolute inset-0 flex items-center justify-center max-w-4xl mx-auto text-center px-4"
          >
            <ScrollRevealText 
                progress={scrollYProgress}
                range={[0.75, 0.95]}
                className="text-2xl md:text-4xl font-medium text-dark-900 dark:text-white leading-relaxed"
                highlightColor="text-primary-600 dark:text-primary-400"
            >
              Lydiam was built to act as a financial operating system and remove complexity, bringing together accounts, FX, crypto, payments, advisory, and partner execution under one structure—so clients can operate globally without friction.
            </ScrollRevealText>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
