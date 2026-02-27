import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/extension",
        destination: "/for-vibe-coders",
        permanent: true,
      },
      {
        source: "/builder",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
