import IconCloud from "@/components/ui/icon-cloud";
import useWindowSize from '../hooks/useWindowSize';

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
  "wordpress",
  "wix",
  "webflow",
  "odoo",
  "zoho",
];

export function IconsCloud() {
  const { width } = useWindowSize();
  const isMobile = width ? width < 768 : false; // Adjust this breakpoint as needed, handle undefined case

  const adjustedSlugs = isMobile ? slugs.slice(0, 15) : slugs; // Reduce icons for mobile

  return (
    <section className='w-[95%] mx-auto'>
      <div className='relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background mx-auto px-10 pb-10 pt-0'>
        <IconCloud iconSlugs={adjustedSlugs} />
      </div>
    </section>
  );
}

export default IconsCloud;
