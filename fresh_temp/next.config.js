/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: [],
  },
  
  // Basic configuration
  reactStrictMode: true,
  
  // Output configuration for static assets
  output: 'standalone',
  
  // Ensure proper asset path resolution
  basePath: '',
  assetPrefix: '',
  
  // Server Actions configuration
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    },
    // Add CSS optimization
    optimizeCss: true
  },
  
  // Static headers for caching
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
};

module.exports = nextConfig; 