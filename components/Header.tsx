import React from "react";
import { BorderBeam } from "@/components/ui/border-beam";

interface HeaderProps {
  icon: React.ReactNode;
  mainText: string;
  gradientText: string;
  additionalClassNames?: string;
}

const Header: React.FC<HeaderProps> = ({
  icon,
  mainText,
  gradientText,
  additionalClassNames = "",
}) => {
  return (
    <div
      className={`relative w-full flex flex-col items-center justify-center ${additionalClassNames}`}>
      <h1
        className={`relative md:px-2 md:py-2 py-2 px-2 text-3xl sm:text-4xl md:text-6xl font-semibold border rounded-lg leading-snug text-center md:text-left flex items-center justify-center md:justify-start`}>
        {icon}
        {mainText}{" "}
        <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent ml-3'>
          {gradientText}
        </span>
        <BorderBeam size={40} duration={12} delay={9} />
      </h1>
    </div>
  );
};

export default Header;
