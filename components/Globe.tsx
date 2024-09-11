"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Meteors } from "./ui/meteors";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

export function Globe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  return (
    <div className='relative w-full h-[300px] md:h-[100%] flex justify-center items-center'>
      <div className='relative w-full h-full overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='relative h-full w-full'>
          <div className='absolute top-0 left-0 right-0 bottom-0'>
            <World globeConfig={globeConfig} />
          </div>
        </motion.div>
        <div className='absolute inset-x-0 bottom-0 h-24 bg-transparent opacity-40 pointer-events-none'></div>
        <div className='absolute inset-x-0 -top-10 h-24 bg-transparent opacity-40 pointer-events-none'></div>
      </div>
      <Meteors
        number={10}
        className='absolute top-0 left-0 right-0 bottom-0 pointer-events-none'
      />
    </div>
  );
}

export default Globe;
