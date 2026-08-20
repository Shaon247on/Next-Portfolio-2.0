/** @type {import('next').NextConfig} */
const nextConfig = {
  // Drop the x-powered-by header and serve modern image formats — both feed into
  // the Core Web Vitals that search ranking reads.
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
}

module.exports = nextConfig
