import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.artic.edu",
                port: "",
                pathname: "/iiif/2/**",
            },
        ],
    },
};

export default nextConfig;
