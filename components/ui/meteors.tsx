// Meteors.tsx
import React from "react";
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 10, className }) => {

  // Array of 7 radiant colors
  const colors = [
    "#FF5733", // Radiant orange-red
    "#FFC300", // Bright yellow
    "#DAF7A6", // Vivid green
    "#900C3F", // Deep magenta
    "#581845", // Bold purple
    "#33FFCE", // Electric teal
    "#FF33F6", // Neon pink
  ];

  const adjustedNumber = number;
  const meteors = new Array(adjustedNumber).fill(true).map(() => ({
    id: Math.random().toString(36).substring(7),
    left: Math.floor(Math.random() * (400 - -400) + -400),
    animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
    animationDuration: `${Math.random() * (8 - 4) + 4}s`,
    color: colors[Math.floor(Math.random() * colors.length)], // Assign a random color from the array
  }));

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            className
          )}
          style={{
            top: 0,
            left: `${meteor.left}px`,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
            backgroundColor: meteor.color, // Apply the random color to the meteor body
          }}>
          <span
            className='absolute top-1/2 transform -translate-y-1/2 w-[50px] h-[1px]'
            style={{
              background: `linear-gradient(to right, ${meteor.color}, transparent)`, // Gradient from the meteor color to transparent
            }}
          />
        </span>
      ))}
    </>
  );
};
