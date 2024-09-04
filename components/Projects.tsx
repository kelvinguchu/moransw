import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Header from "./Header";
import { FiArchive, FiExternalLink } from "react-icons/fi";
import { Space_Grotesk } from "next/font/google";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const projects = [
  {
    id: 7,
    title: "Midnimo College",
    imgSrc: "/midnimo.png",
    link: "https://midnimocollege.com/",
  },
  {
    id: 3,
    title: "UMS Kenya",
    imgSrc: "/umskenya.webp",
    link: "https://umskenya.com/",
  },
  {
    id: 1,
    title: "Aquatreat Solutions Limited",
    imgSrc: "/aquatreat.png",
    link: "https://aquatreat.co.ke/",
  },

  {
    id: 2,
    title: "Scapethru Springs Limited",
    imgSrc: "/scapethru.webp",
    link: "https://scapethrusprings.co.ke/",
  },
  {
    id: 4,
    title: "Njenga Farm",
    imgSrc: "/njengafarm.webp",
    link: "https://astraque.com/",
  },
  {
    id: 5,
    title: "Moran Bank Limited",
    imgSrc: "/moranbank.webp",
    link: "https://moranbank.vercel.app/",
  },
  {
    id: 6,
    title: "Youtubify",
    imgSrc: "/youtubify.webp",
    link: "https://you-tubify.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section className='p-6 sm:max-w-[90vw] mt-10 md:max-w-6xl lg:max-w-7xl rounded mx-auto shadow-lg'>
      <Header title='Recent Projects' />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {projects.map((project) => (
          <Card
            key={project.id}
            className='shadow-lg rounded-[5px] bg-white dark:bg-gradient-to-br from-black via-gray-900 to-black'>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={project.imgSrc}
                alt={project.title}
                className='w-full h-48 object-cover rounded-[5px]'
              />
            </CardContent>
            <CardFooter>
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center text-indigo-600 hover:underline'>
                View Project <FiExternalLink className='ml-2' />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
