const { merge } = require('webpack-merge');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (config, context) => {
  return merge(config, {
    plugins: [new BundleAnalyzerPlugin()],
  });
};
