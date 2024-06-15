"use client";
import React, { useState, useEffect } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component
import DarkModeToggle from "./DarkModeToggle"; // Ensure DarkModeToggle is imported
import ContactButton from "./ContactButton";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mode, setMode] = useState<string>("dark");

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 w-full px-6 py-1.5 z-50 flex justify-between items-center bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10",
        className
      )}>
      {/* Left Side: Logo and Title */}
      <div className='flex items-center space-x-4'>
        <Image
          src={mode === "dark" ? "/logo.png" : "/logo-bw.png"}
          width={40}
          height={40}
          alt='logo'
          className='rounded-full'
        />
        <h1 className={`${poppins.className}`}>Moran Softwares</h1>
      </div>

      {/* Desktop Menu: Center */}
      <div className='hidden md:flex flex-1 justify-center items-center'>
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item='Services'>
            <div className='flex flex-col space-y-4 text-sm'>
              <HoveredLink href='/web-dev' className='hover:text-gray-300'>
                Web Application Development
              </HoveredLink>
              <HoveredLink href='/web-dev' className='hover:text-gray-300'>
                Software Development
              </HoveredLink>
              <HoveredLink href='/web-dev' className='hover:text-gray-300'>
                Collaborations
              </HoveredLink>
              <HoveredLink
                href='/interface-design'
                className='hover:text-gray-300'>
                Interface Design
              </HoveredLink>
              <HoveredLink href='/seo' className='hover:text-gray-300'>
                Search Engine Optimization
              </HoveredLink>
              <HoveredLink href='/branding' className='hover:text-gray-300'>
                Branding
              </HoveredLink>
            </div>
          </MenuItem>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Recent Projects'>
            <div className='text-sm grid grid-cols-2 gap-10 p-4'>
              <ProductItem
                title='Moran Bank'
                href='https://moranbank.vercel.app/'
                src='/moranbank.webp'
                description='Prepare for tech interviews like never before.'
              />
              <ProductItem
                title='Aquatreat Solutions Limited'
                href='https://aquatreat.co.ke/'
                src='/aquatreat.webp'
                description='Production ready Tailwind css components for your next project'
              />
              <ProductItem
                title='Scapethru Springs Limited'
                href='https://scapethrusprings.co.ke/'
                src='/scapethru.webp'
                description='Never write from scratch again. Go from idea to blog in minutes.'
              />
              <ProductItem
                title='Youtubify'
                href='https://you-tubify.vercel.app/'
                src='/youtubify.webp'
                description='Respond to government RFPs, RFIs and RFQs 10x faster using AI'
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item='Pricing'>
            <div className='flex flex-col space-y-4 text-sm'>
              <HoveredLink href='/hobby' className='hover:text-gray-300'>
                Hobby
              </HoveredLink>
              <HoveredLink href='/individual' className='hover:text-gray-300'>
                Individual
              </HoveredLink>
              <HoveredLink href='/team' className='hover:text-gray-300'>
                Team
              </HoveredLink>
              <HoveredLink href='/enterprise' className='hover:text-gray-300'>
                Enterprise
              </HoveredLink>
            </div>
          </MenuItem>
        </Menu>
      </div>

      {/* Right Side: Dark Mode Toggle and Mobile Menu */}
      <div className='flex items-center space-x-4'>
        <div className='hidden md:flex'>
          {/* <DarkModeToggle selected={mode} setSelected={setMode} /> */}
          <ContactButton />
        </div>
        <div className='md:hidden'>
          <MobileMenu mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
