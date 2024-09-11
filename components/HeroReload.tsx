"use client";
import { FC } from "react";
import Hero from "./Hero";
import ProductHero from "./ProductsHero";
import AnimatedGridPattern from "./magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";

const HeroReload: FC = () => (
  <div className='relative'>
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.1}
      duration={3}
      repeatDelay={1}
      className={cn(
        "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
      )}
    />
    <div className='relative z-10'>
      <Hero />
      {/* <ProductHero /> */}
    </div>
  </div>
);

export default HeroReload;
