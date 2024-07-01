"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { Space_Grotesk } from "next/font/google";
import Header from "./Header";
import { FiSmile } from "react-icons/fi";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

interface Review {
  name: string;
  username: string;
  body: string;
  img: string;
}

const reviews: Review[] = [
  {
    name: "C.E.O, Aquatreat Solutions Limited",
    username: "@Isaac Njenga",
    body: "The web development services provided were top-notch. The delivery was timely and exceeded our expectations.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "C.E.O, Pala Handrails",
    username: "@Laban Mwangi",
    body: "Outstanding work on our company website! The attention to detail and professional approach were impressive.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Director, Scapethru Springs Limited",
    username: "@Julius Syanda",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "C.E.O, Switchways Enterprises Limited",
    username: "@Gideon Mwangi",
    body: "Our new website looks fantastic and functions perfectly. The project was completed on time with excellent communication throughout.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Member, Chelco Limited",
    username: "@Jeff Mumbi",
    body: "Implemented the Odoo CRM to our company flawlessly, everything is just smooth. Highly recommend!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Owner, Kariuki Farm",
    username: "@Elishiba Njambi",
    body: "Wonderfully made farm management system, very useful and reliable. Thank you!",
    img: "https://avatar.vercel.sh/james",
  },
];

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => (
  <figure
    className={cn(
      "max-w-xs flex-shrink-0 p-4 mx-auto my-2 rounded-xl shadow-md overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black text-white sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
    )}>
    <div className='flex flex-col items-start'>
      <img
        className='rounded-full h-16 w-16 mb-4'
        src={review.img}
        alt={review.name}
      />
      <figcaption className='text-lg font-semibold'>{review.name}</figcaption>
      <p className='text-sm text-indigo-500'>{review.username}</p>
      <blockquote className='mt-2 text-gray-300'>{review.body}</blockquote>
    </div>
  </figure>
);

const TestimonialCarousel: React.FC = () => {
  const controls = useAnimation();
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!paused) {
      if (window.innerWidth < 640) {
        controls.start({
          y: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        });
      } else {
        controls.start({
          x: ["0%", "-100%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        });
      }
    }
  }, [paused, controls]);

  const handlePauseAnimation = () => {
    setPaused(true);
    controls.stop();
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleResumeAnimation = () => {
    setPaused(false);
  };

  return (
    <section>
      <Header
        icon={
          <FiSmile className='mx-3 text-violet-600 animate-pulse-spin w-6 h-6' />
        }
        mainText='Happy'
        gradientText='Clients'
        additionalClassNames={`${spacegrotesk.className} px-4 mb-4 inverted-glow`}
      />
      <div
        className='relative overflow-hidden w-full sm:w-11/12 max-w-6xl mx-auto h-96 sm:h-auto'
        onMouseEnter={handlePauseAnimation}
        onMouseLeave={handleResumeAnimation}
        onTouchStart={handlePauseAnimation}
        onTouchEnd={handleResumeAnimation}>
        <motion.div
          className='flex sm:flex-row flex-col w-full h-full justify-center sm:justify-start'
          animate={controls}
          style={{ gap: "1rem" }}>
          {reviews.concat(reviews).map((review, index) => (
            <ReviewCard key={index} review={review} />
          ))}
        </motion.div>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-white dark:from-black'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-white dark:from-black'></div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
