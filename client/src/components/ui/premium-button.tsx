import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

import { HTMLMotionProps } from "framer-motion";

interface PremiumButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  glow?: boolean;
  children: React.ReactNode;
}

export const PremiumButton = React.forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ className, variant = "primary", size = "md", glow = true, children, ...props }, ref) => {
    const baseStyles = "relative inline-flex items-center justify-center font-display font-bold uppercase tracking-wider transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none overflow-hidden group";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-primary/90 border border-primary/50",
      secondary: "bg-white text-black hover:bg-gray-100 border border-white/50",
      outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary/10",
      ghost: "bg-transparent text-foreground hover:bg-white/5",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "h-11 px-6 text-sm",
      lg: "h-14 px-8 text-base",
      xl: "h-16 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {/* Glow Effect */}
        {glow && variant === "primary" && (
          <div className="absolute inset-0 -z-10 bg-primary/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        )}
        
        {/* Shine Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-10" />

        <span className="relative z-20 flex items-center gap-2">
          {children}
        </span>
      </motion.button>
    );
  }
);

PremiumButton.displayName = "PremiumButton";
