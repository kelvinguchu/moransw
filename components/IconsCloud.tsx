import IconCloud from "@/components/ui/icon-cloud";
import TypingAnimation from "@/components/ui/typing-animation";

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
  return (
    <section>
      <TypingAnimation
        className='text-4xl font-bold text-black dark:text-white'
        texts={[
          "We Know No Limits 😤😤",
          "Reach for the Stars ✨",
          "Innovation at its Best 🚀",
          "Best Software Engineers on the planet🌍🌍",
        ]}
        minHeight='3rem' // Set a minimum height to prevent content shift
      />
      <div className='relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background mx-auto px-10 pb-10 pt-0'>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}

export default IconsCloud;
