/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ["res.cloudinary.com"], // Add the allowed image domains here
    },
};

export default nextConfig;
