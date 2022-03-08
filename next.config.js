/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/scss")],
  },
  images: {
    domains: ["img.icons8.com"],
  },
};

module.exports = nextConfig;
