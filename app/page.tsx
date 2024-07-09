'use client';
import { useState, useEffect } from "react";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsHero from "@/components/ProductsHero";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import { TracingBeam } from "@/components/ui/tracing-beam";
import Process from "@/components/Process";
import IconsCloud from "@/components/IconsCloud";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 2 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between pt-24'>
      {isLoading ? (
        <Loader />
      ) : (
        <TracingBeam>
          <Navbar />
          <Hero />
          <ProductsHero />
          <section id='services'>
            <Services />
          </section>
          <Divider />
          <section id='process'>
            <Process />
          </section>
          <Divider />
          <section id='recent-projects'>
            <RecentProjects />
          </section>
          <Divider />
          <IconsCloud />
          <Divider />
          <section id='pricing'>
            <Pricing />
          </section>
          <Divider />
          <Testimonials />
          <Divider />
          <Footer />
        </TracingBeam>
      )}
    </main>
  );
}
