import IconCloud from "@/components/ui/icon-cloud";
import useWindowSize from "../hooks/useWindowSize";

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
    <section className='relative w-full h-[300px] md:h-[100%] flex justify-center items-center' >
      <div className='relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg'>
        <IconCloud iconSlugs={adjustedSlugs} />
      </div>
    </section>
  );
}

export default IconsCloud;
