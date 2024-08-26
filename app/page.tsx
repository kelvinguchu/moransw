"use client";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import components with Suspense for lazy loading
const Divider = dynamic(() => import("@/components/Divider"), {
  suspense: true,
});
const Hero = dynamic(() => import("@/components/Hero"), { suspense: true });
const Navbar = dynamic(() => import("@/components/Navbar"), { suspense: true });
const ProductsHero = dynamic(() => import("@/components/ProductsHero"), {
  suspense: true,
});
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), {
  suspense: true,
});
const Services = dynamic(() => import("@/components/Services"), {
  suspense: true,
});
const TracingBeam = dynamic(
  () => import("@/components/ui/tracing-beam").then((mod) => mod.TracingBeam),
  { suspense: true }
);
const Process = dynamic(() => import("@/components/Process"), {
  suspense: true,
});
const IconsCloud = dynamic(() => import("@/components/IconsCloud"), {
  suspense: true,
});
const Pricing = dynamic(() => import("@/components/Pricing"), {
  suspense: true,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  suspense: true,
});
const Footer = dynamic(() => import("@/components/Footer"), { suspense: true });

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

 return (
   <main className='flex w-full min-h-screen flex-col items-center justify-between pt-24'>
     <TracingBeam>
       <Suspense>
         <Hero />
         <ProductsHero />
         <section id='services'>
           <Services />
         </section>
         <Divider />
         <section id='process'>
           {/* <Process /> */}
         </section>
         <Divider />
         <section id='recent-projects'>
           <RecentProjects />
         </section>
         <Divider />
         <section id='pricing'>
           <Pricing />
         </section>
         <Divider />
         <Testimonials />
         <Divider />
         <IconsCloud />
         <Divider />
         <Footer />
       </Suspense>
     </TracingBeam>
   </main>
 );

}
