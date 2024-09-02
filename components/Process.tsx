"use client";

import React from "react";
import { FiPhoneCall, FiCode, FiCheckCircle, FiSettings } from "react-icons/fi";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import { Space_Grotesk } from "next/font/google";
import Header from "./Header";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

interface StepCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const StepCard: React.FC<StepCardProps> = ({ title, description, icon }) => {
  return (
    <div className='flex flex-col items-center p-4 md:p-6'>
      <div className='flex items-center justify-center w-16 h-16 rounded-full mb-4 border shadow-lg'>
        {icon}
      </div>
      <h3 className='text-lg md:text-xl font-semibold mb-2 text-center'>
        <span>{title}</span>
      </h3>
      <p className='text-sm text-center break-words'>{description}</p>
    </div>
  );
};

const StepCards: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const steps = [
    {
      title: "Step 1: Call & Meet",
      description:
        "Begin with a foundational meeting to set goals and align on the project scope, ensuring a clear path forward.",
      icon: <FiPhoneCall size={32} />,
    },
    {
      title: "Step 2: Development",
      description:
        "Engage in intensive development using cutting-edge technology to create a refined prototype through iterative enhancements.",
      icon: <FiCode size={32} />,
    },
    {
      title: "Step 3: Deliver",
      description:
        "Conclude with rigorous testing and final adjustments, focusing on quality assurance for a successful project launch.",
      icon: <FiCheckCircle size={32} />,
    },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <section>
      <Header title='Our Process' />
      <div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-4'>
        {steps.map((step, index) => (
          <MagicCard
            key={index}
            className='cursor-pointer flex-col items-center justify-center shadow-lg hover:shadow-2xl w-full max-w-xs md:max-w-sm h-auto md:h-72'
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}>
            <StepCard
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          </MagicCard>
        ))}
      </div>
    </section>
  );
};

export default StepCards;
