import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  parallax?: boolean;
  fullHeight?: boolean;
  id?: string;
}

export const AnimatedSection = ({
  children,
  className,
  delay = 0,
  parallax = false,
  fullHeight = false,
  id,
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, parallax ? -100 : 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      style={{ y: parallax ? y : 0 }}
      className={cn(
        "relative w-full overflow-hidden",
        fullHeight ? "min-h-screen flex items-center" : "py-24",
        className
      )}
    >
      {children}
    </motion.section>
  );
};
