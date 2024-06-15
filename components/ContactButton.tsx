"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { Poppins } from "next/font/google";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient"; 

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500",
});

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <HoverBorderGradient
        as='button'
        onClick={() => setIsOpen(true)}
        containerClassName='rounded-full shadow-2xl shadow-zinc-900'
        className='flex items-center space-x-2 bg-transparent py-3 px-6 text-sm font-semibold leading-6 text-white rounded-full'
        duration={1}
        clockwise>
        <Logo />
        <span className={`${poppins.className}`}>Get In Touch Now</span>
      </HoverBorderGradient>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className='fixed inset-0 z-40 grid place-items-center bg-black/60 backdrop-blur-md p-8 overflow-y-scroll cursor-pointer'>
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{
                scale: 1,
                transition: { type: "spring", stiffness: 120 },
              }}
              exit={{ scale: 0.7 }}
              onClick={(e) => e.stopPropagation()}
              className='relative z-50 w-full max-w-lg p-6 bg-gray-800 bg-opacity-40 backdrop-blur-md text-white rounded-lg shadow-xl border border-white/10 overflow-hidden'>
              <div className='relative z-10 text-center'>
                <h3 className='text-3xl font-bold mb-8'>Contact Information</h3>
                <div className='space-y-4'>
                  <ContactItem
                    icon={<FaWhatsapp />}
                    label='WhatsApp'
                    contact='+254725799783'
                    href='https://wa.me/254725799783'
                  />
                  <ContactItem
                    icon={<FaEnvelope />}
                    label='Email'
                    contact='kelvinguchu5@gmail.com'
                    href='mailto:kelvinguchu5@gmail.com'
                  />
                  <ContactItem
                    icon={<FaTwitter />}
                    label='Twitter'
                    contact='@guchu_ke'
                    href='https://twitter.com/guchu_ke'
                  />
                  <ContactItem
                    icon={<FaInstagram />}
                    label='Instagram'
                    contact='@guchu_ke'
                    href='https://instagram.com/guchu_ke'
                  />
                  <ContactItem
                    icon={<FaLinkedin />}
                    label='LinkedIn'
                    contact='Kelvin Guchu'
                    href='https://www.linkedin.com/in/kelvin-guchu-28b087222/'
                  />
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className='mt-6 w-full py-2 text-white border border-white/20 rounded transition-colors hover:bg-white/10 hover:text-gray-300'>
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ContactItem = ({
  icon,
  label,
  contact,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  contact: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center gap-3 text-lg py-2 px-4 border  bg-transparent rounded-lg transition-colors duration-300 hover:bg-gray-600'>
      <span className='text-xl'>{icon}</span>
      <div className='text-left'>
        <span className='font-semibold'>{label}</span>
        <div className='text-sm text-gray-300'>{contact}</div>
      </div>
    </a>
  );
};

const Logo = () => {
  return (
    <img
      src='/logo.svg'
      alt='Logo'
      width='24'
      height='24'
      className='h-6 w-6'
    />
  );
};

export default ContactButton;
