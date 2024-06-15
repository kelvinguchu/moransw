"use client";
import { FlipWords } from "./FlipWords";
import { Sixtyfour, Poppins } from "next/font/google";
import ContactButton from "./ContactButton";
import { Globe } from "./Globe";
import { Reveal } from "./Reveal";
import { GlowingStarsBackground } from "@/components/ui/glowing-stars";

const sixtyfour = Sixtyfour({
  subsets: ["latin"],
  variable: "--font-sixtyfour",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: "300",
});

const Hero: React.FC = () => {
  const flipWords = [
    "design",
    "s.e.o reach",
    "maintenance",
    "collaboration",
    "AI integration",
  ];

  const colors = [
    "#FF5733", // red-orange
    "#33FF57", // green
    "#3357FF", // blue
    "#FF33A1", // pink
    "#FF8333", // orange
  ];

  return (
    <main className='relative flex flex-col-reverse md:flex-row w-full overflow-hidden group'>
      <GlowingStarsBackground className='absolute inset-0' />
      <div className='w-full md:w-1/2 pt-6 md:pt-[70px] relative z-10 flex flex-col items-center md:items-start text-center md:text-left'>
        <h2 className={`${poppins.className} mb-2 md:mb-4 text-xl md:text-2xl`}>
          Next Generation{" "}
        </h2>
        <Reveal>
          <h1
            className={`${sixtyfour.className} text-4xl md:text-6xl font-semibold mb-2 md:mb-4 leading-snug`}>
            Software{" "}
            <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'>
              Engineers
            </span>
          </h1>
        </Reveal>
        <h3
          className={`${poppins.className} w-full text-lg md:text-xl font-medium mb-2 md:mb-4`}>
          Design. Develop. Intergrate.
        </h3>
        <h3 className='text-lg md:text-xl font-medium'>
          through{" "}
          <FlipWords
            words={flipWords}
            colors={colors}
            duration={3000}
            className='inline-block'
          />
        </h3>
        <div className='mt-8 md:mt-12'>
          <ContactButton />
        </div>
      </div>
      <div className='w-full md:w-3/4 relative z-1 flex justify-center md:justify-end'>
        <Globe/>
      </div>
    </main>
  );
};

export default Hero;
