/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "dynamic-woodpecker-199.convex.cloud"
            }
        ]
    }
};

export default nextConfig;
