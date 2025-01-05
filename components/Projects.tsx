"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Space_Grotesk, Inter } from "next/font/google";
import Image from "next/image";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const projects = [
  {
    id: 7,
    title: "UMS POS",
    description: "Stock Management System",
    imgSrc: "/umspos.png",
    link: "https://umskenya.com/",
  },
  {
    id: 8,
    title: "Aquatreat Solutions POS",
    description: "Stock Management System",
    imgSrc: "/aquapos.png",
    link: "https://aquatreat.co.ke/",
  },
  {
    id: 9,
    title: "Astraque Client Portal",
    description: "Client Portal",
    imgSrc: "/astraqueclient.png",
    link: "https://astraque.com/",
  },
  {
    id: 3,
    title: "UMS Kenya",
    description: "Website",
    imgSrc: "/umskenya.webp",
    link: "https://umskenya.com/",
  },
  {
    id: 1,
    title: "Aquatreat Solutions Limited",
    description: "Water Treatment Solutions",
    imgSrc: "/aquatreat.png",
    link: "https://aquatreat.co.ke/",
  },
  {
    id: 2,
    title: "Scapethru Springs Limited",
    description: "Water Supply Solutions",
    imgSrc: "/scapethru.webp",
    link: "https://scapethrusprings.co.ke/",
  },
  {
    id: 4,
    title: "Njenga Farm",
    description: "Agricultural Solutions",
    imgSrc: "/njengafarm.webp",
    link: "https://astraque.com/",
  },
  {
    id: 5,
    title: "Moran Bank Limited",
    description: "Banking Solutions",
    imgSrc: "/moranbank.webp",
    link: "https://moranbank.vercel.app/",
  },
  {
    id: 6,
    title: "Youtubify",
    description: "Media Platform",
    imgSrc: "/youtubify.webp",
    link: "https://you-tubify.vercel.app/",
  },
];

const Projects: FC = () => {
  return (
    <section
      id='projects'
      className={cn(
        "min-h-screen pt-40 pb-32 relative overflow-hidden",
        spaceGrotesk.variable,
        inter.variable
      )}>
      <div className='w-full'>
        <div className='relative z-10 max-w-7xl mx-auto px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='flex flex-col items-center'>
              <div className='inline-block mb-4'>
                <div className='flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm'>
                  <div className='w-1 h-1 rounded-full bg-violet-500'></div>
                  <span className='text-[0.9375rem] font-light tracking-wide text-white/70'>
                    Our Work
                  </span>
                  <div className='w-1 h-1 rounded-full bg-indigo-500'></div>
                </div>
              </div>
              <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
                Recent Projects
              </h2>
              <p className='max-w-2xl mx-auto text-base text-gray-400 font-light'>
                Explore our portfolio of successful projects and innovative
                solutions.
              </p>
              <div className='mt-6 flex items-center gap-2'>
                <div className='w-8 h-px bg-gradient-to-r from-transparent to-violet-500/50'></div>
                <div className='w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full'></div>
                <div className='w-8 h-px bg-gradient-to-l from-transparent to-indigo-500/50'></div>
              </div>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='group relative'>
                <div className='relative h-[300px] rounded-xl overflow-hidden bg-black border border-white/[0.08] transition-transform duration-500 group-hover:scale-[1.02]'>
                  {/* Background Image */}
                  <div className='absolute inset-0'>
                    <Image
                      src={project.imgSrc}
                      alt={project.title}
                      fill
                      className='object-cover transition-all duration-700 group-hover:scale-110'
                    />
                    {/* Enhanced Overlay Gradients */}
                    <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90' />
                    <div className='absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                    <div className='absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(124,58,237,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700' />
                  </div>

                  {/* Content */}
                  <div className='relative flex flex-col h-full'>
                    {/* Code Editor Header */}
                    <div className='flex items-center justify-between px-4 py-2 bg-black/50 border-b border-white/[0.08] backdrop-blur-sm'>
                      <div className='flex items-center space-x-4'>
                        <div className='flex space-x-2'>
                          <div className='w-3 h-3 rounded-full bg-[#FF5F56] group-hover:animate-pulse'></div>
                          <div className='w-3 h-3 rounded-full bg-[#FFBD2E] group-hover:animate-pulse'></div>
                          <div className='w-3 h-3 rounded-full bg-[#27C93F] group-hover:animate-pulse'></div>
                        </div>
                        <div className='text-sm text-gray-400 font-mono group-hover:text-violet-300 transition-colors duration-300'>
                          {project.title.toLowerCase().split(" ")[0]}.tsx
                        </div>
                      </div>
                      <div className='text-xs text-gray-500 font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
                        {index + 1} / {projects.length}
                      </div>
                    </div>

                    <div className='p-6 flex flex-col flex-1'>
                      {/* Project Type Badge */}
                      <div className='inline-flex px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/10 text-xs font-medium text-white/70 w-fit group-hover:border-violet-500/30 group-hover:text-violet-300 transition-all duration-500 group-hover:shadow-[0_0_15px_rgba(124,58,237,0.1)]'>
                        {project.description}
                      </div>

                      {/* Project Info - Moved to bottom */}
                      <div className='mt-auto translate-y-4 group-hover:translate-y-0 transition-transform duration-500'>
                        <h3 className='text-xl font-medium text-white/90 mb-2 font-space-grotesk group-hover:text-white'>
                          {project.title}
                        </h3>
                        <div className='flex items-center justify-between relative z-20'>
                          <p className='text-gray-400 text-sm font-light font-inter group-hover:text-gray-300'>
                            {project.description}
                          </p>
                          <a
                            href={project.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              window.open(project.link, "_blank");
                            }}
                            className='inline-flex items-center gap-2 text-sm text-white/70 hover:text-violet-400 transition-all duration-300 group-hover:-translate-y-0.5 cursor-pointer relative z-30'
                            style={{ pointerEvents: "auto" }}>
                            <span>View Project</span>
                            <IconExternalLink className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Premium Border Effects */}
                  <div className='absolute inset-0 border border-white/[0.08] rounded-xl group-hover:border-violet-500/30 transition-all duration-500 pointer-events-none' />
                  <div className='absolute inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-violet-500/[0.08] to-transparent pointer-events-none' />
                  <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.1),transparent_70%)] pointer-events-none' />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
