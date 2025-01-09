"use client";
import { FC, memo } from "react";
import { motion } from "framer-motion";
import { IconExternalLink } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Space_Grotesk, Inter } from "next/font/google";
import Image from "next/image";

// Preload fonts
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  preload: true,
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
  display: "swap",
});

// Memoize static project data
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
] as const;

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

// Memoize the ReviewCard component
const ReviewCard = memo<ReviewCardProps>(({ img, name, username, body }) => {
  return (
    <div className='relative h-full w-[320px] mx-4'>
      <div className='relative h-full rounded-xl overflow-hidden backdrop-blur-sm border border-white/[0.08] bg-black/30'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <Image
            src={img}
            alt={name}
            fill
            className='object-cover'
            loading='lazy'
            sizes='(max-width: 320px) 100vw, 320px'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90' />
        </div>

        {/* Content */}
        <div className='relative p-6 flex flex-col h-full'>
          <div className='flex items-center gap-4 mb-4'>
            <p className='text-sm font-medium text-white/90'>{name}</p>
            <p className='text-sm text-gray-400'>{username}</p>
          </div>
          <p className='text-gray-300/90 text-sm leading-relaxed flex-grow'>
            {body}
          </p>
        </div>
      </div>
    </div>
  );
});

ReviewCard.displayName = "ReviewCard";

const Projects: FC = () => {
  return (
    <section
      id='projects'
      className={cn(
        "min-h-screen py-32 relative overflow-hidden",
        spaceGrotesk.variable,
        inter.variable
      )}>
      <div className='w-full'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='flex flex-col items-center'>
              <h1 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
                Recent Projects
              </h1>
              <p className='max-w-2xl mx-auto text-base text-gray-400 font-light'>
                Explore our portfolio of successful projects and innovative
                solutions.
              </p>
            </motion.div>
          </div>

          {/* Projects Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: Math.min(index * 0.1, 0.3),
                }}
                viewport={{ once: true }}
                className='group relative'>
                <div className='relative h-[300px] rounded-xl overflow-hidden bg-black border border-white/[0.08]'>
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    fill
                    className='object-cover'
                    loading='lazy'
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                  />
                  <div className='absolute inset-0 bg-gradient-to-b from-black/90 via-black/30 to-black/90' />

                  {/* Content */}
                  <div className='relative p-6 flex flex-col h-full'>
                    <div className='mt-auto'>
                      <h2 className='text-xl font-medium text-white/90 mb-2'>
                        {project.title}
                      </h2>
                      <div className='flex items-center justify-between'>
                        <p className='text-gray-400 text-sm'>
                          {project.description}
                        </p>
                        <a
                          href={project.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          aria-label={`View ${project.title} project`}
                          className='text-white/70 hover:text-violet-400 transition-colors'>
                          <IconExternalLink className='w-4 h-4' />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(Projects);
