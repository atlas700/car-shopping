/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.imagin.studio",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
