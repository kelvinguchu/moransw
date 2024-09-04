"use client";
import { FC } from "react";
import { Space_Grotesk, Poppins } from "next/font/google";
import ContactButton from "./ContactButton";
import { Globe } from "./Globe";
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
  <main className='relative max-w-[100%] mx-auto flex flex-col-reverse md:flex-row w-full overflow-hidden group'>
    <div className='w-full  pt-6 md:pt-[60px] relative z-10 flex flex-col items-center md:items-start text-center md:text-left mr-10 md:mr-0'>
      <h2
        className='font-Century text-4xl md:text-6xl font-semibold mb-2 md:mb-4 leading-snug'>
        We build Websites, Web Applications <br />{" "}
        <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
          & Softwares
        </span>
      </h2>
      <h3
        className='font-Century w-full text-sm md:text-xl font-medium mb-2 md:mb-4'>
        for ambitious businesses and innovators.
      </h3>
      <div className='mt-8 md:mt-12'>
        <ContactButton />
      </div>
      <div className='mt-4 md:mt-8'>
        <DottedButton />
      </div>
    </div>

    <div className='w-full relative z-1000 md:-mt-10 flex justify-center md:justify-end'>
      <Globe />
    </div>
  </main>
);

export default Hero;
