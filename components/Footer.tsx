// components/Footer.tsx
"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import DarkModeToggle from "./DarkModeToggle";
import { FiTwitter, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const currentYear = new Date().getFullYear();
  const [mode, setMode] = useState<string>("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
    setMode(localTheme || systemPreference);
  }, []);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const toggleTheme = (newTheme: string) => {
    setMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <footer
      className={cn(
        "w-full px-6 py-8 mt-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border border-gray-200 dark:border-transparent ",
        className
      )}
    >
      <div className='container mx-auto'>
        <div className='flex flex-wrap justify-center md:justify-between items-center space-y-6 md:space-y-0'>
          {/* Left Side: Logo and Title */}
          <div className='flex items-center justify-center space-x-4'>
            <Image
              src={mode === "dark" ? "/logo.png" : "/logo-bw.png"}
              width={40}
              height={40}
              alt='logo'
              className='rounded-full'
            />
            <h1 className={`${poppins.className} text-gray-900 dark:text-white`}>
              Moran Softwares
            </h1>
          </div>

          {/* Center: Links */}
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6'>
            <a href='#services' className='hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-white'>
              Services
            </a>
            <a href='#process' className='hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-white'>
              Our Process
            </a>
            <a href='#recent-projects' className='hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-white'>
              Recent Projects
            </a>
            <a href='#pricing' className='hover:text-gray-500 dark:hover:text-gray-400 text-gray-900 dark:text-white'>
              Pricing
            </a>
          </div>

          {/* Right Side: Social Media and Dark Mode Toggle */}
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
            <div className='flex space-x-4 text-gray-900 dark:text-white'>
              <a
                href='https://wa.me/254725799783'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href='mailto:kelvinguchu5@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'
              >
                <FiMail size={24} />
              </a>
              <a
                href='https://twitter.com/guchu_ke'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'
              >
                <FiTwitter size={24} />
              </a>
              <a
                href='https://instagram.com/guchu_ke'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'
              >
                <FiInstagram size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/kelvin-guchu-28b087222/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-500 dark:hover:text-gray-400'
              >
                <FiLinkedin size={24} />
              </a>
            </div>
            <DarkModeToggle onToggle={toggleTheme} currentTheme={mode} />
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-sm text-gray-900 dark:text-gray-400'>
            © {currentYear} Moran Softwares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
