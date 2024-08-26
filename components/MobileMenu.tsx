// components/MobileMenu.tsx
"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
  mode: string;
  setMode: (mode: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ mode, setMode }) => {
  const toggleTheme = (newTheme: string) => {
    setMode(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger>
          <Image
            src='/hamburger.svg'
            width={30}
            height={30}
            alt='menu'
            className='cursor-pointer'
          />
        </SheetTrigger>
        <SheetContent
          side='left'
          className='border-none bg-white dark:bg-gradient-to-br from-black via-gray-900 to-black h-screen flex flex-col'>
          <Link
            href='/'
            className='cursor-pointer flex items-center gap-1 px-4'>
            <Image
              src={mode === "dark" ? "/logo.png" : "/logo-bw.png"}
              width={150}
              height={60}
              alt='Moran logo'
            />
           
          </Link>
          <div className='mobilenav-sheet flex-1 overflow-y-auto'>
            <SheetClose asChild>
              <nav className='flex flex-col gap-6 pt-16 text-gray-900 dark:text-white'>
                <SheetClose asChild>
                  <Link
                    href='#services'
                    className='mobilenav-sheet_close w-full'>
                    <p className='text-16 font-semibold'>Services</p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href='#process'
                    className='mobilenav-sheet_close w-full'>
                    <p className='text-16 font-semibold'>Our Process</p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href='#recent-projects'
                    className='mobilenav-sheet_close w-full'>
                    <p className='text-16 font-semibold'>Recent Projects</p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href='#pricing'
                    className='mobilenav-sheet_close w-full'>
                    <p className='text-16 font-semibold'>Pricing</p>
                  </Link>
                </SheetClose>
                <div className='flex justify-center'>
                  <DarkModeToggle onToggle={toggleTheme} currentTheme={mode} />
                </div>
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileMenu;
