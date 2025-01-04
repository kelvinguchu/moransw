"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollProgressProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollProgress = ({
  children,
  className,
}: ScrollProgressProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [pathLength, setPathLength] = useState(0);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Smooth spring animation for scroll progress
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  // Transform for the beam position
  const beamY = useTransform(springProgress, [0, 1], ["0%", "100%"]);

  // Transform for the fade effect
  const beamOpacity = useTransform(
    springProgress,
    // Input range
    [0, 0.05, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1],
    // Output range (opacity values)
    [1, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0]
  );

  useEffect(() => {
    if (progressRef.current) {
      setPathLength(progressRef.current.offsetHeight);
    }
  }, []);

  return (
    <motion.div ref={scrollRef} className={cn("relative w-full", className)}>
      {/* Progress Indicator - Hidden on mobile, visible from md breakpoint */}
      <div
        className='fixed hidden md:block left-8 top-24 z-50 h-[70vh]'
        ref={progressRef}>
        {/* Progress Line Container */}
        <motion.div
          className='absolute left-0 h-full'
          style={{ opacity: beamOpacity, y: beamY }}>
          {/* Beam Line */}
          <div className='absolute left-0 w-[2px] h-32 bg-gradient-to-b from-violet-500 via-violet-500 to-transparent' />

          {/* Progress Dot */}
          <div className='absolute -left-[5px] top-0 h-3 w-3'>
            <div className='h-full w-full rounded-full bg-black p-[2px] ring-2 ring-violet-500/50'>
              <div className='h-full w-full rounded-full bg-violet-500' />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className='relative'>{children}</div>
    </motion.div>
  );
};
