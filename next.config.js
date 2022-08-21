/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["drive.google.com", "links.papareact.com"],
  },

  env: {
    mapbox_key:
      "pk.eyJ1Ijoic2FzaGVuaGFzaW5kdSIsImEiOiJjbDcycm53MWExMWFqM3ZuMWxmaWd3em12In0.hf6v2HPnEMahEqYNxonZLQ",
  },
};

module.exports = nextConfig;
