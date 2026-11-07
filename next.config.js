module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  // Old multi-page routes now live as sections on the single-page site.
  async redirects() {
    return [
      { source: '/portfolio', destination: '/#work', permanent: true },
      { source: '/background', destination: '/#experience', permanent: true },
      { source: '/contact', destination: '/#contact', permanent: true },
    ]
  },
}
