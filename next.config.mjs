/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.coingecko.com',
                port: '',
                pathname: '/coins/images/**',
            }, {
                protocol: 'https',
                hostname: 'media.wired.com',
                port: '',
                pathname: '/photos/**',


            }
        ],
    },
};

export default nextConfig;
