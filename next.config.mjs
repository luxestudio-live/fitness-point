/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  assetPrefix: process.env.GITHUB_PAGES === 'true' ? '/fitness-point/' : '',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/fitness-point' : '',
}

export default nextConfig
