"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";

const MobileMenu: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
              src={theme === "dark" ? "/logo.png" : "/logo-bw.png"}
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

                {/* Call Numbers as Menu Items */}
                <SheetClose asChild>
                  <Link
                    href='tel:+254792554525'
                    className='mobilenav-sheet_close w-full'>
                    <p className='text-16 font-semibold'>
                      0792 554525
                    </p>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href='tel:+254792194217'
                    className='mobilenav-sheet_close w-full'>
                    <p className='text-16 font-semibold'>
                     0792 194217
                    </p>
                  </Link>
                </SheetClose>

                <div className='flex justify-center'>
                  <DarkModeToggle />
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
