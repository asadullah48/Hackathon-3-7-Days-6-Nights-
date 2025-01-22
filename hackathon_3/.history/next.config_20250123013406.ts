import type { NextConfig } from "";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
    ],
  },
  typescript: {
    // If you're having type issues during build, you can temporarily set this to true
    ignoreBuildErrors: false,
  },
  // Add this if you're using the Sanity Visual Studio Code extension
  experimental: {
    esmExternals: 'loose',
  }
};

export default nextConfig;