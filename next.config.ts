import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "d4lgxe9bm8juw.cloudfront.net",
			},
		],
	},
};

export default nextConfig;
