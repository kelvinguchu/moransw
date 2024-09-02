import React from "react";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className='text-center my-8'>
      <h2 className='mb-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-indigo-600 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:bg-gradient-to-b dark:from-white dark:to-slate-900/10 dark:text-transparent text-[45px] md:text-[60px]'>
        {title}
      </h2>
    </header>
  );
};

export default Header;