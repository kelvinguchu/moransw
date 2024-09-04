import { FaArrowRight } from "react-icons/fa";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import Image from "next/image";
import { useTheme } from 'next-themes';

const DottedButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme();

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setIsOpen(true)}
          className='ml-4 mb-4 inline-flex items-center justify-center text-sm font-semibold transition-all duration-300 hover:opacity-80'
        >
          <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
            Earn Ksh.2500 with us
          </span>
          <FaArrowRight className='ml-2 text-indigo-600' />
        </button>
      </DialogTrigger>
      <DialogContent className='w-[300px] rounded-[0.5rem] md:rounded-[15px] border border-indigo-600 bg-[#f2eaff] dark:bg-black shadow-lg p-6'>
        <div className='flex flex-col items-center space-y-6'>
          {/* Logo */}
          <Image
            src={theme === "dark" ? "/logo.png" : "/logo-bw.png"}
            width={150}
            height={60}
            alt='logo'
            className='rounded-full'
          />

          {/* Message */}
          <h2 className='pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-indigo-600 bg-clip-text text-center text-3xl font-semibold leading-none text-transparent dark:bg-gradient-to-b dark:from-white dark:to-slate-900/10 dark:text-transparent'>
            Earn Big With Us
          </h2>

          {/* Content */}
          <div className='flex flex-col w-full'>
            <DialogItem>Ksh. 1500 - Websites from 15k-20k</DialogItem>
            <DialogItem>Ksh. 2500 - Websites from 25k-50k</DialogItem>
            <DialogItem>Ksh. 7500 - Websites above 50k</DialogItem>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const DialogItem = ({ children }: { children: React.ReactNode }) => (
  <div className='px-4 py-2 hover:bg-indigo-50 dark:hover:bg-indigo-900 cursor-pointer'>
    {children}
  </div>
);

export default DottedButton;
