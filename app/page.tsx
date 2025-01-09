"use client";
import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Contact from "@/components/Contact";

// Loading skeletons for each component
const ComponentSkeleton = () => (
  <div className='w-full animate-pulse'>
    <div className='h-[600px] bg-white/[0.05] rounded-3xl' />
  </div>
);

// Dynamically import components with Suspense and loading skeletons
const Divider = dynamic(() => import("@/components/Divider"), {
  loading: () => <div className='h-32' />,
  suspense: true,
});

const HeroReload = dynamic(() => import("@/components/HeroReload"), {
  loading: () => <ComponentSkeleton />,
  suspense: true,
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <ComponentSkeleton />,
  suspense: true,
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => <ComponentSkeleton />,
  suspense: true,
});

const ScrollProgress = dynamic(
  () =>
    import("@/components/ui/ScrollProgress").then((mod) => mod.ScrollProgress),
  {
    loading: () => <div className='h-1 bg-white/[0.05]' />,
    suspense: true,
  }
);

const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <ComponentSkeleton />,
  suspense: true,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <ComponentSkeleton />,
  suspense: true,
});

export default function Home() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between pt-24'>
      <ScrollProgress>
        <div className='w-full' style={{ contentVisibility: "auto" }}>
          <HeroReload />
          <section id='services' style={{ minHeight: "100vh" }}>
            <Services />
          </section>
          <Divider />
          <section id='about' style={{ minHeight: "100vh" }}>
            <About />
          </section>
          <Divider />
          <section id='pricing' style={{ minHeight: "100vh" }}>
            <Pricing />
          </section>
          <Divider />
          <section id='contact' style={{ minHeight: "100vh" }}>
            <Contact />
          </section>
          <Divider />
          <section style={{ minHeight: "100vh" }}>
            <Testimonials />
          </section>
        </div>
      </ScrollProgress>
    </main>
  );
}
