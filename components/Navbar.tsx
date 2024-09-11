// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Poppins } from "next/font/google";
import MobileMenu from "./MobileMenu";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 w-full md:px-6 px-2 py-1.5 z-50 flex justify-between items-center bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 font-Century",
        className
      )}>
      {/* Left Side: Logo and Title */}
      <div className='flex items-center space-x-4'>
        <Link href='/' className='cursor-pointer flex items-center gap-1 md:px-4 px-0'>
          <Image
            src={theme === "dark" ? "/logo.png" : "/logo-bw.png"}
            width={150}
            height={60}
            alt='logo'
            className='rounded-full'
          />
        </Link>
      </div>

      {/* Desktop Menu: Center */}
      <div className='hidden md:flex flex-1 justify-center items-center'>
        <Menu setActive={setActive}>
          <MenuItem
            setActive={setActive}
            active={active}
            item='Services'
            href='/#services'
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item='Recent Projects'
            href='/projects'
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item='Pricing'
            href='/#pricing'
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item='0792 554525'
            href='tel:+254792554525'
          />
          <MenuItem
            setActive={setActive}
            active={active}
            item='0792 194217'
            href='tel:+254792194217'
          />
        </Menu>
      </div>

      {/* Right Side: Dark Mode Toggle and Mobile Menu */}
      <div className='flex items-center space-x-2'>
        <div className='hidden md:flex'>
          <DarkModeToggle />
        </div>
        <div className='md:hidden'>
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
