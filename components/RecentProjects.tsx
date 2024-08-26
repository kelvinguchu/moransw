"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../hooks/useWindowSize";
import Header from "./Header";
import { Space_Grotesk } from "next/font/google";
import { FiArchive, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section
      id='recent-projects'
      className='p-6 bg-white dark:bg-gradient-to-br sm:max-w-[90vw] md:max-w-6xl lg:max-w-7xl from-black via-gray-900 to-black rounded mx-auto shadow-lg'>
      <Header
        icon={
          <FiArchive className='mx-3 text-violet-400 animate-pulse-spin w-8 h-8' />
        }
        mainText='Recent'
        gradientText='Projects'
        additionalClassNames={`${spacegrotesk.className} text-white`}
      />
      <div className='flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto overflow-hidden mt-6 gap-4'>
        {items.map((item) => (
          <Panel
            key={item.id}
            open={open}
            setOpen={setOpen}
            id={item.id}
            title={item.title}
            imgSrc={item.imgSrc}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  title: string;
  imgSrc: string;
  description: string;
  link: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  title,
  imgSrc,
  description,
  link,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;
  const isMobile = width && width <= 768;

  return (
    <>
      <button
        className={`bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-colors p-4 border-r-[1px] border-b-[1px] border-transparent flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group ${
          isOpen ? "shadow-lg" : ""
        }`}
        onClick={() => setOpen(id)}>
        <span
          style={{ writingMode: "vertical-lr" }}
          className='hidden lg:block text-lg font-medium text-white rotate-180'>
          {title}
        </span>
        <span className='block lg:hidden text-lg font-medium text-white'>
          {title}
        </span>
        <span className='w-4 h-4 bg-indigo-600 group-hover:bg-indigo-700 transition-colors border-r border-b lg:border-b-0 lg:border-t-[1px] border-transparent rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20' />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={isMobile ? mobileVariants : panelVariants}
            initial='closed'
            animate='open'
            exit='closed'
            transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }} // Improved transition
            className='w-full h-full overflow-hidden relative flex items-end rounded-lg shadow-inner'>
            <Image
              src={imgSrc}
              alt={title}
              layout='fill'
              objectFit='cover'
              className='absolute inset-0'
            />
            <motion.div
              variants={descriptionVariants}
              initial='closed'
              animate='open'
              exit='closed'
              transition={{ type: "tween", ease: "easeInOut", duration: 0.5 }} // Synchronized transition for smoothness
              className='w-full h-full'
            />
            <div className='px-6 py-4 bg-white/75 dark:bg-black/75 backdrop-blur-md text-white rounded-b-lg absolute bottom-0 w-full'>
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline flex items-center text-black dark:text-white'>
                {description} <FiExternalLink className='ml-2' />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

// Animation variants
const panelVariants = {
  open: { scale: 1, opacity: 1, width: "100%", height: "100%" },
  closed: { scale: 0.95, opacity: 0, width: "0%", height: "100%" },
};

const mobileVariants = {
  open: { opacity: 1, height: "200px", transition: { duration: 0.4 } },
  closed: { opacity: 0, height: "0px", transition: { duration: 0.3 } },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
  },
  closed: { opacity: 0, y: "100%" },
};

// Project items
const items = [
  {
    id: 1,
    title: "Aquatreat Solutions Limited",
    imgSrc: "/aquatreat.webp",
    description: "visit site",
    link: "https://aquatreat.co.ke/",
  },
  {
    id: 2,
    title: "Scaperthru Springs Limited",
    imgSrc: "/scapethru.webp",
    description: "visit site",
    link: "https://scapethrusprings.co.ke/",
  },
  {
    id: 3,
    title: "UMS Kenya",
    imgSrc: "/umskenya.webp",
    description: "visit site",
    link: "https://umskenya.com/",
  },
  {
    id: 4,
    title: "Njenga Farm",
    imgSrc: "/njengafarm.webp",
    description: "visit site",
    link: "https://astraque.com/",
  },
  {
    id: 5,
    title: "Moran Bank Limited",
    imgSrc: "/moranbank.webp",
    description: "visit site",
    link: "https://moranbank.vercel.app/",
  },
  {
    id: 6,
    title: "Youtubify",
    imgSrc: "/youtubify.webp",
    description: "visit site",
    link: "https://you-tubify.vercel.app/",
  },
];
