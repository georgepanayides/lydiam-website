import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "gradient";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer relative overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-600",
    secondary: "bg-secondary text-dark-900 hover:bg-secondary-600",
    outline: "border border-primary text-primary hover:bg-primary-50",
    ghost: "hover:bg-gray-100 text-gray-700",
    dark: "bg-dark text-white hover:bg-dark-600",
    gradient: "text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] border-0 bg-[url('/assets/gradient-bg/Gradient.jpg')] bg-cover bg-center",
  };

  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8 text-lg",
  };

  return (
    <button className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
};
