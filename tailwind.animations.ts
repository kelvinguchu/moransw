// tailwind.animations.ts
export const customAnimations = {
  "spin-slow": "spin 3s linear infinite",
  "pulse-spin": "pulse-spin 2s ease-in-out infinite",
  "meteor-effect": "meteor 5s linear infinite",
  "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
  marquee: "marquee var(--duration) linear infinite",
  "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
  gradient: "gradient 8s linear infinite",
};

export const customKeyframes = {
  "pulse-spin": {
    "0%, 100%": { transform: "rotate(0deg) scale(1)", opacity: "1" },
    "50%": { transform: "rotate(180deg) scale(1.2)", opacity: "0.7" },
  },
  meteor: {
    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
    "70%": { opacity: "1" },
    "100%": {
      transform: "rotate(215deg) translateX(-500px)",
      opacity: "0",
    },
  },
  "border-beam": {
    "100%": {
      "offset-distance": "100%",
    },
  },
  marquee: {
    from: { transform: "translateX(0)" },
    to: { transform: "translateX(calc(-100% - var(--gap)))" },
  },
  "marquee-vertical": {
    from: { transform: "translateY(0)" },
    to: { transform: "translateY(calc(-100% - var(--gap)))" },
  },
  "shine-pulse": {
    "0%": {
      "background-position": "0% 0%",
    },
    "50%": {
      "background-position": "100% 100%",
    },
    to: {
      "background-position": "0% 0%",
    },
  },
  gradient: {
    to: {
      backgroundPosition: "var(--bg-size) 0",
    },
  },
};
