"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";

import { Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

interface VelocityScrollProps {
  text: string;
  default_velocity?: number;
  className?: string;
}

interface ParallaxProps {
  children: string;
  baseVelocity: number;
  className?: string;
}

export const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function VelocityScroll({
  text,
  default_velocity = 5,
  className,
}: VelocityScrollProps) {
  function ParallaxText({
    children,
    baseVelocity = 100,
    className,
  }: ParallaxProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
      damping: 50,
      stiffness: 400,
    });

    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
      clamp: false,
    });

    const [repetitions, setRepetitions] = useState(1);
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
      const calculateRepetitions = () => {
        if (containerRef.current && textRef.current) {
          const containerWidth = containerRef.current.offsetWidth;
          const textWidth = textRef.current.offsetWidth;
          const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
          setRepetitions(newRepetitions);
        }
      };

      calculateRepetitions();

      const debouncedResize = debounce(calculateRepetitions, 100);
      window.addEventListener("resize", debouncedResize);
      return () => window.removeEventListener("resize", debouncedResize);
    }, [children]);

    const x = useTransform(baseX, (v) => `${wrap(-100, 0, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
      if (delta > 100) delta = 100; // Cap delta to prevent large jumps
      let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

      if (velocityFactor.get() < 0) {
        directionFactor.current = -1;
      } else if (velocityFactor.get() > 0) {
        directionFactor.current = 1;
      }

      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    });

    return (
      <div
        className='w-full overflow-hidden whitespace-nowrap'
        ref={containerRef}>
        <motion.div className={cn("inline-block", className)} style={{ x }}>
          {Array.from({ length: repetitions }).map((_, i) => (
            <span key={i} ref={i === 0 ? textRef : null}>
              {children}{" "}
            </span>
          ))}
        </motion.div>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#F0EAF5] dark:from-black'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#F0EAF5] dark:from-black'></div>
      </div>
    );
  }

  return (
    <section className={`${spacegrotesk.className} relative w-full mb-3`}>
      <ParallaxText baseVelocity={default_velocity} className={className}>
        {text}
      </ParallaxText>
      <ParallaxText baseVelocity={-default_velocity} className={className}>
        {text}
      </ParallaxText>
    </section>
  );
}

// Simple debounce function
function debounce<T extends (...args: any[]) => any>(fn: T, ms: number) {
  let timer: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), ms);
  };
}
