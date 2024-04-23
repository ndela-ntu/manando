/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: "testappd49a6383d480430aad4a3426bc3744522ff8e-dev.s3.eu-west-1.amazonaws.com",
        port: '',
      },
    ],
  },
};

export default nextConfig;
