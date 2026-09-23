import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This project can live inside a larger workspace that has another lockfile.
  // Keep tracing scoped to ERPForge rather than allowing Next to infer the parent.
  outputFileTracingRoot: process.cwd(),
};
export default nextConfig;
