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
import { FiTool } from "react-icons/fi";
import { Space_Grotesk } from "next/font/google";
import Header from "./Header";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

interface SkeletonProps {
  imageSrc?: string;
}

// Updated Skeleton component to accept an optional image prop
const Skeleton: React.FC<SkeletonProps> = ({ imageSrc }) =>
  imageSrc ? (
    <img
      src={imageSrc}
      alt='Image loading...'
      className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 object-cover'
    />
  ) : (
    <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
  );

const items = [
  {
    title: "UI Design",
    description:
      "Craft visually appealing designs for web, mobile, and SaaS applications.",
    header: <Skeleton imageSrc='webdesign.jpg' />,
    icon: <IconSignature className='h-4 w-4 text-blue-500' />,
  },
  {
    title: "UI Development",
    description: "Implement designs into functional and responsive interfaces.",
    header: <Skeleton imageSrc='uidev.jpg' />,
    icon: <IconTableColumn className='h-4 w-4 text-green-500' />,
  },
  {
    title: "No-Code Development",
    description:
      "Build applications using no-code platforms for rapid deployment.",
    header: <Skeleton imageSrc='nocode.jpg' />,
    icon: <IconClipboardCopy className='h-4 w-4 text-red-500' />,
  },
  {
    title: "CRM & ERP implemention",
    description:
      "We expertly implement CRM and ERP systems to enhance your business.",
    header: <Skeleton imageSrc='crm.png' />,
    icon: <IconBoxAlignTopLeft className='h-4 w-4 text-yellow-500' />,
    className: "md:col-span-2",
  },
  {
    title: "Collaborations",
    description: "Get an extra hand in your software project.",
    header: <Skeleton imageSrc='collab.jpg' />,
    icon: <IconBoxAlignRightFilled className='h-4 w-4 text-purple-500' />,
  },
  {
    title: "Web Application Development",
    description:
      "Develop robust and dynamic web applications to meet complex needs.",
    header: <Skeleton imageSrc='webapp.jpg' />,
    icon: <IconFileBroken className='h-4 w-4 text-pink-500' />,
    className: "md:col-span-2",
  },
  {
    title: "SEO Improvement",
    description:
      "Enhance visibility and performance in search engines to drive organic traffic.",
    header: <Skeleton imageSrc='seo.jpg' />,
    icon: <IconArrowWaveRightUp className='h-4 w-4 text-indigo-500' />,
  },
];

export function Services() {
  return (
    <section id='services' className='md:-mt-0 -mt-0'>
      <Header
        icon={
          <FiTool className='mx-3 text-violet-600 animate-pulse-spin w-6 h-6' />
        }
        mainText='Our'
        gradientText='Services'
        additionalClassNames={`${spacegrotesk.className} px-4 mb-4 inverted-glow`}
      />
      <BentoGrid className='max-w-6xl md:px-0 px-6 mx-auto grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
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
    </section>
  );
}

export default Services;
