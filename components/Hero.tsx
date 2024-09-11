"use client";
import { FC } from "react";
import localFont from "next/font/local";

const centuryFont = localFont({
  src: "../fonts/Century-Expanded-Regular.woff2",
});

import ContactButton from "./ContactButton";
import DottedButton from "./DottedButton";
import IconsCloud from "./IconsCloud";

const Hero: FC = () => (
  <main
    className={`relative w-full max-w-6xl md:-mt-10 mt-0 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row overflow-hidden group ${centuryFont.className}`}>
    <div className='w-full pt-2 bg-transparent md:pt-[80px] relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:mr-10'>
      <h2 className='text-4xl md:text-6xl font-semibold mb-2 md:mb-4 leading-snug'>
        We build Websites, Web Applications <br />{" "}
        <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
          & Softwares
        </span>
      </h2>
      <h3 className='w-full text-sm md:text-xl font-medium mb-2 md:mb-4'>
        for ambitious businesses and innovators.
      </h3>
      <div className='mt-8 md:mt-12'>
        <ContactButton />
      </div>
      <div className='mt-4 md:mt-8'>
        <DottedButton />
      </div>
    </div>

    <div className='md:w-full pb-5 w-[80%] relative z-10 flex -mt-10 md:mt-0 justify-center mx-auto md:justify-end'>
      <IconsCloud />
    </div>
  </main>
);

export default Hero;
