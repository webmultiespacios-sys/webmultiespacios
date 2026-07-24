import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.multiespacios.com.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
