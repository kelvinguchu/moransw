"use client";
import { FC } from "react";
import Hero from "./Hero";
import ProductHero from "./ProductsHero";
import AnimatedGridPattern from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const HeroReload: FC = () => (
  <div className='relative overflow-hidden bg-black'>
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.15}
      duration={3}
      repeatDelay={0}
      className={cn(
        "[mask-image:radial-gradient(1500px_circle_at_center,white,transparent)]",
        "absolute inset-x-0 top-[-10%] h-[120%] opacity-75"
      )}
    />
    <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,black_70%)]' />
    <div className='absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black to-transparent' />
    <div className='absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black to-transparent' />
    <div className='absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent' />
    <div className='absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent' />
    <div className='relative z-10'>
      <Hero />
      <ProductHero />
    </div>
  </div>
);

export default HeroReload;
