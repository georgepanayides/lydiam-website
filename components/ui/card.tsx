import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "bordered" | "glass" | "gradient";
}

export const Card = ({ children, className = "", variant = "default" }: CardProps) => {
  const baseStyles = "rounded-xl p-6 transition-all duration-200";
  
  const variants = {
    default: "bg-white dark:bg-dark-800 shadow-sm border border-gray-100 dark:border-gray-700",
    bordered: "bg-transparent border border-gray-200 dark:border-gray-700",
    glass: "bg-white/70 dark:bg-dark-800/60 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-xl",
    gradient: "bg-gradient-to-br from-white to-gray-50 dark:from-dark-800 dark:to-dark-900 border border-gray-100 dark:border-dark-700 shadow-md",
  };

  return (
    <div className={cn(baseStyles, variants[variant], className)}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-xl font-bold text-dark-900 dark:text-white font-organetto ${className}`}>{children}</h3>
);

export const CardDescription = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-gray-500 dark:text-gray-400 text-sm ${className}`}>{children}</p>
);

export const CardContent = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={className}>{children}</div>
);

export const CardFooter = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 ${className}`}>{children}</div>
);
