const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
console.log('webpack 优化')
const TerserPlugin = require('terser-webpack-plugin')
const BundleAnalyZerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  optimization: {
    minimizer: [new TerserPlugin({
      cache: true,   
      terserOptions:{
        compress: {
          unused: true, 
          drop_debugger: true,
          drop_console: true,
          dead_code: true,
        }
      }
    })]
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
  },
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    noParse: /node_modules\/(jquery\.js)/,
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              require.resolve('@babel/preset-react'),
              [require.resolve('@babel/preset-env', {modules: false})]
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyZerPlugin()
  ],
  devServer: {
    hot: true,
  }
}