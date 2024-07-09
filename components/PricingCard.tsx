// components/PricingCard.tsx
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

interface PricingCardProps {
  title: string;
  items: { description: string; price: string; technologies: string[] }[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, items }) => {
  return (
    <div
      className={` ${poppins.className} border-1  rounded-[1rem] p-6 shadow-xl bg-white dark:bg-gradient-to-br from-black via-gray-900 to-black border-gradient max-w-[21rem] md:mx-auto sm:mx-auto mx-auto`}>
      <h2 className='text-2xl font-extrabold mb-6 text-gray-900 dark:text-white'>
        {title}
      </h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className='mb-6'>
            <h3 className='text-xl font-bold text-gray-700 dark:text-gray-300'>
              {item.description}
            </h3>
            <p className='text-lg text-gray-600 dark:text-gray-400'>
              {item.price}
            </p>
            <p className='text-sm text-gray-500 dark:text-gray-500'>
              Technologies: {item.technologies.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
