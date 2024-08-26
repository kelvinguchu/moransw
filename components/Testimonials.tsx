import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { Space_Grotesk } from "next/font/google";
import Header from "./Header";
import { FiSmile } from "react-icons/fi";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

const reviews = [
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
    <figure
      className={cn(
        "relative h-56 md:h-auto w-full md:w-64 cursor-pointer overflow-hidden rounded-xl border p-4 shadow-lg transition-transform transform hover:scale-105",
        // light styles
        "bg-white border-gray-300 hover:bg-gray-50",
        // dark styles
        "dark:bg-gradient-to-br from-black via-gray-900 to-black dark:border-gray-700 dark:hover:bg-gray-700"
      )}>
      <div className='flex flex-col items-center md:items-start gap-2'>
        <img
          className='rounded-full border border-gray-300 dark:border-gray-700'
          width='48'
          height='48'
          alt={name}
          src={img}
        />
        <div className='flex flex-col items-center md:items-start'>
          <figcaption className='text-base font-semibold text-gray-900 dark:text-gray-100 text-center md:text-left'>
            {name}
          </figcaption>
          <p className='text-sm font-medium text-gray-600 dark:text-gray-400 text-center md:text-left'>
            {username}
          </p>
        </div>
      </div>
      <blockquote className='mt-2 text-sm text-gray-700 dark:text-gray-300 text-center md:text-left'>
        {body}
      </blockquote>
    </figure>
  );
};

const MarqueeDemo: React.FC = () => {
  return (
    <div className='relative max-w-6xl mx-auto flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-5 md:shadow-xl'>
      <Header
        icon={
          <FiSmile className='mx-3 text-violet-400 animate-pulse-spin w-8 h-8' />
        }
        mainText='Happy '
        gradientText='Clients'
        additionalClassNames={`${spacegrotesk.className} text-white`}
      />
      <div className='hidden md:flex flex-col items-center justify-center w-full'>
        <Marquee pauseOnHover className='[--duration:20s]'>
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:20s]'>
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#F0EAF5] dark:from-black'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#F0EAF5] dark:from-black'></div>
      </div>
      <div className='flex md:hidden h-[50vh] w-11/12 items-center justify-center overflow-hidden rounded-lg mt-4 sm:px-20 md:shadow-xl'>
        <Marquee pauseOnHover vertical className='[--duration:20s]'>
          {reviews.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-[#F0EAF5] dark:from-black'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-[#F0EAF5] dark:from-black'></div>
      </div>
    </div>
  );
};

export default MarqueeDemo;
