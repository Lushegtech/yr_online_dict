/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: [],
  },
  basePath: '', // Empty string means no base path
  assetPrefix: '', // Empty string means use default asset prefix
  
  // Remove GSAP from transpilation
  // transpilePackages: ['next-themes'], 
  
  compiler: {
    // Use Babel instead of SWC
    emotion: false
  },
  // Fix experimental features
  experimental: {
    optimizeCss: true,
    serverActions: {
      bodySizeLimit: '2mb'
    }
  }
};

module.exports = nextConfig; 