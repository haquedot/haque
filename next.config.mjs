/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: [
          "api.microlink.io", // Microlink Image Preview
        ],
      },
};

export default nextConfig;
