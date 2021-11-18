// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://james-nft.herokuapp.com/:path*',
      },
    ]
  },
  reactStrictMode: true,
};