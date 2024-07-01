// components/Divider.tsx
import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent my-4 sm:my-6 md:my-8 lg:my-10 ${className}`}
    />
  );
};

export default Divider;
