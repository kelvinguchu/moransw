"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useCallback, useState, useRef } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";

// Optimize cloud props for performance while maintaining visuals
const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
      contain: "content",
    },
  },
  id: "tech-stack-cloud",
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    freezeActive: true,
    frontSelect: true,
    maxBrightness: 1,
    minBrightness: 0.1,
    textHeight: 14,
    textFont: "inherit",
    fadeIn: 1000,
    radiusX: 1,
    radiusY: 1,
    radiusZ: 1,
    stretchX: 1,
    stretchY: 1,
    offsetX: 0,
    offsetY: 0,
    shuffleTags: true,
    noTagsMessage: "",
  },
};

interface IconCloudProps {
  iconSlugs: string[];
}

export default function IconCloud({ iconSlugs }: IconCloudProps) {
  const { theme = "dark" } = useTheme();
  const [renderedIcons, setRenderedIcons] = useState<React.ReactNode[]>([]);
  const loadedIconsRef = useRef<Set<string>>(new Set());
  const mountedRef = useRef(true);

  // Memoize event handler
  const handleIconClick = useCallback((e: any) => {
    e.preventDefault();
  }, []);

  // Memoize icon rendering function with performance optimizations
  const renderCustomIcon = useCallback(
    (icon: SimpleIcon) => {
      if (loadedIconsRef.current.has(icon.slug)) return null;
      loadedIconsRef.current.add(icon.slug);

      const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
      const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
      const minContrastRatio = theme === "dark" ? 2 : 1.2;

      return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
          href: `#${icon.slug}`,
          target: undefined,
          rel: undefined,
          "aria-label": `${icon.title} icon`,
          onClick: handleIconClick,
          style: {
            willChange: "transform",
            backfaceVisibility: "hidden",
            perspective: "1000px",
          },
        },
      });
    },
    [theme, handleIconClick]
  );

  useEffect(() => {
    mountedRef.current = true;
    loadedIconsRef.current.clear();

    const controller = new AbortController();
    const { signal } = controller;

    const loadIcons = async () => {
      try {
        // Load all icons in one request to reduce network calls
        const iconsData = await fetchSimpleIcons({ slugs: iconSlugs });
        if (!mountedRef.current || signal.aborted) return;

        // Process icons in chunks using requestAnimationFrame for smoother rendering
        const allIcons = Object.values(iconsData.simpleIcons);
        const chunkSize = 15;
        let currentIndex = 0;

        const processNextChunk = () => {
          if (!mountedRef.current || signal.aborted) return;

          const chunk = allIcons.slice(currentIndex, currentIndex + chunkSize);
          const renderedChunk = chunk
            .map((icon) => renderCustomIcon(icon))
            .filter(Boolean);

          setRenderedIcons((prev) => [...prev, ...renderedChunk]);

          currentIndex += chunkSize;
          if (currentIndex < allIcons.length) {
            requestAnimationFrame(processNextChunk);
          }
        };

        requestAnimationFrame(processNextChunk);
      } catch (error) {
        if (!signal.aborted) {
          console.error("Error loading icons:", error);
        }
      }
    };

    loadIcons();

    return () => {
      mountedRef.current = false;
      controller.abort();
    };
  }, [iconSlugs, renderCustomIcon]);

  return (
    <div className='relative w-full h-full'>
      <Cloud {...cloudProps}>{renderedIcons}</Cloud>
    </div>
  );
}
