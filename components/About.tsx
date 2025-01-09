"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconCode, IconWorld } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

// Visual Components
const AfricaVisual: FC = () => (
  <div className='relative w-full h-full rounded-xl overflow-hidden bg-black border border-white/[0.08]'>
    {/* Premium Gradient Backgrounds */}
    <div className='absolute inset-0'>
      <div className='absolute inset-0 bg-gradient-to-br from-violet-500/10 via-transparent to-indigo-500/10' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(124,58,237,0.15),transparent_50%)]' />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(99,102,241,0.15),transparent_50%)]' />
    </div>

    {/* Glow Effects */}
    <div className='absolute inset-0'>
      <div className='absolute -left-40 -top-40 w-80 h-80 bg-violet-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob' />
      <div className='absolute -right-40 -bottom-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-blob animation-delay-2000' />
    </div>

    <div className='absolute inset-0'>
      <div className='h-full flex flex-col'>
        {/* Code Editor Header */}
        <div className='flex items-center justify-between px-4 py-2 bg-black/50 border-b border-white/[0.08] backdrop-blur-sm'>
          <div className='flex items-center space-x-4'>
            <div className='flex space-x-2'>
              <div className='w-3 h-3 rounded-full bg-[#FF5F56]'></div>
              <div className='w-3 h-3 rounded-full bg-[#FFBD2E]'></div>
              <div className='w-3 h-3 rounded-full bg-[#27C93F]'></div>
            </div>
            <div className='text-sm text-gray-400 font-mono'>africa.tsx</div>
          </div>
        </div>

        {/* Editor Content */}
        <div className='relative flex-1 p-6 font-mono text-sm'>
          <div className='relative z-10'>
            <div className='text-gray-500'>{`// Founders of Astraque`}</div>
            <div className='mt-2'>
              <span className='text-violet-400'>const</span>{" "}
              <span className='text-indigo-400'>founders</span>{" "}
              <span className='text-white'>=</span>{" "}
              <span className='text-violet-400'>[</span>
            </div>
            <div className='ml-4'>
              <span className='text-white'>{`{`}</span>
              <br />
              <span className='ml-4 text-pink-400'>name:</span>{" "}
              <span className='text-emerald-400'>"Kelvin Guchu"</span>
              <span className='text-white'>,</span>
              <br />
              <span className='ml-4 text-pink-400'>role:</span>{" "}
              <span className='text-emerald-400'>"Co-founder"</span>
              <br />
              <span className='text-white'>{`},`}</span>
            </div>
            <div className='ml-4 mt-2'>
              <span className='text-white'>{`{`}</span>
              <br />
              <span className='ml-4 text-pink-400'>name:</span>{" "}
              <span className='text-emerald-400'>"Jeff Mumbi"</span>
              <span className='text-white'>,</span>
              <br />
              <span className='ml-4 text-pink-400'>role:</span>{" "}
              <span className='text-emerald-400'>"Co-founder"</span>
              <br />
              <span className='text-white'>{`}`}</span>
            </div>
            <div>
              <span className='text-violet-400'>];</span>
            </div>

            <div className='mt-4 text-gray-500'>{`// Tech hubs across Africa`}</div>
            <div className='mt-2'>
              <span className='text-violet-400'>const</span>{" "}
              <span className='text-indigo-400'>techHubs</span>{" "}
              <span className='text-white'>=</span>{" "}
              <span className='text-emerald-400'>"Growing..."</span>
              <span className='text-white'>;</span>
            </div>
          </div>

          {/* Glowing dots */}
          <div className='absolute top-1/4 right-12 w-2 h-2 rounded-full bg-violet-500/80 animate-pulse'>
            <div className='absolute inset-0 rounded-full bg-violet-500 blur-sm animate-pulse'></div>
          </div>
          <div className='absolute top-2/4 right-24 w-2 h-2 rounded-full bg-indigo-500/80 animate-pulse delay-150'>
            <div className='absolute inset-0 rounded-full bg-indigo-500 blur-sm animate-pulse delay-150'></div>
          </div>
          <div className='absolute bottom-1/4 right-16 w-2 h-2 rounded-full bg-violet-500/80 animate-pulse delay-300'>
            <div className='absolute inset-0 rounded-full bg-violet-500 blur-sm animate-pulse delay-300'></div>
          </div>
        </div>
      </div>
    </div>

    {/* Premium Gradient Lines */}
    <div className='absolute inset-0 pointer-events-none'>
      <div className='absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent' />
      <div className='absolute top-2/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent' />
      <div className='absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent' />
    </div>

    {/* Vignette Effect */}
    <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50' />
    <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black' />
  </div>
);

const About: FC = () => {
  return (
    <section
      id='about'
      className={cn(
        "min-h-screen py-32 relative overflow-hidden flex items-center",
        inter.variable,
        spaceGrotesk.variable
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
              <div className='inline-block mb-4'>
                <div className='flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm'>
                  <div className='w-1 h-1 rounded-full bg-violet-500'></div>
                  <span className='text-[0.9375rem] font-light tracking-wide text-white/70 font-inter'>
                    About Us
                  </span>
                  <div className='w-1 h-1 rounded-full bg-indigo-500'></div>
                </div>
              </div>
              <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 font-space-grotesk tracking-tight leading-[1.15]'>
                About Astraque
              </h2>
              <p className='max-w-2xl mx-auto text-base text-gray-400 font-light font-inter'>
                Building the future of Africa's digital landscape, one solution
                at a time
              </p>
              <div className='mt-6 flex items-center gap-2'>
                <div className='w-8 h-px bg-gradient-to-r from-transparent to-violet-500/50'></div>
                <div className='w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full'></div>
                <div className='w-8 h-px bg-gradient-to-l from-transparent to-indigo-500/50'></div>
              </div>
            </motion.div>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch'>
            {/* Visual Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className='relative h-[420px]'>
              <AfricaVisual />
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className='relative h-[420px] flex flex-col justify-between'>
              <div className='space-y-12'>
                <div>
                  <span className='text-sm font-medium tracking-wider text-violet-500/90 uppercase mb-3 block'>
                    Our Story
                  </span>
                  <h2 className='text-3xl font-medium text-white/95 mb-6 font-space-grotesk tracking-tight leading-snug'>
                    Founded by Tech Innovators
                  </h2>
                  <p className='text-base text-gray-400/90 leading-relaxed'>
                    Astraque was founded by Kelvin Guchu and Jeff Mumbi,
                    Information Technology graduates from Jomo Kenyatta
                    University of Agriculture and Technology. Our shared vision
                    of digital innovation and transformation drives our mission
                    forward.
                  </p>
                </div>

                <div>
                  <span className='text-sm font-medium tracking-wider text-violet-500/90 uppercase mb-3 block'>
                    What Drives Us
                  </span>
                  <h3 className='text-2xl font-medium text-white/90 font-space-grotesk tracking-tight mb-4'>
                    Our Mission
                  </h3>
                  <p className='text-base text-gray-400/90 leading-relaxed'>
                    We're committed to developing cutting-edge software
                    solutions and websites that enhance Africa's digital
                    presence. Our goal is to make the online space more
                    accessible, innovative, and impactful for African businesses
                    and communities.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
