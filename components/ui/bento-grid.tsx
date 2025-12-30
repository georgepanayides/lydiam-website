"use client";

import React, { useState, useRef } from "react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className = "" }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const BentoGridItem = ({
  className = "",
  title,
  description,
  header,
  icon,
  children,
}: BentoGridItemProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setOpacity(0.5);
  };

  const handleBlur = () => {
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.5);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "row-span-1 rounded-xl group/bento transition duration-200 shadow-input dark:shadow-none p-6 bg-white dark:bg-dark-800 border border-gray-100 dark:border-gray-700 justify-between flex flex-col space-y-4 relative overflow-hidden min-h-[320px]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -inset-[40px] transition duration-300 blur-2xl"
        style={{
          opacity,
          background: `url('/assets/gradient-bg/Gradient.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: `radial-gradient(circle 200px at ${position.x + 40}px ${position.y + 40}px, black, transparent)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${position.x + 40}px ${position.y + 40}px, black, transparent)`,
        }}
      />
      <div className="relative z-10">
        {header}
        <div className="transition duration-200">
          {icon}
          <div className="font-organetto font-bold text-dark-900 dark:text-white mb-2 mt-2">
            {title}
          </div>
          <div className="font-normal text-gray-600 dark:text-gray-400 text-xs">
            {description}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
