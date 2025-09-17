import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ["http://192.168.50.51:3000", "https://prod.liveshare.vsengsaas.visualstudio.com"]
};

export default nextConfig;
