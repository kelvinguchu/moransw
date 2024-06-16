"use client";
import React from "react";
import { SparklesCore } from "@/components/ui/sparkles";
import { Space_Grotesk } from "next/font/google";
import GradualSpacing from "@/components/ui/gradual-spacing";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

export function ProductHero() {
  return (
    <div className='h-[20rem] w-full max-w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md p-4'>
      <div className='w-full max-w-5xl h-40 relative'>
        {/* Core component */}
        <SparklesCore
          background='transparent'
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className='w-full h-full'
          particleColor='#FFFFFF'
        />
        {/* Gradients */}
        <div className='absolute inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm' />
        <div className='absolute inset-x-5 md:inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4' />
        <div className='absolute inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm' />
        <div className='absolute inset-x-10 md:inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4' />

        {/* Radial Gradient to prevent sharp edges */}
        <div className='absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]'></div>
      </div>
      <h1
        className={`${spacegrotesk.className} text-3xl md:text-7xl lg:text-7xl font-bold text-center mt-[-8rem] md:mt-[-8rem] text-[#E8E8E8] relative z-20`}>
        Bringing your<br />{" "}
        <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
          Unicorn
        </span>{" "}
        ideas to life
      </h1>
    </div>
  );
}

export default ProductHero;

