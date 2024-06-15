"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HoveredLink } from "@/components/ui/navbar-menu";
import DarkModeToggle from "./DarkModeToggle";

interface MobileMenuProps {
  mode: string;
  setMode: (mode: string) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ mode, setMode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        className='focus:outline-none'
        onClick={() => setMenuOpen(!menuOpen)}>
        <svg
          className='w-6 h-6 text-white'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16m-7 6h7'
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='absolute top-full left-0 right-0 bg-gray-800 flex flex-col items-center space-y-4 p-4 rounded-b-md shadow-lg z-50'>
            <HoveredLink href='/web-dev' className='hover:text-gray-300'>
              Services
            </HoveredLink>
            <HoveredLink href='/projects' className='hover:text-gray-300'>
              Recent Projects
            </HoveredLink>
            <HoveredLink href='/pricing' className='hover:text-gray-300'>
              Pricing
            </HoveredLink>

            {/* Dark Mode Toggle Inside Mobile Menu */}
            <div className='flex justify-center'>
              <DarkModeToggle selected={mode} setSelected={setMode} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileMenu;
