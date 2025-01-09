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
        skipDefaultConversion: true,
      },
      "lucide-react": {
        transform: "lucide-react/dist/esm/icons/{{member}}",
        skipDefaultConversion: true,
      },
      "@radix-ui/react-icons": {
        transform: "@radix-ui/react-icons/dist/{{member}}",
        skipDefaultConversion: true,
      },
      "framer-motion": {
        transform: "framer-motion/dist/es/{{member}}",
        skipDefaultConversion: true,
      },
    },
    webpackBuildWorker: true,
    optimizeServerReact: true,
    turbotrace: {
      logLevel: "error",
      logDetail: true,
    },
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  poweredByHeader: false,
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle in production
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        mergeDuplicateChunks: true,
        minimize: true,
        splitChunks: {
          chunks: "all",
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            default: false,
            vendors: false,
            framework: {
              chunks: "all",
              name: "framework",
              test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
              priority: 40,
              enforce: true,
            },
            lib: {
              test(module) {
                return (
                  module.size() > 160000 &&
                  /node_modules[/\\]/.test(module.identifier())
                );
              },
              name(module) {
                const hash = crypto.createHash("sha1");
                hash.update(module.identifier());
                return hash.digest("hex").slice(0, 8);
              },
              priority: 30,
              minChunks: 1,
              reuseExistingChunk: true,
            },
            commons: {
              name: "commons",
              minChunks: 2,
              priority: 20,
            },
            shared: {
              name(module, chunks) {
                return (
                  crypto
                    .createHash("sha1")
                    .update(chunks.reduce((acc, chunk) => acc + chunk.name, ""))
                    .digest("hex") +
                  (module.type === "css/mini-extract" ? "_CSS" : "_JS")
                );
              },
              priority: 10,
              minChunks: 2,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
