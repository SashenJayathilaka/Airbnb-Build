/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["drive.google.com", "links.papareact.com"],
  },

  env: {
    mapbox_key:
      "your mapbox public key",
  },
};

module.exports = nextConfig;
