"use client";
import dynamic from "next/dynamic";
import { Suspense, memo } from "react";

// Memoize the IconCloud component to prevent unnecessary re-renders
const IconCloud = dynamic(
  () => import("@/components/ui/icon-cloud").then((mod) => memo(mod.default)),
  {
    ssr: false,
    loading: () => (
      <div className='w-full h-full flex items-center justify-center'>
        <div className='w-12 h-12 rounded-full border-2 border-violet-500/20 border-t-violet-500 animate-spin' />
      </div>
    ),
  }
);

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "python",
  "php",
  "supabase",
  "firebase",
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

// Memoize the IconsCloud component
export const IconsCloud = memo(function IconsCloud() {
  return (
    <section className='relative w-full h-full flex justify-center items-center'>
      <div className='relative flex h-full w-full items-center justify-center overflow-visible md:overflow-hidden rounded-lg'>
        <Suspense
          fallback={
            <div className='w-full h-full flex items-center justify-center'>
              <div className='w-12 h-12 rounded-full border-2 border-violet-500/20 border-t-violet-500 animate-spin' />
            </div>
          }>
          <IconCloud iconSlugs={slugs} />
        </Suspense>
      </div>
    </section>
  );
});

export default IconsCloud;
