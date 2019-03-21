const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const images = require("remark-images");
const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    mdPlugins: [images]
  }
});

// https://arunoda.me/blog/ssr-and-server-only-modules
const withBundleAnalyzer = require("@zeit/next-bundle-analyzer");

const nextConfig = {
  target: "serverless"
};

module.exports = withPlugins(
  [
    [
      optimizedImages,
      {
        handleImages: ["jpeg", "png"],
        optimizeImagesInDev: true,
        responsive: {
          adapter: require("responsive-loader/sharp"),
          sizes: [180, 360, 600, 760, 1000]
        }
      }
    ],
    [
      withMDX,
      {
        pageExtensions: ["js", "jsx", "mdx"]
      }
    ],
    [
      withBundleAnalyzer,
      {
        analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
        analyzeBrowser: ["browser", "both"].includes(
          process.env.BUNDLE_ANALYZE
        ),
        bundleAnalyzerConfig: {
          server: {
            analyzerMode: "static",
            reportFilename: "../bundles/server.html"
          },
          browser: {
            analyzerMode: "static",
            reportFilename: "../bundles/client.html"
          }
        }
      }
    ]
  ],
  nextConfig
);
