"use client";
import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import DarkModeToggle from "./DarkModeToggle";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiArrowUpRight } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { useRouter, usePathname } from "next/navigation";

const menuItems = [
  { href: "/#about", label: "About", description: "Our story and mission" },
  { href: "/#services", label: "Services", description: "What we offer" },
  { href: "/projects", label: "Projects", description: "Our recent work" },
  { href: "/#pricing", label: "Pricing", description: "Investment plans" },
  { href: "/#contact", label: "Contact", description: "Get in touch" },
];

const contactItems = [
  {
    href: "tel:+254792554525",
    label: "0792 554525",
    icon: "🇰🇪",
    number: "+254792554525",
  },
  {
    href: "tel:+254792194217",
    label: "0792 194217",
    icon: "🇰🇪",
    number: "+254792194217",
  },
];

const MobileMenu: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Always use dark theme logo for initial render
  const logoSrc = "/logo.png";

  // Copy number function
  const handleCopy = async (number: string, index: number) => {
    try {
      await navigator.clipboard.writeText(number);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  if (!mounted) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='relative flex items-center justify-center w-10 h-10 rounded-xl bg-black/20 backdrop-blur-sm border border-white/[0.08] hover:border-violet-500/50 transition-colors duration-300'
        aria-label='Open menu'>
        <div className='absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent' />
        <FiMenu className='w-5 h-5 text-gray-300' />
      </motion.button>
    );
  }

  // After mounting, use theme-dependent logo
  const themeAwareLogo = theme === "dark" ? "/logo.png" : "/logo-bw.png";

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='relative flex items-center justify-center w-10 h-10 rounded-xl bg-black/20 backdrop-blur-sm border border-white/[0.08] hover:border-violet-500/50 transition-colors duration-300'
          aria-label='Open menu'>
          <div className='absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent' />
          <FiMenu className='w-5 h-5 text-gray-300' />
        </motion.button>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='w-full max-w-md border-l border-white/[0.08] bg-black/95 backdrop-blur-2xl p-0'>
        <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
        <SheetDescription className='sr-only'>
          Main navigation menu for mobile devices
        </SheetDescription>
        <div className='relative flex flex-col h-[100vh]'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='relative flex justify-center py-4 border-b border-white/[0.08]'>
            <div className='absolute inset-0 [background:radial-gradient(circle_at_top,rgba(138,124,255,0.1),transparent_70%)]' />
            <Link
              href='/'
              onClick={() => setIsOpen(false)}
              className='relative'>
              <div className='relative w-[150px] h-[55px]'>
                <Image
                  src={themeAwareLogo}
                  width={150}
                  height={55}
                  alt='logo'
                  className='w-full h-full'
                  priority
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <nav className='flex-1 px-6 py-4'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='flex flex-col space-y-2.5'>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className='group relative block p-3.5 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/30 transition-colors duration-300'>
                      {/* Artistic Gradients from Services */}
                      <div className='absolute inset-0 rounded-xl [background:radial-gradient(circle_at_top,rgba(138,124,255,0.1),transparent_70%)]' />
                      <div className='absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent' />
                      <div className='absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 duration-300 bg-gradient-to-b from-violet-500/10 via-transparent to-transparent' />
                      <div className='absolute bottom-0 left-0 w-1/2 h-px opacity-0 group-hover:opacity-100 bg-gradient-to-r from-violet-500/50 to-transparent duration-300' />
                      <div className='absolute top-0 right-0 w-1/2 h-px opacity-0 group-hover:opacity-100 bg-gradient-to-l from-violet-500/50 to-transparent duration-300' />
                      <div className='relative flex items-center justify-between'>
                        <div>
                          <h3 className='text-[15px] font-medium text-white mb-0.5'>
                            {item.label}
                          </h3>
                          <p className='text-xs text-gray-400'>
                            {item.description}
                          </p>
                        </div>
                        <FiArrowUpRight className='w-5 h-5 text-gray-400 group-hover:text-violet-400 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300' />
                      </div>
                    </Link>
                  </SheetClose>
                </motion.div>
              ))}

              {/* Contact Items */}
              <div className='mt-4 pt-4 border-t border-white/[0.08]'>
                {contactItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: (menuItems.length + index) * 0.1 + 0.2,
                    }}>
                    <div className='flex items-center justify-between py-2'>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className='flex items-center gap-2 text-gray-400 hover:text-white transition-colors'>
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </Link>
                      </SheetClose>
                      <button
                        onClick={() => handleCopy(item.number, index)}
                        className='p-1.5 rounded-lg hover:bg-white/[0.08] transition-colors'
                        title='Copy number'>
                        {copiedIndex === index ? (
                          <motion.span
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className='text-green-500 text-xs'>
                            Copied!
                          </motion.span>
                        ) : (
                          <svg
                            className='w-3.5 h-3.5 text-gray-400 group-hover:text-violet-400'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3'
                            />
                          </svg>
                        )}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
