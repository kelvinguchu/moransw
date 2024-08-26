// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import MobileMenu from "./MobileMenu";
import DarkModeToggle from "./DarkModeToggle";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mode, setMode] = useState<string>("dark");

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
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
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggleTheme = (newTheme: string) => {
    setMode(newTheme);
  };

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
          width={150}
          height={60}
          alt='logo'
          className='rounded-full'
        />
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
          {/* Call Numbers as Menu Items */}
          <MenuItem
            setActive={setActive}
            active={active}
            item='0792 554525'
            href='tel:+254792554525' // Link to make the call
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item='0792 194217'
            href='tel:+254792194217' // Link to make the call
          />
        </Menu>
      </div>

      {/* Right Side: Dark Mode Toggle and Mobile Menu */}
      <div className='flex items-center space-x-4'>
        <div className='hidden md:flex'>
          <DarkModeToggle onToggle={toggleTheme} currentTheme={mode} />
        </div>
        <div className='md:hidden'>
          <MobileMenu mode={mode} setMode={setMode} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
