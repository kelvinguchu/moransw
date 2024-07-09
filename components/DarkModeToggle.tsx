// components/DarkModeToggle.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

interface DarkModeToggleProps {
  onToggle: (theme: string) => void;
  currentTheme: string;
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({
  onToggle,
  currentTheme,
}) => {
  const [theme, setTheme] = useState<string>(currentTheme);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return (
    <div className='relative flex w-fit items-center rounded-full '>
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "light" ? "text-slate-800" : "text-slate-300"
        }`}
        onClick={() => onToggle("light")}>
        <FiSun className='relative z-10 text-lg md:text-sm' />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => onToggle("dark")}>
        <FiMoon className='relative z-10 text-lg md:text-sm' />
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}>
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className='h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600'
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
