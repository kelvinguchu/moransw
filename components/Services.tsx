"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  IconBrandJavascript,
  IconBrandReact,
  IconBrandWordpress,
  IconBrandGoogle,
  IconCode,
  IconDatabase,
  IconShoppingCart,
  IconBrandFigma,
} from "@tabler/icons-react";
import { Inter, Space_Grotesk } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  visual: React.ReactNode;
  className?: string;
  index: number;
}

// Visual Components
const CodeVisual: React.FC = () => (
  <div className='relative w-full aspect-[16/9] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-black/40 backdrop-blur-sm'>
    <div className='absolute inset-0 flex'>
      {/* Editor-like interface */}
      <div className='w-full h-full flex flex-col'>
        {/* Tab bar */}
        <div className='flex items-center px-4 py-2 bg-black/20 border-b border-white/5'>
          <div className='flex space-x-2'>
            <div className='w-3 h-3 rounded-full bg-[#FF5F56]'></div>
            <div className='w-3 h-3 rounded-full bg-[#FFBD2E]'></div>
            <div className='w-3 h-3 rounded-full bg-[#27C93F]'></div>
          </div>
          <div className='ml-4 px-3 py-1 rounded-md bg-black/20 text-[10px] text-gray-400'>
            App.tsx
          </div>
        </div>
        {/* Code content */}
        <pre className='p-4 text-[10px] md:text-xs font-mono text-gray-300/75 overflow-hidden'>
          <code className='flex flex-col gap-1'>
            <span className='text-blue-400'>import</span>
            <span className='text-gray-400'>{"const App = () => {"}</span>
            <span className='text-violet-400 pl-2'>
              {"  const [data, setData] = useState<Data[]>([])"}
            </span>
            <span className='text-emerald-400 pl-2'>
              {"  // Fetch & process data"}
            </span>
            <span className='text-orange-400 pl-2'>
              {"  return <Layout>{/* ... */}</Layout>"}
            </span>
            <span className='text-gray-400'>{"}"}</span>
          </code>
        </pre>
      </div>
    </div>
    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
  </div>
);

const WordPressVisual: React.FC = () => (
  <div className='relative w-full aspect-[16/9] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#0073AA]/10 to-black/40 backdrop-blur-sm'>
    <div className='absolute inset-0 p-4'>
      <div className='h-full flex flex-col'>
        {/* WP Admin Bar */}
        <div className='flex items-center justify-between mb-3 px-3 py-2 bg-white/5 rounded-lg'>
          <div className='flex items-center space-x-3'>
            <IconBrandWordpress className='w-4 h-4 text-[#0073AA]/50' />
            <div className='text-[10px] text-gray-400'>WordPress Dashboard</div>
          </div>
          <div className='flex space-x-2'>
            <div className='w-4 h-4 rounded bg-white/10'></div>
            <div className='w-4 h-4 rounded bg-[#0073AA]/20'></div>
          </div>
        </div>
        {/* Content area */}
        <div className='flex-1 grid grid-cols-4 gap-3'>
          <div className='col-span-1 flex flex-col space-y-2'>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-6 bg-white/5 rounded'></div>
            ))}
          </div>
          <div className='col-span-3 bg-gradient-to-br from-white/5 to-transparent rounded-lg p-3'>
            <div className='grid grid-cols-2 gap-2 h-full'>
              <div className='bg-white/5 rounded-lg'></div>
              <div className='grid grid-rows-2 gap-2'>
                <div className='bg-[#0073AA]/10 rounded-lg'></div>
                <div className='bg-white/5 rounded-lg'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
  </div>
);

const DatabaseVisual: React.FC = () => (
  <div className='relative w-full aspect-[16/9] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#EAB308]/10 to-black/40 backdrop-blur-sm'>
    <div className='absolute inset-0 p-4'>
      <div className='h-full flex flex-col'>
        {/* Database interface header */}
        <div className='flex items-center justify-between mb-3 px-3 py-2 bg-white/5 rounded-t-lg border-b border-white/5'>
          <div className='text-[10px] text-gray-400'>Database Schema</div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 rounded bg-[#EAB308]/20'></div>
            <div className='w-4 h-4 rounded bg-white/10'></div>
          </div>
        </div>
        {/* Database tables */}
        <div className='flex-1 grid grid-cols-2 gap-3'>
          <div className='flex flex-col space-y-1'>
            <div className='h-6 bg-white/5 rounded'></div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-4 bg-white/[0.03] rounded'></div>
            ))}
          </div>
          <div className='flex flex-col space-y-1'>
            <div className='h-6 bg-[#EAB308]/10 rounded'></div>
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className='h-4 bg-white/[0.03] rounded'></div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
  </div>
);

