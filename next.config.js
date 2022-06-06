/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	env: {
    	CONTENTFUL_PREVIEW_SECRET: process.env.CONTENTFUL_PREVIEW_SECRET,
		CONTENTFUL_PREVIEW_ACCESS_TOKEN: process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN,
    	CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
		CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID
	}
}

module.exports = nextConfig
