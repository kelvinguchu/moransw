"use client";
import { FC } from "react";
import { FlipWords } from "./FlipWords";
import { Space_Grotesk, Poppins } from "next/font/google";
import ContactButton from "./ContactButton";
import { Globe } from "./Globe";
import { Reveal } from "./Reveal";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";

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

const flipWords = ["1. Design", "2. Develop", "3. Integrate"];
const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A1", "#FF8333"];

const Hero: FC = () => (
  <main className='relative flex flex-col-reverse md:flex-row w-full overflow-hidden group'>
    <GlowingStarsBackground className='absolute inset-0' />

    <div className='w-full md:w-1/2 pt-6 md:pt-[70px] relative z-10 flex flex-col items-center md:items-start text-center md:text-left mr-10 md:mr-0'>
      <Reveal>
        <h2
          className={`${spacegrotesk.className} text-4xl md:text-6xl font-semibold mb-2 md:mb-4 leading-snug`}>
          We build Websites, Web Applications <br />{" "}
          <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
            & Softwares
          </span>
        </h2>
      </Reveal>
      <h3
        className={`${poppins.className} w-full text-sm md:text-xl font-medium mb-2 md:mb-4`}>
        for ambitious businesses and innovators.
      </h3>
      <h3 className='text-lg md:text-xl font-medium'>
        <FlipWords
          words={flipWords}
          colors={colors}
          duration={3000}
          className='inline-block'
        />
      </h3>
      <div className='mt-8 md:mt-12'>
        <ContactButton />
      </div>
    </div>

    <div className='w-full md:w-1/2 relative z-1 flex justify-center md:justify-end'>
      <Globe />
    </div>
  </main>
);

export default Hero;
