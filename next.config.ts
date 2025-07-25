import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ["api.hipotecarioseguros.com.ar"],
  },
};

export default nextConfig;
