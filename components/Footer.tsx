"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import DarkModeToggle from "./DarkModeToggle";
import { FiTwitter, FiInstagram, FiMail } from "react-icons/fi";
import { FaWhatsapp, FaFacebook, FaTiktok } from "react-icons/fa";
import { useTheme } from "next-themes";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <footer
      className={cn(
        "w-full px-6 py-8 mt-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-200 dark:border-transparent",
        className
      )}>
      <div className='container mx-auto'>
        <div className='flex flex-col space-y-6 items-center md:items-start md:flex-row md:justify-between md:space-y-0'>
          {/* Left Side: Logo and Title */}
          <div className='flex flex-col items-center md:items-start space-y-4'>
            <Image
              src={theme === "dark" ? "/logo.png" : "/logo-bw.png"}
              width={100}
              height={100}
              alt='logo'
              className='rounded-full'
            />
          </div>

          {/* Center: Links */}
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6'>
            <a
              href='#services'
              className='hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-white'>
              Services
            </a>
            <a
              href='#process'
              className='hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-white'>
              Our Process
            </a>
            <a
              href='#recent-projects'
              className='hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-white'>
              Recent Projects
            </a>
            <a
              href='#pricing'
              className='hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-white'>
              Pricing
            </a>
          </div>

          {/* Right Side: Social Media and Dark Mode Toggle */}
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
            <div className='flex space-x-4 text-gray-900 dark:text-white'>
              <a
                href='https://wa.me/254792554525'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'>
                <FaWhatsapp size={24} />
              </a>
              <a
                href='mailto:astraquesoftwares@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'>
                <FiMail size={24} />
              </a>
              <a
                href='https://www.instagram.com/astraque_softwares/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'>
                <FiInstagram size={24} />
              </a>
              <a
                href='https://web.facebook.com/profile.php?id=61565098643904'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'>
                <FaFacebook size={24} />
              </a>
              <a
                href='https://www.tiktok.com/@astraque_softwares?lang=en'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'>
                <FaTiktok size={24} />
              </a>
              <a
                href='https://x.com/astraque_kenya'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'>
                <FiTwitter size={24} />
              </a>
            </div>
            <DarkModeToggle />
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-sm text-gray-900 dark:text-gray-400'>
            © {currentYear} Astraque Softwares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
