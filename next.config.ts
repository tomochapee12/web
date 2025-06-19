/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'osu-sig.vercel.app',
        port: '',
        pathname: '/card/**',
      },
      {
        protocol: 'https',
        hostname: 'hits.seeyoufarm.com',
        port: '',
        pathname: '/api/count/incr/badge.svg/**',
      },
    ],
  },
};

export default nextConfig;