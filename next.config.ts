/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,  // Add this
  },
  typescript: {
    ignoreBuildErrors: true,   // Add this
  }
}

export default nextConfig;