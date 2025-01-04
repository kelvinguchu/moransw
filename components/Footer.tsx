"use client";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import Image from "next/image";
import {
  IconBrandGithub,
  IconBrandTwitter,
  IconBrandInstagram,
  IconBrandFacebook,
  IconBrandTiktok,
  IconMail,
  IconPhone,
  IconBrandWhatsapp,
  IconRobot,
} from "@tabler/icons-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const navigation = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "WhatsApp",
    href: "https://wa.me/254792554525",
    icon: IconBrandWhatsapp,
  },
  {
    name: "Email",
    href: "mailto:astraquesoftwares@gmail.com",
    icon: IconMail,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/astraque_softwares/",
    icon: IconBrandInstagram,
  },
  {
    name: "Facebook",
    href: "https://web.facebook.com/profile.php?id=61565577734760",
    icon: IconBrandFacebook,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@astraque_softwares?lang=en",
    icon: IconBrandTiktok,
  },
  {
    name: "Twitter",
    href: "https://x.com/astraque_kenya",
    icon: IconBrandTwitter,
  },
];

// Easter Egg Animation Component
const EasterEgg: FC = () => {
  return (
    <div className='relative w-full h-full'>
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className='absolute inset-0 flex items-center justify-center'>
        <div className='relative w-32 h-32'>
          {/* 3D Cube Effect */}
          <motion.div
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className='absolute inset-0'>
            <div className='absolute inset-0 border-2 border-violet-500/30 rounded-xl transform rotate-45' />
            <div className='absolute inset-0 border-2 border-indigo-500/30 rounded-xl transform -rotate-45' />
            <div className='absolute inset-0 flex items-center justify-center'>
              <IconRobot className='w-12 h-12 text-violet-500/50' />
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* Floating particles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: -100,
            opacity: [0, 1, 0],
            x: Math.sin(i) * 20,
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeOut",
          }}
          className='absolute bottom-0 left-1/2'>
          <div className='w-1 h-1 rounded-full bg-violet-500/30' />
        </motion.div>
      ))}
    </div>
  );
};

const Footer: FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by rendering a placeholder during SSR
  const logoSrc = mounted
    ? theme === "dark"
      ? "/logo.png"
      : "/logo-bw.png"
    : "/logo.png";

  return (
    <footer className={cn("relative mt-8 bg-black", spaceGrotesk.variable)}>
      {/* Premium Gradient Border */}
      <div className='absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent' />

      {/* Content */}
      <div className='mx-auto max-w-7xl px-6 pb-12 pt-16 lg:px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-16'>
          {/* Brand Section */}
          <div className='space-y-6'>
            <div className='flex items-center space-x-3'>
              <Image
                src={logoSrc}
                width={40}
                height={40}
                alt='logo'
                className='rounded-full'
                priority
              />
              <span className='text-xl font-semibold text-white tracking-tight'>
                Astraque <span className='text-violet-500'>Softwares</span>
              </span>
            </div>
            <p className='text-sm leading-6 text-gray-300'>
              Building Africa's digital future through innovative software
              solutions and premium web development.
            </p>
            <div className='flex flex-wrap gap-4 sm:gap-6'>
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-gray-400 hover:text-white transition-colors'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-5 w-5' />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className='flex flex-col items-start pt-4 sm:pt-0'>
            <h3 className='text-sm font-semibold leading-6 text-white mb-4 sm:mb-6'>
              Navigation
            </h3>
            <ul role='list' className='space-y-3 sm:space-y-4'>
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className='text-sm leading-6 text-gray-300 hover:text-white transition-colors'>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Navigation */}
          <div className='flex flex-col items-start pt-4 sm:pt-0'>
            <h3 className='text-sm font-semibold leading-6 text-white mb-4 sm:mb-6'>
              Contact
            </h3>
            <ul role='list' className='space-y-3 sm:space-y-4'>
              <li>
                <Link
                  href='tel:+254792554525'
                  className='text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                  <IconPhone className='w-4 h-4' />
                  <span>+254 792 554525</span>
                </Link>
              </li>
              <li>
                <Link
                  href='tel:+254792194217'
                  className='text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                  <IconPhone className='w-4 h-4' />
                  <span>+254 792 194217</span>
                </Link>
              </li>
              <li>
                <Link
                  href='mailto:astraquesoftwares@gmail.com'
                  className='text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center gap-2'>
                  <IconMail className='w-4 h-4' />
                  <span>astraquesoftwares@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Easter Egg Section */}
          <div className='flex items-center sm:items-start justify-center sm:justify-end pt-8 sm:pt-0'>
            <div className='w-32 h-32'>
              <EasterEgg />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='mt-12 sm:mt-16 border-t border-white/10 pt-6 sm:pt-8'>
          <p className='text-sm leading-5 text-gray-400 text-center sm:text-left'>
            &copy; {new Date().getFullYear()} Astraque. All rights reserved.
          </p>
        </div>
      </div>

      {/* Background Elements */}
      <div className='absolute inset-0 -z-10 overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.05),transparent_50%)]' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(99,102,241,0.05),transparent_50%)]' />
      </div>
    </footer>
  );
};

export default Footer;
