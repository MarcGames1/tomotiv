/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.pics', 'localhost'],
    path: '/',
  },
  transpilePackages: ['react-daisyui'],
  reactStrictMode: true,
};

module.exports = nextConfig


