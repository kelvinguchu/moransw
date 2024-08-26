"use client";

import React from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
  gradientSize?: number;
  gradientColor?: string;
  gradientOpacity?: number;
}

export function MagicCard({
  children,
  className = "",
  gradientSize = 200,
  gradientColor = "#262626",
}: MagicCardProps) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

return (
  <div
    onMouseMove={
      isMobile
        ? undefined // Disable the mouse move effect on mobile
        : (e) => {
            const { left, top } = e.currentTarget.getBoundingClientRect();
            mouseX.set(e.clientX - left);
            mouseY.set(e.clientY - top);
          }
    }
    className={cn(
      "group relative flex size-full overflow-hidden rounded-xl shadow-lg dark:shadow-sm-white bg-neutral-100 dark:bg-neutral-900 text-black dark:text-white",
      className
    )}>
    <div className='relative z-10 p-4'>{children}</div>
    {!isMobile && (
      <motion.div
        className='pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          background: useMotionTemplate`
            radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 100%)
          `,
        }}
      />
    )}
  </div>
);

}
