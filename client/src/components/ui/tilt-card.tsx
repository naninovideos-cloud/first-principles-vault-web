import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import React, { useRef } from "react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  gradientColor?: string;
}

export const TiltCard = ({ children, className, gradientColor = "#007AFF" }: TiltCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    x.set(clientX - left);
    y.set(clientY - top);
  }

  const maskImage = useMotionTemplate`radial-gradient(240px at ${mouseX}px ${mouseY}px, white, transparent)`;
  const style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <div
      onMouseMove={onMouseMove}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-white/10 bg-card/50 backdrop-blur-sm transition-colors hover:border-white/20",
        className
      )}
    >
      <div className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100">
        <div
          className="absolute inset-0 z-30"
          style={{
            background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), ${gradientColor}, transparent 40%)`,
          }}
        />
      </div>
      
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 opacity-0 transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-white/20 to-white/5" />
      </motion.div>

      <div className="relative z-20 h-full">{children}</div>
    </div>
  );
};
