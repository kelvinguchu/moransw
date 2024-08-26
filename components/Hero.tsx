"use client";
import { FC } from "react";
import { Space_Grotesk, Poppins } from "next/font/google";
import ContactButton from "./ContactButton";
import { Globe } from "./Globe";
import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import DottedButton from "./DottedButton";

// Initialize fonts
const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});


const Hero: FC = () => (
  <main className='relative max-w-[90%] mx-auto flex flex-col-reverse md:flex-row w-full overflow-hidden group'>
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

    <div className='w-full  pt-6 md:pt-[60px] relative z-10 flex flex-col items-center md:items-start text-center md:text-left mr-10 md:mr-0'>
      <DottedButton />
      <h2
        className={`${spacegrotesk.className} text-4xl md:text-6xl font-semibold mb-2 md:mb-4 leading-snug`}>
        We build Websites, Web Applications <br />{" "}
        <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
          & Softwares
        </span>
      </h2>
      <h3
        className={`${poppins.className} w-full text-sm md:text-xl font-medium mb-2 md:mb-4`}>
        for ambitious businesses and innovators.
      </h3>
      <div className='mt-8 md:mt-12'>
        <ContactButton />
      </div>
    </div>

    <div className='w-full  relative z-1 md:-mt-10 flex justify-center md:justify-end'>
      <Globe />
    </div>
  </main>
);

export default Hero;
