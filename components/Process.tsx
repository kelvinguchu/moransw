"use client";
import React, { useState, useRef, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { Space_Grotesk } from "next/font/google";


const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

export function Process() {
  return (
    <>
      <div className='py-5 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8'>
        <Card
          title='Step 1: Call & Meet'
          description='Begin with a foundational meeting to set goals and align on the project scope, ensuring a clear path forward'
          icon={<MoranIcon />}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName='bg-emerald-900'
          />
        </Card>
        <Card
          title='Step 2: Development'
          description='Engage in intensive development using cutting-edge technology to create a refined prototype through iterative enhancements.'
          icon={<MoranIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-black'
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className='absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90' />
        </Card>
        <Card
          title='Step 3: Deliver'
          description='Conclude with rigorous testing and final adjustments, focusing on quality assurance for a successful project launch.'
          icon={<MoranIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-sky-600'
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, icon, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Update device type based on viewport width
  useEffect(() => {
    const updateDeviceType = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", updateDeviceType);
    updateDeviceType(); // Initialize at component mount

    return () => {
      window.removeEventListener("resize", updateDeviceType);
    };
  }, []);

  // Intersection Observer for mobile devices with a delay
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMobile) {
      const observer = new IntersectionObserver(
        (entries) => {
          const [entry] = entries;
          if (entry.isIntersecting) {
            timeoutId = setTimeout(() => {
              setIsVisible(true);
            }, 1500); // Delay setting visibility to true by 1.5 seconds
          } else {
            clearTimeout(timeoutId); // Clear the timeout if the element leaves the view
            setIsVisible(false);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        clearTimeout(timeoutId); // Ensure the timeout is cleared on component unmount
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [isMobile]);

  return (
    <div
      ref={ref}
      onMouseEnter={() => !isMobile && setIsVisible(true)}
      onMouseLeave={() => !isMobile && setIsVisible(false)}
      className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-[20rem] w-full mx-auto py-4 h-[30rem] relative'>
      <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0'>
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative w-full z-20'>
        <div
          className={`text-center transition duration-200 w-full mx-auto flex flex-col items-center justify-center ${
            isVisible ? "opacity-0" : "opacity-100"
          }`}>
          {icon}
          <div
            className={`${spacegrotesk.className} text-3xl mt-4 font-extrabold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent`}>
            {title}
          </div>
        </div>
        <h4
          className={`${
            spacegrotesk.className
          } dark:text-white w-full px-2 text-xl opacity-0 ${
            isVisible ? "opacity-100" : ""
          } relative z-10 text-black mt-4 font-semibold ${
            isVisible ? "text-white" : ""
          } transition duration-200`}>
          {description}
        </h4>
      </div>
    </div>
  );
};



const MoranIcon = () => {
  return (
    <img
      src='/logo.svg'
      alt='Logo'
      width='35'
      height='45'
      className='h-20 w-20'
    />
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}>
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};

export default Process;
