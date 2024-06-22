'use client';
import React, { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../components/useWindowSize";
import Header from "./Header";
import { Space_Grotesk } from "next/font/google";
import { FiArchive } from "react-icons/fi";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className='p-4 bg-transparent border rounded mx-3 md:mx-0'>
      <Header
        icon={
          <FiArchive className='mx-3 text-violet-600 animate-pulse-spin w-6 h-6' />
        }
        mainText='Recent'
        gradientText='Projects'
        additionalClassNames={`${spacegrotesk.className}`}
      />
      <div className='flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden mt-4'>
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

  return (
    <>
      <button
        className='bg-black text-white hover:bg-gray-900 transition-colors p-3 border-r-[1px] border-b-[1px] border-gray-700 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group'
        onClick={() => setOpen(id)}>
        <span
          style={{ writingMode: "vertical-lr" }}
          className='hidden lg:block text-xl font-light rotate-180'>
          {title}
        </span>
        <span className='block lg:hidden text-xl font-light'>{title}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key={`panel-${id}`}
            variants={width && width > 1024 ? panelVariants : panelVariantsSm}
            initial='closed'
            animate='open'
            exit='closed'
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className='w-full h-full overflow-hidden relative bg-black flex items-end cursor-pointer'
            onClick={() => window.open(link, "_blank")}>
            <motion.div
              variants={descriptionVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className='px-4 py-2 bg-black/70 backdrop-blur-sm text-white'>
              <p>{description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default VerticalAccordion;

const panelVariants = {
  open: {
    width: "100%",
    height: "100%",
  },
  closed: {
    width: "0%",
    height: "100%",
  },
};

const panelVariantsSm = {
  open: {
    width: "100%",
    height: "200px",
  },
  closed: {
    width: "100%",
    height: "0px",
  },
};

const descriptionVariants = {
  open: {
    opacity: 1,
    y: "0%",
    transition: {
      delay: 0.125,
    },
  },
  closed: { opacity: 0, y: "100%" },
};

const items = [
  {
    id: 1,
    title: "Aquatreat Solutions Limited",
    imgSrc: "/aquatreat.webp",
    description: "Click the image to view the site",
    link: "https://aquatreat.co.ke/",
  },
  {
    id: 2,
    title: "Scaperthru Springs Limited",
    imgSrc: "/scapethru.webp",
    description: "Click the image to view the site",
    link: "https://scaperthrusprings.co.ke/",
  },
  {
    id: 3,
    title: "Moran Bank Limited",
    imgSrc: "/moranbank.webp",
    description: "Click the image to view the site",
    link: "https://moranbank.vercel.app/",
  },
  {
    id: 4,
    title: "Youtubify",
    imgSrc: "/youtubify.webp",
    description: "Click the image to view the site",
    link: "https://you-tubify.vercel.app/",
  },
];
