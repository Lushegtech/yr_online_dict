import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [],
  },
  basePath: '', // Empty string means no base path
  assetPrefix: '', // Empty string means use default asset prefix
  experimental: {
  },
};

export default nextConfig;