const EcommerceVisual: React.FC = () => (
  <div className='relative w-full aspect-[16/9] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#FF5733]/10 to-black/40 backdrop-blur-sm'>
    <div className='absolute inset-0 p-4'>
      <div className='h-full flex flex-col'>
        {/* Store interface */}
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center space-x-3'>
            <IconShoppingCart className='w-4 h-4 text-[#FF5733]/50' />
            <div className='text-[10px] text-gray-400'>Store Dashboard</div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='px-2 py-1 rounded bg-[#FF5733]/20 text-[10px] text-[#FF5733]'>
              Live
            </div>
          </div>
        </div>
        {/* Store content */}
        <div className='flex-1 grid grid-cols-3 gap-3'>
          <div className='col-span-2 grid grid-rows-2 gap-3'>
            <div className='bg-white/5 rounded-lg p-2'>
              <div className='w-1/3 h-2 bg-white/10 rounded mb-2'></div>
              <div className='w-1/2 h-2 bg-[#FF5733]/20 rounded'></div>
            </div>
            <div className='grid grid-cols-2 gap-3'>
              <div className='bg-white/5 rounded-lg'></div>
              <div className='bg-white/5 rounded-lg'></div>
            </div>
          </div>
          <div className='bg-gradient-to-br from-white/5 to-transparent rounded-lg'></div>
        </div>
      </div>
    </div>
    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
  </div>
);

const SEOVisual: React.FC = () => (
  <div className='relative w-full aspect-[16/9] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#4285F4]/10 to-black/40 backdrop-blur-sm'>
    <div className='absolute inset-0 p-4'>
      <div className='h-full flex flex-col'>
        {/* Analytics Header */}
        <div className='flex items-center justify-between mb-3'>
          <div className='flex items-center space-x-3'>
            <IconBrandGoogle className='w-4 h-4 text-[#4285F4]/50' />
            <div className='text-[10px] text-gray-400'>Analytics Dashboard</div>
          </div>
          <div className='px-2 py-1 rounded bg-[#4285F4]/20 text-[10px] text-[#4285F4]'>
            Live
          </div>
        </div>
        {/* Analytics Content */}
        <div className='flex-1 grid grid-rows-2 gap-3'>
          <div className='grid grid-cols-3 gap-3'>
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className='bg-white/5 rounded-lg p-2'>
                <div className='w-1/2 h-2 bg-white/10 rounded mb-2'></div>
                <div className='w-2/3 h-2 bg-[#4285F4]/20 rounded'></div>
              </div>
            ))}
          </div>
          <div className='bg-white/5 rounded-lg p-3'>
            <div className='h-full flex items-end space-x-2'>
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className='w-full bg-[#4285F4]/20 rounded-t'
                  style={{ height: `${Math.random() * 100}%` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
  </div>
);

const FigmaVisual: React.FC = () => (
  <div className='relative w-full aspect-[16/9] rounded-t-3xl overflow-hidden bg-gradient-to-br from-[#F24E1E]/20 to-black/40 backdrop-blur-sm'>
    <div className='absolute inset-0 p-4'>
      <div className='h-full flex flex-col'>
        {/* Figma-style toolbar */}
        <div className='flex items-center justify-between mb-3 px-3 py-1.5 bg-white/5 rounded-lg'>
          <div className='flex items-center space-x-2'>
            <div className='w-2 h-2 rounded-full bg-[#F24E1E]'></div>
            <div className='text-[10px] text-gray-400'>Main</div>
          </div>
          <div className='flex items-center space-x-2'>
            <div className='w-4 h-4 rounded bg-white/10'></div>
            <div className='w-4 h-4 rounded bg-white/10'></div>
          </div>
        </div>
        {/* Design elements */}
        <div className='flex-1 grid grid-cols-12 gap-2'>
          <div className='col-span-3 bg-white/5 rounded-lg'></div>
          <div className='col-span-6 grid grid-rows-3 gap-2'>
            <div className='bg-white/10 rounded-lg'></div>
            <div className='bg-[#F24E1E]/20 rounded-lg'></div>
            <div className='bg-white/5 rounded-lg'></div>
          </div>
          <div className='col-span-3 grid grid-rows-2 gap-2'>
            <div className='bg-white/5 rounded-lg'></div>
            <div className='bg-white/10 rounded-lg'></div>
          </div>
        </div>
      </div>
    </div>
    <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
  </div>
);

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  visual,
  className,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-3xl h-[420px]",
        "bg-black shadow-[0_0_0_1px_rgba(255,255,255,0.05)]",
        "transition-all duration-500",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_4px_20px_-4px_rgba(0,0,0,0.5)]",
        "backdrop-blur-sm",
        spaceGrotesk.variable,
        className
      )}>
      {/* Background Gradient */}
      <div className='absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

      {/* Hover Glow Effect */}
      <div className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500'>
        <div className='absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent' />
        <div className='absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent' />
      </div>

      {/* Content */}
      <div className='relative flex flex-col h-full'>
        {/* Visual Section */}
        <div className='relative'>
          {visual}
          {/* Additional gradient for smoother transition */}
          <div className='absolute -bottom-6 left-0 right-0 h-12 bg-gradient-to-t from-black to-transparent' />
        </div>

        {/* Text Content */}
        <div className='relative -mt-2 p-6 flex flex-col flex-1'>
          {/* Icon & Title */}
          <div className='flex items-center gap-3 mb-4'>
            <div className='p-2.5 rounded-xl bg-white/[0.05] shadow-[0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-sm transition-all duration-500 group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_2px_8px_-2px_rgba(0,0,0,0.3)] group-hover:bg-white/[0.08]'>
              {icon}
            </div>
            <h3 className='text-[1.25rem] font-semibold text-white/90 transition-colors duration-500 group-hover:text-white font-space-grotesk tracking-tight'>
              {title}
            </h3>
          </div>

          {/* Description */}
          <p className='text-[0.9375rem] text-gray-400 leading-relaxed transition-colors duration-500 group-hover:text-gray-300 font-inter font-light'>
            {description}
          </p>

          {/* Bottom Gradient Line */}
          <div className='mt-auto pt-6'>
            <div className='h-px w-full bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100' />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const items = [
  {
    title: "UI/UX Design",
    description:
      "Professional interface design using Figma and modern design tools. We create beautiful, intuitive designs that enhance user experience and align with your brand identity.",
    visual: <FigmaVisual />,
    icon: <IconBrandFigma className='h-5 w-5 text-[#F24E1E]' />,
  },
  {
    title: "Web & Software Development",
    description:
      "Full-stack development using modern technologies like React, Next.js, Node.js, and more. We build complete digital solutions from simple websites to complex web applications.",
    visual: <CodeVisual />,
    icon: <IconCode className='h-5 w-5 text-[#61DAFB]' />,
  },
  {
    title: "E-commerce Solutions",
    description:
      "Complete online store setups with everything you need to sell online. From product management to secure payments, we build e-commerce experiences that drive sales.",
    visual: <EcommerceVisual />,
    icon: <IconShoppingCart className='h-5 w-5 text-[#FF5733]' />,
  },
  {
    title: "Business Systems",
    description:
      "Custom business software, CRM, and ERP solutions that streamline your operations. Automate workflows, manage data, and boost productivity with tailored software solutions.",
    visual: <DatabaseVisual />,
    icon: <IconDatabase className='h-5 w-5 text-[#EAB308]' />,
  },
  {
    title: "Quick-Launch Platforms",
    description:
      "Fast, professional website solutions using WordPress and other platforms. Ideal for businesses needing a strong online presence quickly without compromising on quality.",
    visual: <WordPressVisual />,
    icon: <IconBrandWordpress className='h-5 w-5 text-[#0073AA]' />,
  },
  {
    title: "Digital Growth Package",
    description:
      "Comprehensive digital presence optimization including SEO, performance tuning, and analytics. Get more visibility, better performance, and data-driven insights.",
    visual: <SEOVisual />,
    icon: <IconBrandGoogle className='h-5 w-5 text-[#4285F4]' />,
  },
];

