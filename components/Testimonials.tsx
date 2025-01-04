"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Space_Grotesk } from "next/font/google";
import { motion } from "framer-motion";
import { IconQuote } from "@tabler/icons-react";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const reviews = [
  {
    name: "C.E.O, Aquatreat Solutions Limited",
    username: "@Isaac Njenga",
    body: "The web development services provided were top-notch. The delivery was timely and exceeded our expectations.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "C.E.O, Steel & Allied",
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
    username: "@Jane Mugambi",
    body: "Implemented the Odoo CRM to our company flawlessly, everything is just smooth. Highly recommend!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Owner, Kariuki Farm",
    username: "@Elishiba Njambi",
    body: "Wonderfully made farm management system, very useful and reliable. Thank you!",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Manager, UMS Kenya",
    username: "@Wilson Kamau",
    body: "The stock management system has revolutionized our inventory control. Excellent work and great support!",
    img: "https://avatar.vercel.sh/wilson",
  },
];

const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

interface ReviewCardProps {
  img: string;
  name: string;
  username: string;
  body: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({
  img,
  name,
  username,
  body,
}) => {
  return (
    <div className='relative h-full w-[320px] mx-4'>
      <div className='relative h-full rounded-xl overflow-hidden backdrop-blur-sm border border-white/[0.08] bg-black/30'>
        {/* Premium Gradient Backgrounds */}
        <div className='absolute inset-0'>
          <div className='absolute inset-0 bg-gradient-to-br from-violet-500/5 via-transparent to-indigo-500/5' />
          <div className='absolute inset-0 bg-[radial-gradient(circle_at_60%_30%,rgba(124,58,237,0.1),transparent_50%)]' />
        </div>

        {/* Content */}
        <div className='relative p-6 flex flex-col h-full'>
          {/* Quote Icon */}
          <div className='absolute top-4 right-4 text-violet-500/30'>
            <IconQuote size={24} />
          </div>

          {/* Profile */}
          <div className='flex items-center gap-4 mb-4'>
            <img
              className='w-12 h-12 rounded-full border border-white/[0.08]'
              src={img}
              alt={name}
            />
            <div>
              <h4 className='text-sm font-medium text-white/90'>{name}</h4>
              <p className='text-sm text-gray-400'>{username}</p>
            </div>
          </div>

          {/* Testimonial */}
          <p className='text-gray-300/90 text-sm leading-relaxed flex-grow'>
            {body}
          </p>

          {/* Decorative Elements */}
          <div className='absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent' />
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section
      id='testimonials'
      className={cn(
        "min-h-screen py-32 relative overflow-hidden flex items-center",
        spaceGrotesk.variable
      )}>
      <div className='w-full'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          {/* Section Header */}
          <div className='text-center mb-16'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className='flex flex-col items-center'>
              <div className='inline-block mb-4'>
                <div className='flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-sm'>
                  <div className='w-1 h-1 rounded-full bg-violet-500'></div>
                  <span className='text-[0.9375rem] font-light tracking-wide text-white/70'>
                    Client Testimonials
                  </span>
                  <div className='w-1 h-1 rounded-full bg-indigo-500'></div>
                </div>
              </div>
              <h2 className='text-4xl sm:text-5xl font-semibold text-white/95 mb-4 tracking-tight leading-[1.15]'>
                What Our Clients Say
              </h2>
              <p className='max-w-2xl mx-auto text-base text-gray-400 font-light'>
                Hear from our satisfied clients about their experience working
                with us.
              </p>
              <div className='mt-6 flex items-center gap-2'>
                <div className='w-8 h-px bg-gradient-to-r from-transparent to-violet-500/50'></div>
                <div className='w-20 h-1 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-full'></div>
                <div className='w-8 h-px bg-gradient-to-l from-transparent to-indigo-500/50'></div>
              </div>
            </motion.div>
          </div>

          {/* Testimonials Marquee */}
          <div className='hidden md:block relative'>
            <Marquee pauseOnHover className='[--duration:40s] py-4'>
              {firstRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className='[--duration:40s] py-4'>
              {secondRow.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>

            {/* Gradient Overlays */}
            <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-black' />
            <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-black' />
          </div>

          {/* Mobile View */}
          <div className='md:hidden'>
            <Marquee
              pauseOnHover
              vertical
              className='[--duration:40s] h-[600px]'>
              {reviews.map((review) => (
                <ReviewCard key={review.username} {...review} />
              ))}
            </Marquee>
            <div className='pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-black' />
            <div className='pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-black' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
