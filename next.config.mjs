import createNextIntilPlugin from "next-intl/plugin";

/** @type {import('next').NextConfig} */
const withNextIntl = createNextIntilPlugin();

const nextConfig = {
  experimental: { instrumentationHook: true },
  images: {
    domains: ["uploadthing.com", "utfs.io", "img.clerk.com", "subdomain"],
  },

  reactStrictMode: false,

  webpack(config, options) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/,
      type: "asset/resource",
      generator: {
        filename: "static/videos/[name].[hash][ext]",
      },
    });
    return config;
  },
};

export default withNextIntl(nextConfig);
