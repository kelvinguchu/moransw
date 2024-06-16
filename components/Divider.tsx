// components/Divider.tsx
import React from "react";

interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className = "" }) => {
  return (
    <div
      className={`w-full h-0.5 bg-gradient-to-r from-transparent via-white to-transparent my-10 ${className}`}
    />
  );
};

export default Divider;
