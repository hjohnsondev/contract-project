/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [/* allowed domains */],
    loader: "custom",
    path: "/"
  }
}

module.exports = nextConfig
