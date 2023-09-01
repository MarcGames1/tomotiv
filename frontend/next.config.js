/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.pics', 'localhost'],
    path: '/',
  },
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true,
  // sterge rewrites in production
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*', // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig


