/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    unoptimized: true // necessary for local images in static export
  }
};

module.exports = nextConfig;
