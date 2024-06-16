import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Space_Grotesk } from "next/font/google";
import { FiArchive } from "react-icons/fi";
import Header from "./Header";

const spacegrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
});

export function RecentProjects() {
  return (
    <div className='max-w-6xl mx-auto mt-5 px-8'>
      <Header
        icon={
          <FiArchive className='mx-3 text-violet-600 animate-pulse-spin w-6 h-6' />
        }
        mainText='Recent'
        gradientText='Projects'
        additionalClassNames={`${spacegrotesk.className}`}
      />
      <HoverEffect items={projects} />
    </div>
  );
}



export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

export default RecentProjects;
