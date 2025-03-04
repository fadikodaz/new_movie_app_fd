/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        port: '',
        pathname: '/t/p/original/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "ALLOWALL", // Allows iframe embedding
          },
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' *;", // Allows all sites to embed
          },
        ],
      },
    ];
  },
};

export default nextConfig;
