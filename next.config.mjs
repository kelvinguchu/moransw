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
    optimizeCss: true,
    optimizePackageImports: ["framer-motion", "@react-icons/all-files"],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
};

export default nextConfig;
