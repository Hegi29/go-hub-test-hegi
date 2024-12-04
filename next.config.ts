import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.dummyjson.com'],  // Allow images from this domain
  },
};

export default nextConfig;
