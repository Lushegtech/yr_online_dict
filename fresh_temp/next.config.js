/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    domains: [],
  },
  
  // Basic configuration
  reactStrictMode: true,
  
  // Server Actions configuration
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb'
    }
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