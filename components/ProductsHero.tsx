import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { Syne } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["800"],
});

export function ProductHero() {
  return (
    <section className='my-4 md:my-8'>
      <VelocityScroll
        text='-Bringing your Unicorn ideas to life-'
        default_velocity={5}
        className={`${syne.className} uppercase bg-transparent text-center max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-5xl text-base sm:text-lg md:text-2xl lg:text-4xl xl:text-7xl font-extrabold tracking-tight text-slate-800 drop-shadow-sm dark:text-slate-700 sm:leading-[2rem] md:leading-[3rem] lg:leading-[4rem] xl:leading-[5rem]`}
      />
    </section>
  );
}

export default ProductHero;
