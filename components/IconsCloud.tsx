import IconCloud from "@/components/ui/icon-cloud";

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
    <section className='w-[95%] mx-auto'>
      <div className='relative flex h-full w-full max-w-[40rem] items-center justify-center overflow-hidden rounded-lg bg-background mx-auto px-10 pb-10 pt-0'>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}

export default IconsCloud;
