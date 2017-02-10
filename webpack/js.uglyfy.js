const webpack = require('webpack');

module.exports = function(useSourceMap) {
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: useSourceMap,
        compress: {
          warnings: false,
        },
      }),
    ],
  };
};
