// Meteors.tsx
import React from "react";
import { cn } from "@/lib/utils";
import useWindowSize from '../../hooks/useWindowSize';

interface MeteorsProps {
  number?: number;
  className?: string;
}

export const Meteors: React.FC<MeteorsProps> = ({ number = 20, className }) => {
  const { width } = useWindowSize();
  const isMobile = width !== undefined ? width < 768 : false;

  const adjustedNumber = isMobile ? Math.floor(number / 2) : number;

  const meteors = new Array(adjustedNumber).fill(true).map(() => ({
    id: Math.random().toString(36).substring(7),
    left: Math.floor(Math.random() * (400 - -400) + -400),
    animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
    animationDuration: `${Math.random() * (6 - 2) + 2}s`,
  }));

  return (
    <>
      {meteors.map((meteor) => (
        <span
          key={meteor.id}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className
          )}
          style={{
            top: 0,
            left: `${meteor.left}px`,
            animationDelay: meteor.animationDelay,
            animationDuration: meteor.animationDuration,
          }}></span>
      ))}
    </>
  );
};
