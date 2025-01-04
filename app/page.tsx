"use client";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Contact from "@/components/Contact";

// Dynamically import components with Suspense for lazy loading
const Divider = dynamic(() => import("@/components/Divider"), {
  suspense: true,
});
const HeroReload = dynamic(() => import("@/components/HeroReload"), {
  suspense: true,
});
const Services = dynamic(() => import("@/components/Services"), {
  suspense: true,
});
const About = dynamic(() => import("@/components/About"), {
  suspense: true,
});
const ScrollProgress = dynamic(
  () =>
    import("@/components/ui/ScrollProgress").then((mod) => mod.ScrollProgress),
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
      <ScrollProgress>
        <Suspense>
          <HeroReload />
          <section id='services'>
            <Services />
          </section>
          <Divider />
          <section id='about'>
            <About />
          </section>
          <Divider />
          <section id='pricing'>
            <Pricing />
          </section>
          <Divider />
          <section id='contact'>
            <Contact />
          </section>
          <Divider />
          <Testimonials />
        </Suspense>
      </ScrollProgress>
    </main>
  );
}
