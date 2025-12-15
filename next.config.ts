/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'minio-dev.hamkhan.ir',
        pathname: '/api/v1/buckets/public/objects/**',
      },
    ],
  },
};

module.exports = nextConfig;
