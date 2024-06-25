// components/PricingCard.tsx
import React from "react";

interface PricingCardProps {
  title: string;
  items: { description: string; price: string; technologies: string[] }[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, items }) => {
  return (
    <div className='border-2 rounded-lg p-6 shadow-xl bg-gray-900 border-gradient max-w-[21rem]'>
      <h2 className='text-2xl font-extrabold mb-6 text-white'>{title}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index} className='mb-6'>
            <h3 className='text-xl font-bold text-gray-300'>
              {item.description}
            </h3>
            <p className='text-lg text-gray-400'>{item.price}</p>
            <p className='text-sm text-gray-500'>
              Technologies: {item.technologies.join(", ")}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
