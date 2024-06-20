"use client";
import {
  FiArchive,
  FiBarChart,
  FiBell,
  FiDollarSign,
  FiPlay,
} from "react-icons/fi";
import { Dispatch, SetStateAction, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import useWindowSize from "../components/useWindowSize";
import { IconType } from "react-icons";
import Header from "./Header";
import { Space_Grotesk } from "next/font/google";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const VerticalAccordion = () => {
  const [open, setOpen] = useState(items[0].id);

  return (
    <section className='p-4 bg-transparent border'>
      <Header
        icon={
          <FiArchive className='mx-3 text-violet-600 animate-pulse-spin w-6 h-6' />
        }
        mainText='Recent'
        gradientText='Projects'
        additionalClassNames={`${spacegrotesk.className}`}
      />
      <div className='flex flex-col lg:flex-row h-fit lg:h-[450px] w-full max-w-6xl mx-auto shadow overflow-hidden mt-4'>
        {items.map((item) => {
          return (
            <Panel
              key={item.id}
              open={open}
              setOpen={setOpen}
              id={item.id}
              Icon={item.Icon}
              title={item.title}
              imgSrc={item.imgSrc}
              description={item.description}
            />
          );
        })}
      </div>
    </section>
  );
};

interface PanelProps {
  open: number;
  setOpen: Dispatch<SetStateAction<number>>;
  id: number;
  Icon: IconType;
  title: string;
  imgSrc: string;
  description: string;
}

const Panel = ({
  open,
  setOpen,
  id,
  Icon,
  title,
  imgSrc,
  description,
}: PanelProps) => {
  const { width } = useWindowSize();
  const isOpen = open === id;

  return (
    <>
      <button
        className='bg-black text-white hover:bg-gray-900 transition-colors p-3 border-r-[1px] border-b-[1px] border-gray-700 flex flex-row-reverse lg:flex-col justify-end items-center gap-4 relative group'
        onClick={() => setOpen(id)}>
        <span
          style={{
            writingMode: "vertical-lr",
          }}
          className='hidden lg:block text-xl font-light rotate-180'>
          {title}
        </span>
        <span className='block lg:hidden text-xl font-light'>{title}</span>
        <div className='w-6 lg:w-full aspect-square bg-white text-black grid place-items-center'>
          <Icon />
        </div>
        <span className='w-4 h-4 bg-black group-hover:bg-gray-900 transition-colors border-r-[1px] border-b-[1px] lg:border-b-0 lg:border-t-[1px] border-gray-700 rotate-45 absolute bottom-0 lg:bottom-[50%] right-[50%] lg:right-0 translate-y-[50%] translate-x-[50%] z-20' />
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
            className='w-full h-full overflow-hidden relative bg-black flex items-end'>
            <motion.div
              variants={descriptionVariants}
              initial='closed'
              animate='open'
              exit='closed'
              className='px-4 py-2 bg-black/40 backdrop-blur-sm text-white'>
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
    Icon: FiDollarSign,
    imgSrc: "/aquatreat.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 2,
    title: "Scaperthru Springs Limited",
    Icon: FiPlay,
    imgSrc: "/scapethru.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 3,
    title: "Moran Bank Limited",
    Icon: FiBell,
    imgSrc: "/moranbank.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
  {
    id: 4,
    title: "Youtubify",
    Icon: FiBarChart,
    imgSrc: "/youtubify.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius deserunt quia consectetur aliquid obcaecati voluptatibus quos distinctio natus! Tenetur.",
  },
];
