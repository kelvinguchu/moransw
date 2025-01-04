import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import { useTheme } from "next-themes";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

const DarkModeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set theme to dark only if it hasn't been set before
    if (localStorage.getItem("theme") === null) {
      setTheme("dark");
    }
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='relative flex w-fit items-center rounded-full'>
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "light" ? "text-slate-800" : "text-slate-300"
        }`}
        onClick={() => setTheme("light")}>
        <FiSun className='relative z-10 text-lg md:text-sm' />
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => setTheme("dark")}>
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
