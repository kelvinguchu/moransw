// components/Pricing.tsx
import React from "react";
import PricingCard from "./PricingCard";
import Header from "./Header";
import { FiDollarSign } from "react-icons/fi";
import { Space_Grotesk } from "next/font/google";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const pricingData = [
  {
    title: "Starter Package",
    items: [
      {
        description: "Single Page Website",
        price: "KES 15,000",
        technologies: ["HTML", "CSS"],
      },
      {
        description: "Small Business Website (up to 5 pages)",
        price: "KES 30,000",
        technologies: ["React", "NextJS", "JavaScript"],
      },
      {
        description: "Personal Blog Setup",
        price: "KES 20,000",
        technologies: ["WordPress", "HTML", "CSS"],
      },
    ],
  },
  {
    title: "Standard Package",
    items: [
      {
        description: "Corporate Website (up to 10 pages)",
        price: "KES 50,000",
        technologies: ["React", "NextJS", "JavaScript", "WordPress"],
      },
      {
        description: "E-commerce Website",
        price: "KES 70,000",
        technologies: ["WooCommerce (WordPress)", "HTML", "CSS", "JavaScript"],
      },
      {
        description: "Portfolio Website",
        price: "KES 40,000",
        technologies: ["HTML", "CSS", "JavaScript"],
      },
      {
        description: "CRM & ERP implementation",
        price: "KES 35,000",
        technologies: ["Odoo", "Zoho", "ETC."],
      },
    ],
  },
  {
    title: "Advanced Package",
    items: [
      {
        description: "Custom Design & Development",
        price: "KES 80,000",
        technologies: ["React", "NextJS", "CSS", "JavaScript", "MySQL"],
      },
      {
        description: "Large Business Website (10+ pages)",
        price: "KES 100,000",
        technologies: ["React", "NextJS", "CSS", "JavaScript", "MySQL"],
      },
      {
        description: "Membership/Subscription Website",
        price: "KES 90,000",
        technologies: [
          "WordPress",
          "Membership Plugins",
          "HTML",
          "CSS",
          "JavaScript",
          "MySQL",
          "React",
          "NextJS",
        ],
      },
    ],
  },
  {
    title: "Additional Services",
    items: [
      {
        description: "Website Maintenance",
        price: "KES 5,000 per month",
        technologies: ["WordPress", "HTML", "CSS"],
      },
      {
        description: "Content Updates",
        price: "KES 3,000 per update",
        technologies: ["HTML", "CSS", "WordPress"],
      },
      {
        description: "SEO Optimization",
        price: "KES 10,000",
        technologies: ["SEO Tools (e.g., Yoast SEO for WordPress)"],
      },
      {
        description: "Website Hosting Setup",
        price: "KES 5,000",
        technologies: [
          "cPanel",
          "Hosting Platforms (e.g., Hostinger, Bluehost)",
        ],
      },
      {
        description: "Domain Registration",
        price: "KES 2,000",
        technologies: [
          "Domain Registrars (e.g., GoDaddy, Namecheap, Hostinger)",
        ],
      },
      {
        description: "Responsive Design Upgrade",
        price: "KES 10,000",
        technologies: ["CSS", "Bootstrap"],
      },
    ],
  },
];

const Pricing: React.FC = () => {
  return (
    <div className='container mx-auto p-4'>
      <Header
        icon={
          <FiDollarSign className='mx-3 text-violet-600 animate-pulse-spin w-6 h-6' />
        }
        mainText='Our'
        gradientText='Rates'
        additionalClassNames={`${spacegrotesk.className} px-4 mb-4`}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 sm:mx-1 lg:grid-cols-3 gap-8'>
        {pricingData.map((packageData, index) => (
          <PricingCard
            key={index}
            title={packageData.title}
            items={packageData.items}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
