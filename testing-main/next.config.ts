import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",           // ⚡ Important for static site generation
  images: {
    unoptimized: true,        // ⚡ Important so that Next.js doesn't try dynamic image optimization
  },
};

export default nextConfig;
