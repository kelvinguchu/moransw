"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface StarProps {
  delay: number;
  top: number; // Vertical position in percentage
  left: number; // Horizontal position in percentage
  index: number; // Unique index for each star
}

interface GlowingStarsBackgroundProps {
  className?: string;
}

const Star: React.FC<
  StarProps & { updateStarPosition: (index: number) => void }
> = ({ delay, top, left, index, updateStarPosition }) => {
  const [isAnimating, setIsAnimating] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "loop",
        delay,
      }}
      onAnimationComplete={() => {
        setIsAnimating(false);
        setTimeout(() => {
          updateStarPosition(index);
          setIsAnimating(true);
        }, 1000 + Math.random() * 2000);
      }}
      className='absolute h-1 w-1 rounded-full bg-white'
      style={{
        top: `${top}%`,
        left: `${left}%`,
        display: isAnimating ? "block" : "none",
      }}
    />
  );
};

export const GlowingStarsBackground: React.FC<GlowingStarsBackgroundProps> = ({
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const numberOfStars = 100;

  useEffect(() => {
    setStars(generateStars(numberOfStars));
  }, []);

  const updateStarPosition = (index: number) => {
    setStars((currentStars) => {
      const newStars = [...currentStars];
      let newPosition: { top: number; left: number };
      let isTooClose: boolean;

      do {
        newPosition = {
          top: Math.random() * 100,
          left: Math.random() * 100,
        };
        isTooClose = newStars.some(
          (star, idx) =>
            idx !== index &&
            Math.sqrt(
              Math.pow(star.top - newPosition.top, 2) +
                Math.pow(star.left - newPosition.left, 2)
            ) < 3
        ); // Ensure at least 3% distance
      } while (isTooClose);

      newStars[index] = { ...newStars[index], ...newPosition };
      return newStars;
    });
  };

  const generateStars = (count: number) =>
    Array.from({ length: count }, (_, idx) => ({
      delay: Math.random() * 3,
      top: Math.random() * 100,
      left: Math.random() * 100,
      index: idx,
    }));

  return (
    <div className={`absolute inset-0 ${className}`}>
      {stars.map((star) => (
        <Star
          key={star.index}
          {...star}
          updateStarPosition={updateStarPosition}
        />
      ))}
    </div>
  );
};
