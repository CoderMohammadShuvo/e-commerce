import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config) => {
    config.ignoreWarnings = [/Module not found/]; // Ignores missing modules
    return config;
  },
};

export default nextConfig;
