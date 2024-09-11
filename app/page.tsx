"use client";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";

// Dynamically import components with Suspense for lazy loading
const Divider = dynamic(() => import("@/components/Divider"), {
  suspense: true,
});
const HeroReload = dynamic(() => import("@/components/HeroReload"), { suspense: true });
const Services = dynamic(() => import("@/components/Services"), {
  suspense: true,
});
const TracingBeam = dynamic(
  () => import("@/components/ui/tracing-beam").then((mod) => mod.TracingBeam),
  { suspense: true }
);
const Pricing = dynamic(() => import("@/components/Pricing"), {
  suspense: true,
});
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  suspense: true,
});

export default function Home() {


 return (
   <main className='flex w-full min-h-screen flex-col items-center justify-between pt-24'>
     <TracingBeam>
       <Suspense>
         <HeroReload />
         <section id='services'>
           <Services />
         </section>
         <Divider />
         <section id='pricing'>
           <Pricing />
         </section>
         <Divider />
         {/* <Testimonials /> */}
         <Divider />
       </Suspense>
     </TracingBeam>
   </main>
 );

}
