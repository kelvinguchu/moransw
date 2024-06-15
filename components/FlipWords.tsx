"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FlipWords = ({
  words,
  colors,
  duration = 3000,
  className,
}: {
  words: string[];
  colors: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const startAnimation = useCallback(() => {
    const nextWordIndex = (words.indexOf(currentWord) + 1) % words.length;
    setCurrentWord(words[nextWordIndex]);
    setCurrentColor(colors[nextWordIndex]);
    setIsAnimating(true);
  }, [currentWord, words, colors]);

  useEffect(() => {
    if (!isAnimating)
      setTimeout(() => {
        startAnimation();
      }, duration);
  }, [isAnimating, duration, startAnimation]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsAnimating(false);
      }}>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          type: "spring",
          stiffness: 100,
          damping: 10,
        }}
        exit={{
          opacity: 0,
          y: -40,
          x: 40,
          filter: "blur(8px)",
          scale: 2,
          position: "absolute",
        }}
        className={cn("z-10 inline-block relative text-left px-2", className)}
        key={currentWord}>
        <span
          className='inline-block px-2 py-1 rounded'
          style={{
            color: currentColor,
            border: `2px solid ${currentColor}`,
            boxShadow: `0 0 8px ${currentColor}`,
            borderRadius: "0.5rem",
          }}>
          {currentWord.split(/( )/).map((char, index) => (
            <motion.span
              key={currentWord + index}
              initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              className='inline-block'>
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.div>
    </AnimatePresence>
  );
};
