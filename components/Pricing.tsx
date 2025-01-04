"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import PricingCard from "./PricingCard";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import {
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTailwind,
  IconBrandWordpress,
  IconLayoutGrid,
  IconLayoutGridAdd,
  IconLayoutKanban,
} from "@tabler/icons-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const pricingData = [
  {
    title: "Starter",
    description: "1-3 Pages Website",
    features: [
      "Up to 3 Pages",
      "Responsive Design",
      "Basic SEO Setup",
      "Contact Form",
      "Social Media Integration",
      "Starting from Ksh. 15,000",
      "*Price varies with functionality",
    ],
    technologies: [
      { name: "React", icon: IconBrandReact },
      { name: "Next.js", icon: IconBrandNextjs },
      { name: "Tailwind", icon: IconBrandTailwind },
    ],
    highlight: false,
  },
  {
    title: "Professional",
    description: "3-6 Pages Website",
    features: [
      "Up to 6 Pages",
      "Advanced Animations",
      "Premium SEO Package",
      "Custom Forms",
      "Performance Optimization",
      "Starting from Ksh. 25,000",
      "*Price varies with functionality",
    ],
    technologies: [
      { name: "React", icon: IconBrandReact },
      { name: "Next.js", icon: IconBrandNextjs },
      { name: "Tailwind", icon: IconBrandTailwind },
    ],
    highlight: true,
  },
  {
    title: "Business",
    description: "7-10 Pages Website",
    features: [
      "Up to 10 Pages",
      "Custom Animations",
      "Advanced Features",
      "API Integration",
      "Premium Support",
      "Starting from Ksh. 35,000",
      "*Price varies with functionality",
    ],
    technologies: [
      { name: "React", icon: IconBrandReact },
      { name: "Next.js", icon: IconBrandNextjs },
      { name: "Tailwind", icon: IconBrandTailwind },
    ],
    highlight: false,
  },
  {
    title: "WordPress",
    description: "Custom WordPress Solutions",
    features: [
      "Custom Theme",
      "Plugin Integration",
      "E-commerce Ready",
      "Content Management",
      "SEO Optimization",
      "Starting from Ksh. 15,000",
      "*Price varies with functionality",
    ],
    technologies: [
      { name: "WordPress", icon: IconBrandWordpress },
      { name: "Custom", icon: IconLayoutGrid },
    ],
    highlight: false,
  },
];

const Pricing: FC = () => {
  return (
    <section
      id='pricing'
      className={cn(
        "min-h-screen py-32 relative overflow-hidden flex items-center",
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
                  <span className='text-[0.9375rem] font-light tracking-wide text-white/70'>
                    Pricing Guide
                  </span>
                  <div className='w-1 h-1 rounded-full bg-indigo-500'></div>
                </div>
              </div>
              <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
                Starting Prices
              </h2>
              <p className='max-w-2xl mx-auto text-base text-gray-400 font-light'>
                Our pricing is based on the number of pages and functionality
                required. Contact us for a custom quote tailored to your
                specific needs.
              </p>
              <div className='mt-6 flex items-center gap-2'>
                <div className='w-8 h-px bg-gradient-to-r from-transparent to-violet-500/50'></div>
                <div className='w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full'></div>
                <div className='w-8 h-px bg-gradient-to-l from-transparent to-indigo-500/50'></div>
              </div>
            </motion.div>
          </div>

          {/* Pricing Cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto'>
            {pricingData.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}>
                <PricingCard {...plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
