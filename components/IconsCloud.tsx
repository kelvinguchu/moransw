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
    <section className='relative w-full h-[300px] md:h-[100%] flex justify-center items-center' >
      <div className='relative flex h-full w-full  items-center justify-center overflow-hidden rounded-lg'>
        <IconCloud iconSlugs={slugs} />
      </div>
    </section>
  );
}

export default IconsCloud;
