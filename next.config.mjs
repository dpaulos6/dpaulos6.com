const moduleExports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: '',
        pathname: '/**'
      }
    ]
  }
}

const nextConfig = {}

export { moduleExports as default, nextConfig }
