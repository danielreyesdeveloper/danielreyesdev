/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dbnjogcsn/image/upload/',
  },
}
module.exports = nextConfig
