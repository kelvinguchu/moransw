"use client";

import React, { useEffect, useState } from "react";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaPhoneAlt,
  FaEnvelope,
  FaTwitter,
} from "react-icons/fa";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useTheme } from 'next-themes';

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "500",
});

const ContactButton: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(text);
    setTimeout(() => setCopied(null), 2000); // Reset after 2 seconds
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme || "light");
  }, [theme]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <HoverBorderGradient
          as='button'
          onClick={() => setIsOpen(true)}
          containerClassName='rounded-full'
          className='flex items-center space-x-2 bg-transparent py-3 px-6 text-sm font-semibold leading-6 text-white rounded-full'
          duration={1}
          clockwise>
          <span className={poppins.className}>Get In Touch Now</span>
        </HoverBorderGradient>
      </DialogTrigger>
      <DialogContent
        className={cn(
          "bg-[#f2eaff] mxl-2 mr-2 md:mx-0 dark:bg-black text-gray-900 dark:text-white p-6 rounded-[15px] md:rounded-2xl shadow-xl w-full max-w-md border border-gray-300 dark:border-indigo-600",
          "flex flex-col items-center space-y-6"
        )}>
        {/* Logo */}
        <Image
          src={theme === "dark" ? "/logo.png" : "/logo-bw.png"}
          width={150}
          height={60}
          alt='logo'
          className='rounded-full'
        />

        {/* Contact Info */}
        <div className='space-y-4 text-center'>
          <ContactItem
            icon={<FaPhoneAlt />}
            label='Call Jeff'
            contact='+254 792 554525'
            onCopy={() => handleCopy("+254 792 554525")}
            copied={copied === "+254 792 554525"}
            href='tel:+254792554525'
          />
          <ContactItem
            icon={<FaPhoneAlt />}
            label='Call Kelvin'
            contact='+254 792 194217'
            onCopy={() => handleCopy("+254 792 194217")}
            copied={copied === "+254 792 194217"}
            href='tel:+254792194217'
          />
          <ContactItem
            icon={<FaEnvelope />}
            label='Email'
            contact='astraquesoftwares@gmail.com'
            onCopy={() => handleCopy("astraquesoftwares@gmail.com")}
            copied={copied === "astraquesoftwares@gmail.com"}
            href='#'
          />
        </div>

        {/* Social Media Links */}
        <div className='flex space-x-4 text-lg'>
          <SocialLink href='https://wa.me/254792554525' icon={<FaWhatsapp />} />
          <SocialLink
            href='https://www.instagram.com/astraque_softwares/'
            icon={<FaInstagram />}
          />
          <SocialLink
            href='https://web.facebook.com/profile.php?id=61565098643904'
            icon={<FaFacebook />}
          />
          <SocialLink
            href='https://www.tiktok.com/@astraque_softwares?lang=en'
            icon={<FaTiktok />}
          />
          <SocialLink
            href='https://x.com/astraque_kenya'
            icon={<FaTwitter />}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

// Contact Item Component
interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  contact: string;
  onCopy?: () => void;
  copied?: boolean;
  href: string;
}

function ContactItem({
  icon,
  label,
  contact,
  onCopy,
  copied,
  href,
}: ContactItemProps) {
  return (
    <div className='relative w-full'>
      <a
        href={href}
        onClick={(e) => {
          if (label === "Email") {
            e.preventDefault();
            window.open(
              `https://mail.google.com/mail/?view=cm&fs=1&to=${contact}`,
              "_blank"
            );
          }
        }}
        className='flex items-start justify-between w-full py-2 px-4 bg-white border border-indigo-600 dark:bg-transparent rounded-[0.625rem] shadow hover:bg-gray-100 dark:hover:bg-gray-900 transition'>
        <span className='flex items-center space-x-3'>
          <span className='text-xl'>{icon}</span>
          <span className='flex flex-col items-start'>
            <span className='font-semibold'>{label}</span>
            <span className='text-gray-500 dark:text-gray-400'>{contact}</span>
          </span>
        </span>
        {onCopy && (
          <Badge
            onClick={(e) => {
              e.preventDefault();
              onCopy();
            }}
            className='cursor-pointer bg-indigo-600 text-white text-[10px] rounded-full hover:border border-indigo-600 px-1.5 py-1'>
            {copied
              ? label === "Email"
                ? "Email Copied"
                : "Number Copied"
              : label === "Email"
              ? "Copy Email"
              : "Copy Number"}
          </Badge>
        )}
      </a>
    </div>
  );
}

// Social Media Link Component
interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='p-2 bg-white dark:bg-indigo-600 rounded-full shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition'>
      {icon}
    </a>
  );
}

export default ContactButton;