export function Services() {
  return (
    <section
      id='services'
      className={cn(
        "py-20 relative overflow-hidden",
        inter.variable,
        spaceGrotesk.variable
      )}>
      {/* Section Title */}
      <div className='relative text-center mb-20'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className='flex flex-col items-center'>
          <div className='inline-block mb-4'>
            <div className='flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm'>
              <div className='w-1 h-1 rounded-full bg-violet-500'></div>
              <span className='text-[0.9375rem] font-light tracking-wide text-white/70 font-inter'>
                What we offer
              </span>
              <div className='w-1 h-1 rounded-full bg-indigo-500'></div>
            </div>
          </div>
          <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 font-space-grotesk tracking-tight leading-[1.15]'>
            Our Services
          </h2>
          <p className='max-w-2xl mx-auto text-base text-gray-400 font-light font-inter'>
            Comprehensive digital solutions tailored to transform your ideas
            into reality
          </p>
          <div className='mt-6 flex items-center gap-2'>
            <div className='w-8 h-px bg-gradient-to-r from-transparent to-violet-500/50'></div>
            <div className='w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full'></div>
            <div className='w-8 h-px bg-gradient-to-l from-transparent to-indigo-500/50'></div>
          </div>
        </motion.div>
      </div>

      {/* Cards Grid */}
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr'>
          {items.map((item, i) => (
            <ServiceCard
              key={i}
              index={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              visual={item.visual}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
