"use client";
import { Suspense } from "react";
import dynamic from "next/dynamic";

// Loading components
const LoadingSpinner = () => (
  <div className='flex items-center justify-center min-h-[200px]'>
    <div className='w-8 h-8 border-4 border-violet-500 border-t-transparent rounded-full animate-spin'></div>
  </div>
);

// Prioritize hero section
const HeroReload = dynamic(() => import("@/components/HeroReload"), {
  ssr: true, // Enable server-side rendering for the hero
  loading: () => <LoadingSpinner />,
});

// Secondary priority components
const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <LoadingSpinner />,
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => <LoadingSpinner />,
});

const Pricing = dynamic(() => import("@/components/Pricing"), {
  loading: () => <LoadingSpinner />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <LoadingSpinner />,
});

const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  loading: () => <LoadingSpinner />,
});

// Utility components with minimal loading states
const Divider = dynamic(() => import("@/components/Divider"), {
  loading: () => <div className='h-16' />,
});

const ScrollProgress = dynamic(
  () =>
    import("@/components/ui/ScrollProgress").then((mod) => mod.ScrollProgress),
  {
    loading: () => <div className='h-1 bg-violet-500/20' />,
  }
);

export default function Home() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between pt-24'>
      <ScrollProgress>
        {/* Hero Section - Highest Priority */}
        <Suspense fallback={<LoadingSpinner />}>
          <HeroReload />
        </Suspense>

        {/* Services Section */}
        <section id='services'>
          <Suspense fallback={<LoadingSpinner />}>
            <Services />
          </Suspense>
        </section>

        <Suspense fallback={<div className='h-16' />}>
          <Divider />
        </Suspense>

        {/* About Section */}
        <section id='about'>
          <Suspense fallback={<LoadingSpinner />}>
            <About />
          </Suspense>
        </section>

        <Suspense fallback={<div className='h-16' />}>
          <Divider />
        </Suspense>

        {/* Pricing Section */}
        <section id='pricing'>
          <Suspense fallback={<LoadingSpinner />}>
            <Pricing />
          </Suspense>
        </section>

        <Suspense fallback={<div className='h-16' />}>
          <Divider />
        </Suspense>

        {/* Contact Section */}
        <section id='contact'>
          <Suspense fallback={<LoadingSpinner />}>
            <Contact />
          </Suspense>
        </section>

        <Suspense fallback={<div className='h-16' />}>
          <Divider />
        </Suspense>

        {/* Testimonials Section */}
        <Suspense fallback={<LoadingSpinner />}>
          <Testimonials />
        </Suspense>
      </ScrollProgress>
    </main>
  );
}
