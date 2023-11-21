/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  headers: {
    'Access-Control-Allow-Origin': ['https://url-shortener-ochre-tau.vercel.app/']
  },
}

module.exports = nextConfig;
