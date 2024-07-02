// components/Footer.tsx
"use client";
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import DarkModeToggle from "./DarkModeToggle"; // Ensure DarkModeToggle is imported
import { FiTwitter, FiInstagram, FiLinkedin, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

const Footer: React.FC<{ className?: string }> = ({ className }) => {
  const [mode, setMode] = useState<string>("dark");

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={cn(
        "w-full px-6 py-8 mt-10 bg-gray-800 text-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10",
        className
      )}>
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
            <h1 className={`${poppins.className}`}>Moran Softwares</h1>
          </div>

          {/* Center: Links */}
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6'>
            <a href='#services' className='hover:text-gray-400'>
              Services
            </a>
            <a href='#process' className='hover:text-gray-400'>
              Our Process
            </a>
            <a href='#recent-projects' className='hover:text-gray-400'>
              Recent Projects
            </a>
            <a href='#pricing' className='hover:text-gray-400'>
              Pricing
            </a>
          </div>

          {/* Right Side: Social Media and Dark Mode Toggle */}
          <div className='flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4'>
            <div className='flex space-x-4'>
              <a
                href='https://wa.me/254725799783'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'>
                <FaWhatsapp size={24} />
              </a>
              <a
                href='mailto:kelvinguchu5@gmail.com'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'>
                <FiMail size={24} />
              </a>
              <a
                href='https://twitter.com/guchu_ke'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'>
                <FiTwitter size={24} />
              </a>
              <a
                href='https://instagram.com/guchu_ke'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'>
                <FiInstagram size={24} />
              </a>
              <a
                href='https://www.linkedin.com/in/kelvin-guchu-28b087222/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-gray-400'>
                <FiLinkedin size={24} />
              </a>
            </div>
            <DarkModeToggle selected={mode} setSelected={setMode} />
          </div>
        </div>

        <div className='text-center mt-8'>
          <p className='text-sm'>
            © {currentYear} Moran Softwares. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
