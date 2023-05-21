const withPWA = require("next-pwa");

module.exports = withPWA({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "url-loader",
      },
    });
    return config;
  },
  images: {
    unoptimized: true, // add this line

    domains: ["res.cloudinary.com"],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  },
  basePath: "/omniscopewebsite", // replace [repository-name] with your repository's name
  assetPrefix: "/omniscopewebsite/",
});
