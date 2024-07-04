"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import MobileMenu from "./MobileMenu"; // Import the MobileMenu component
import DarkModeToggle from "./DarkModeToggle"; // Ensure DarkModeToggle is imported

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
          <MenuItem
            setActive={setActive}
            active={active}
            item='Services'
            href='#services' // Link to the section
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item='Our Process'
            href='#process' // Link to the section
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item='Recent Projects'
            href='#recent-projects' // Link to the section
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item='Pricing'
            href='#pricing' // Link to the section
          />
        </Menu>
      </div>

      {/* Right Side: Dark Mode Toggle and Mobile Menu */}
      <div className='flex items-center space-x-4'>
        <div className='hidden md:flex'>
          <DarkModeToggle />
        </div>
        <div className='md:hidden'>
          <MobileMenu mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
