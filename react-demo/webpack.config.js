const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')
console.log('webpack 优化')

module.exports = {
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
  },
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
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
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: true,
  }
}