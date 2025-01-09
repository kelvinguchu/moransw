/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatar.vercel.sh",
        port: "",
        pathname: "/**",
      },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/webp"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: {
      critters: {
        ssrMode: "critical",
        preload: "media",
        pruneSource: true,
        reduceInlineStyles: true,
      },
    },
    optimizePackageImports: [
      "framer-motion",
      "@react-icons/all-files",
      "@tabler/icons-react",
      "@radix-ui/react-icons",
      "lucide-react",
      "@react-three/fiber",
      "@react-three/drei",
      "three",
      "@tsparticles/engine",
      "@tsparticles/react",
    ],
    modularizeImports: {
      "@tabler/icons-react": {
        transform: "@tabler/icons-react/dist/esm/icons/{{member}}",
      },
      "lucide-react": {
        transform: "lucide-react/dist/esm/icons/{{member}}",
      },
      "@radix-ui/react-icons": {
        transform: "@radix-ui/react-icons/dist/{{member}}",
      },
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
};

export default nextConfig;
