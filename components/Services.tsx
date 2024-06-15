import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { FiTool } from "react-icons/fi"; // Make sure you have this package installed
import { Space_Grotesk } from "next/font/google";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const Header = () => (
  <div className='w-full flex flex-col items-center justify-center px-4'>
    <h1
      className={`${spacegrotesk.className} py-5 px-2 text-3xl sm:text-4xl md:text-6xl font-semibold border rounded-lg mb-4 leading-snug text-center md:text-left flex items-center justify-center md:justify-start inverted-glow`}>
      <FiTool className='mx-3 text-violet-600 animate-pulse-spin w-6 h-6' />
      Our{" "}
      <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent ml-3'>
        Services
      </span>
    </h1>
  </div>
);

const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
);

const items = [
  {
    title: "UI Design",
    description:
      "Craft visually appealing designs for web, mobile, and SaaS applications.",
    header: <Skeleton />,
    icon: <IconSignature className='h-4 w-4 text-blue-500' />, // Change color here
  },
  {
    title: "UI Development",
    description: "Implement designs into functional and responsive interfaces.",
    header: <Skeleton />,
    icon: <IconTableColumn className='h-4 w-4 text-green-500' />, // Change color here
  },
  {
    title: "No-Code Development",
    description:
      "Build applications using no-code platforms for rapid deployment.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className='h-4 w-4 text-red-500' />, // Change color here
  },
  {
    title: "Brand Guidelines",
    description:
      "Establish comprehensive guidelines for consistent brand representation.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className='h-4 w-4 text-yellow-500' />, // Change color here
    className: "md:col-span-2",
  },
  {
    title: "SaaS Product Design",
    description: "Design intuitive and engaging SaaS products.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-purple-500' />, // Change color here
  },
  {
    title: "Web Application Development",
    description:
      "Develop robust and dynamic web applications to meet complex needs.",
    header: <Skeleton />,
    icon: <IconFileBroken className='h-4 w-4 text-pink-500' />, // Change color here
    className: "md:col-span-2",
  },
  {
    title: "SEO Improvement",
    description:
      "Enhance visibility and performance in search engines to drive organic traffic.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className='h-4 w-4 text-indigo-500' />, // Change color here
  },
];

export function Services() {
  return (
    <>
      <Header />
      <BentoGrid className='max-w-4xl mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={`flex flex-col ${
              i === 3 || i === 6 ? "md:col-span-2" : ""
            }`}
          />
        ))}
      </BentoGrid>
    </>
  );
}

export default Services;
