// components/PricingCard.tsx
"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import type { Icon } from "@tabler/icons-react";
import Link from "next/link";

interface Technology {
  name: string;
  icon: Icon;
}

interface PricingCardProps {
  title: string;
  description: string;
  features: string[];
  technologies: Technology[];
  highlight?: boolean;
}

const PricingCard: FC<PricingCardProps> = ({
  title,
  description,
  features,
  technologies,
  highlight = false,
}) => {
  return (
    <div className='relative h-full rounded-xl backdrop-blur-sm border bg-gradient-to-b from-violet-500/[0.15] to-transparent border-violet-500/20'>
      {/* Glow Effect - Now applied to all cards */}
      <div className='absolute inset-0 -z-10'>
        <div className='absolute -left-20 -top-20 w-40 h-40 bg-violet-500 rounded-full mix-blend-screen filter blur-[64px] opacity-10 animate-blob' />
        <div className='absolute -right-20 -bottom-20 w-40 h-40 bg-indigo-500 rounded-full mix-blend-screen filter blur-[64px] opacity-10 animate-blob animation-delay-2000' />
      </div>

      {/* Content */}
      <div className='relative p-8 flex-1 flex flex-col'>
        {/* Header */}
        <div className='mb-6'>
          <h3 className='text-2xl font-medium mb-2 text-white'>{title}</h3>
          <p className='text-gray-400'>{description}</p>
        </div>

        {/* Features */}
        <div className='flex-1'>
          <div className='h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6' />
          <ul className='space-y-3 mb-6'>
            {features.map((feature, index) => (
              <li key={index} className='flex items-start gap-3'>
                <span className='mt-1 w-1.5 h-1.5 rounded-full bg-violet-500' />
                <span className='text-gray-300'>{feature}</span>
              </li>
            ))}
          </ul>
          <div className='h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent' />
        </div>

        {/* Technologies */}
        <div className='mt-6'>
          <h4 className='text-sm font-medium text-gray-400 mb-3'>
            Technologies
          </h4>
          <div className='flex flex-wrap gap-3'>
            {technologies.map(({ name, icon: Icon }, index) => (
              <div
                key={index}
                className='flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-xs bg-violet-500/10 text-violet-300'>
                <Icon className='w-4 h-4' />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className='mt-8'>
          <Link
            href='#contact'
            className='group w-full rounded-xl px-4 py-3 flex items-center justify-center gap-2 transition-all duration-300 bg-violet-500 hover:bg-violet-600 text-white shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] transform hover:-translate-y-0.5'>
            Contact Us
            <IconArrowRight className='w-4 h-4 transition-transform group-hover:translate-x-1' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
