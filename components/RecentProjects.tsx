"use client";
import React, { Dispatch, SetStateAction, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../components/useWindowSize";
import Header from "./Header";
import { Space_Grotesk } from "next/font/google";
import { FiArchive, FiExternalLink } from "react-icons/fi";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null;
  }

  return (
    <section
      id='recent-projects'
      className='p-6 bg-gradient-to-br from-transparent via-gray-900 to-black rounded-lg mx-3 md:mx-0 shadow-lg'>
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
  const { width } = useWindowSize(); // This might access window properties
  const isOpen = open === id;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  // Guard to ensure code runs only on the client side
  useEffect(() => {
    if (typeof window !== "undefined") {
      setLoaded(true);
    }
  }, []);

  return (
    <>
      <button
        className={`bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-colors p-4 border-r-[1px] border-b-[1px] border-transparent flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group ${
          isOpen ? "shadow-lg" : ""
        }`}
        onClick={() => setOpen(id)}>
        {/* UI components here are safe */}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial='closed'
            animate='open'
            exit='closed'
            className='w-full h-full overflow-hidden relative flex items-end rounded-lg shadow-inner'>
            {/* Conditional rendering based on client-side logic */}
            <div
              style={{
                backgroundImage: `url(${imgSrc})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                display: loaded && !error ? "none" : "block",
              }}
              className='w-full h-full absolute inset-0'></div>
            <motion.div
              variants={descriptionVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className='w-full h-full'>
              {/* Client-only elements like iframe */}
              <iframe
                src={link}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  display: loaded && !error ? "block" : "none",
                }}
                onLoad={() => setLoaded(true)}
                onError={() => setError(true)}></iframe>
            </motion.div>
            {/* Always safe to render links */}
            <div className='px-6 py-4 bg-black/75 backdrop-blur-md text-white rounded-b-lg absolute bottom-0 w-full'>
              <p>
                <a
                  href={link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:underline flex items-center'>
                  {description} <FiExternalLink className='ml-2' />
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};


export default VerticalAccordion;

const panelVariants = {
  open: { width: "100%", height: "100%" },
  closed: { width: "0%", height: "100%" },
};

const panelVariantsSm = {
  open: { width: "100%", height: "200px" },
  closed: { width: "100%", height: "0px" },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: { delay: 0.125 },
  },
  closed: { opacity: 0, y: "100%" },
};

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
    link: "https://scaperthrusprings.co.ke/",
  },
  {
    id: 3,
    title: "Moran Bank Limited",
    imgSrc: "/moranbank.webp",
    description: "visit site",
    link: "https://moranbank.vercel.app/",
  },
  {
    id: 4,
    title: "Youtubify",
    imgSrc: "/youtubify.webp",
    description: "visit site",
    link: "https://you-tubify.vercel.app/",
  },
];
