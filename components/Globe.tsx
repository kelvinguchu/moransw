"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Meteors } from "./ui/meteors";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

const colors = [
  "#06b6d4",
  "#3b82f6",
  "#6366f1",
  "#FF6F61",
  "#6B5B95",
  "#88B04B",
  "#F7CAC9",
  "#92A8D1",
  "#955251",
  "#B565A7",
  "#009B77",
  "#DD4124",
  "#45B8AC",
  "#EFC050",
  "#5B5EA6",
  "#9B2335",
  "#BC243C",
  "#C3447A",
  "#98B4D4",
  "#6C4F3D",
  "#D65076",
  "#E15D44",
  "#7FCDCD",
];

function generateArcs(numArcs: number) {
  const arcs = [];
  for (let i = 0; i < numArcs; i++) {
    arcs.push({
      order: Math.ceil(Math.random() * 14),
      startLat: Math.random() * 180 - 90,
      startLng: Math.random() * 360 - 180,
      endLat: Math.random() * 180 - 90,
      endLng: Math.random() * 360 - 180,
      arcAlt: Math.random(),
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }
  return arcs;
}

export function Globe() {
  const globeConfig = {
    pointSize: 4,
    globeColor: "#1c1e22", // Darker globe color
    showAtmosphere: true,
    atmosphereColor: "white", // Darker atmosphere color
    atmosphereAltitude: 0.12,
    emissive: "#1c1e22", // Darker emissive color
    emissiveIntensity: 0.7, // Reduced emissive intensity
    shininess: 0.5, // Reduced shininess
    polygonColor: "white", // More transparent polygon color
    ambientLight: "#ffffff", // Soft white ambient light
    directionalLeftLight: "#888888", // Softer directional light
    directionalTopLight: "#888888", // Softer directional light
    pointLight: "#888888", // Softer point light
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };

  const sampleArcs = generateArcs(0); // Generate 30 arcs dynamically

  return (
    <div className='relative w-full h-[300px] md:h-[500px] flex justify-center items-center'>
      <div className='relative w-full h-full overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='relative h-full w-full'>
          <div className='absolute top-0 left-0 right-0 bottom-0'>
            <World data={sampleArcs} globeConfig={globeConfig} />
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
