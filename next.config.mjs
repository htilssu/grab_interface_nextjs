/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "food-cms.grab.com",
        pathname: "/**/*",
      },
    ],
  },
};

export default nextConfig;
