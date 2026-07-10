/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  poweredByHeader: false,
  compress: true,
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "masfiqur.com" }],
        destination: "https://www.masfiqur.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
