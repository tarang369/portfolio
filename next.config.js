/** @type {import('next').NextConfig} */
const nextConfig = {
    distDir: "./dist", // Changes the build output directory to `./dist/`.
    BASE_URL: process.env.BASE_URL,
    //images
    images: {
        domains: ["media.licdn.com"],
    },
};

export default nextConfig;
