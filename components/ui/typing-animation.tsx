"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Indie_Flower } from "next/font/google";

const indieflower = Indie_Flower({
  subsets: ["latin"],
  variable: "--font-indie-flower",
  weight: "400",
});

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenTexts?: number;
  minHeight?: string; // New prop for setting minimum height
  className?: string;
}

export default function TypingAnimation({
  texts,
  typingSpeed = 150,
  deletingSpeed = 100,
  delayBetweenTexts = 1000,
  minHeight = "5rem", // Default minimum height
  className,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
        if (displayedText.length > 0) {
          setDisplayedText((prev) => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      } else {
        if (displayedText.length < currentText.length) {
          setDisplayedText(
            (prev) => prev + currentText.charAt(displayedText.length)
          );
        } else {
          setTimeout(() => setIsDeleting(true), delayBetweenTexts);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    currentTextIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delayBetweenTexts,
  ]);

  return (
    <h1
      className={cn(
        "font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        indieflower.className,
        className
      )}
      style={{ minHeight }}>
      {displayedText}
    </h1>
  );
}