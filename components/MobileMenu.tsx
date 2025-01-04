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
  { href: "tel:+254792554525", label: "0792 554525", icon: "🇰🇪" },
  { href: "tel:+254792194217", label: "0792 194217", icon: "🇰🇪" },
];

const MobileMenu: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleNavigation = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      // For same page sections
      const sectionId = href.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // For different pages, use Next.js router
      router.push(href);
    }
  };

  // Prevent hydration mismatch by rendering a placeholder during SSR
  const logoSrc = mounted
    ? theme === "dark"
      ? "/logo.png"
      : "/logo-bw.png"
    : "/logo.png";

  if (!mounted) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className='relative flex items-center justify-center w-10 h-10 rounded-xl bg-black/20 backdrop-blur-sm border border-white/[0.08] hover:border-violet-500/50 transition-colors duration-300'>
          <div className='absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent' />
          <FiMenu className='w-5 h-5 text-gray-300' />
        </motion.button>
      </SheetTrigger>
      <SheetContent
        side='right'
        className='w-full max-w-md border-l border-white/[0.08] bg-black/95 backdrop-blur-2xl p-0'>
        <div className='flex flex-col h-full'>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className='relative flex justify-center py-8 border-b border-white/[0.08]'>
            <div className='absolute inset-0 bg-gradient-to-b from-violet-500/10 to-transparent pointer-events-none' />
            <Link href='/' onClick={() => setIsOpen(false)}>
              <Image
                src={logoSrc}
                width={130}
                height={50}
                alt='logo'
                className='transition-transform hover:scale-105'
                priority
              />
            </Link>
          </motion.div>

          {/* Navigation Items */}
          <nav className='flex-1 py-8 px-6'>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className='flex flex-col space-y-3'>
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  onHoverStart={() => setActiveIndex(index)}
                  onHoverEnd={() => setActiveIndex(null)}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation(item.href);
                      }}
                      className='group relative block p-4 rounded-xl border border-white/[0.08] bg-white/[0.02] hover:bg-white/[0.05] hover:border-violet-500/30 transition-colors duration-300'>
                      <div className='absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                      <div className='relative flex items-center justify-between'>
                        <div>
                          <h3 className='text-lg font-medium text-white mb-1'>
                            {item.label}
                          </h3>
                          <p className='text-sm text-gray-400'>
                            {item.description}
                          </p>
                        </div>
                        <FiArrowUpRight className='w-5 h-5 text-gray-400 group-hover:text-violet-400 transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300' />
                      </div>
                      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                        <div className='absolute inset-0 bg-gradient-to-r from-violet-500/10 via-transparent to-transparent' />
                        <div className='absolute right-0 bottom-0 w-32 h-32 bg-gradient-to-tl from-violet-500/20 via-transparent to-transparent rounded-tl-full' />
                      </div>
                    </Link>
                  </SheetClose>
                </motion.div>
              ))}
            </motion.div>
          </nav>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className='mt-auto p-6 border-t border-white/[0.08]'>
            <div className='relative p-4 rounded-xl border border-white/[0.08] bg-white/[0.02]'>
              <div className='absolute inset-0 rounded-xl bg-gradient-to-b from-white/5 to-transparent' />
              <h3 className='relative text-lg font-medium text-white mb-4'>
                Contact Us
              </h3>
              <div className='relative space-y-2'>
                {contactItems.map((item, index) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className='flex items-center gap-2 text-gray-400 hover:text-violet-400 transition-colors duration-300'>
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
