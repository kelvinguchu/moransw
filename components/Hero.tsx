"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { Inter, Montserrat } from "next/font/google";
import IconsCloud from "./IconsCloud";
import { cn } from "@/lib/utils";
import Link from "next/link";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const Hero: FC = () => {
  const fadeUpAnimation = {
    initial: { y: 20, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5 },
  };

  return (
    <main
      className={cn(
        "relative w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start md:-mt-10 mt-0 px-4 sm:px-6 lg:px-8",
        montserrat.variable,
        inter.variable,
        "font-sans"
      )}>
      {/* Left Content */}
      <motion.div
        initial='initial'
        animate='animate'
        className='w-full md:w-1/2 pt-16 pb-20 md:pt-[80px] md:pb-0 relative z-10 flex flex-col items-center md:items-start text-center md:text-left md:mr-10'>
        <motion.div {...fadeUpAnimation} className='space-y-6'>
          <div>
            <h1 className='text-[2.75rem] md:text-[4.5rem] font-semibold tracking-[-0.02em] leading-[1.1] text-white'>
              We build{" "}
              <span className='text-[#8A7CFF] inline-block'>digital</span>{" "}
              <span className='text-[#8A7CFF] inline-block'>experiences</span>{" "}
              that inspire
            </h1>
          </div>

          <p className='text-base md:text-lg text-[#8A8A8E] max-w-xl font-inter tracking-[-0.01em] leading-relaxed'>
            Transforming ideas into powerful websites, applications, and
            software solutions for forward-thinking businesses.
          </p>
        </motion.div>

        <motion.div
          {...fadeUpAnimation}
          transition={{ delay: 0.2 }}
          className='mt-10'>
          <Link
            href='#contact'
            className='group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-b from-violet-500 to-violet-600 text-white font-medium shadow-lg shadow-violet-500/25 hover:-translate-y-0.5 transition-all duration-200'>
            Let's Talk
            <svg
              className='w-5 h-5 transition-transform duration-200 group-hover:translate-x-1'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M17 8l4 4m0 0l-4 4m4-4H3'
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>

      {/* Right Content - Animated Icons Cloud */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className='md:w-1/2 w-[80%] relative z-10 flex -mt-10 md:mt-0 justify-center mx-auto md:justify-end'>
        <div className='relative w-full aspect-square max-w-[600px]'>
          <IconsCloud />
        </div>
      </motion.div>

      {/* Background Elements */}
      {/* <div className='absolute inset-0 -z-10'> */}
      {/* Subtle gradient background */}
      {/* <div className='absolute inset-0 bg-transparent'>
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(138,124,255,0.05),transparent_50%)]' />
        </div>
      </div> */}
    </main>
  );
};

export default Hero;
