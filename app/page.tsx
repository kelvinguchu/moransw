import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductsHero from "@/components/ProductsHero";
import RecentProjects from "@/components/RecentProjects";
import Services from "@/components/Services";
import { TracingBeam } from "@/components/TracingBeam";
import Process from "@/components/Process";
export default function Home() {
  return (
    <main className='flex w-full min-h-screen flex-col items-center justify-between pt-24'>
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
      </TracingBeam>
    </main>
  );
}
