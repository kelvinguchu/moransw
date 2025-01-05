// components/Navbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import { cn, scrollToSection } from "@/lib/utils";
import Image from "next/image";
import { Inter } from "next/font/google";
import MobileMenu from "./MobileMenu";
import DarkModeToggle from "./DarkModeToggle";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiPhone } from "react-icons/fi";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

function Navbar({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Recent Projects", href: "/projects" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-4 inset-x-4 z-50",
        inter.variable,
        "font-sans",
        className
      )}>
      <div className='mx-auto max-w-7xl'>
        <div
          className={cn(
            "relative rounded-full transition-all duration-300",
            scrolled
              ? "bg-white/[0.07] backdrop-blur-md border border-white/[0.05]"
              : "bg-transparent"
          )}>
          {/* Glow Effect */}
          <div className='absolute inset-0 rounded-full [background:radial-gradient(circle_at_top,rgba(138,124,255,0.08),transparent_70%)]' />

          <div className='relative px-4 py-3'>
            <div className='flex items-center justify-between'>
              {/* Logo */}
              <Link href='/' className='relative flex items-center'>
                <div className='relative w-[130px] h-[45px]'>
                  <Image
                    src='/logo.png'
                    width={130}
                    height={45}
                    alt='logo'
                    className='w-full h-full'
                    priority
                    style={{
                      objectFit: "contain",
                    }}
                  />
                </div>
              </Link>

              {/* Center Navigation */}
              <nav className='hidden md:flex items-center'>
                <div className='flex items-center bg-white/[0.05] rounded-full backdrop-blur-sm'>
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "relative px-5 py-2 text-[15px] text-gray-300 transition-colors",
                        "hover:text-white",
                        activeSection === item.label && "text-white"
                      )}
                      onClick={() => setActiveSection(item.label)}>
                      {item.label}
                      {activeSection === item.label && (
                        <motion.div
                          layoutId='navIndicator'
                          className='absolute inset-0 rounded-full bg-white/[0.08]'
                          transition={{
                            type: "spring",
                            bounce: 0.25,
                            duration: 0.5,
                          }}
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Right Section */}
              <div className='flex items-center gap-2'>
                {/* Contact Button */}
                <div className='hidden lg:flex items-center'>
                  <Link
                    href='tel:+254792554525'
                    className='group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] hover:bg-white/[0.08] transition-colors'>
                    <FiPhone className='w-4 h-4 text-[#8A7CFF]' />
                    <span className='text-[15px] text-gray-300 group-hover:text-white'>
                      0792 554525
                    </span>
                  </Link>
                </div>

                {/* Dark Mode Toggle
                <div className='hidden md:block'>
                  <DarkModeToggle />
                </div> */}

                {/* Mobile Menu */}
                <div className='md:hidden'>
                  <MobileMenu />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

export default Navbar;
