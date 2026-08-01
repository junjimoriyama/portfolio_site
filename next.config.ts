import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // ビルド時にESLintのエラーを無視する
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
