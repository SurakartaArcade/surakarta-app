const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const path = require('path')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    index: './www/js/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'www/dist-js'),
    filename: '[name].bundle.js',
    publicPath: './dist-js/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(worker.js)$/,
        use: [
          {
            loader: 'worker-loader',
            options:
            {
              fallback: true,
              inline: false
            }
          },
          'babel-loader'
        ]
      },
      {
        test: /\.(js|jsx|.mjs)$/,
        exclude: /node_modules/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.svg$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: '../svg' // relative to dist-js
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: 'thread-loader' },
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' }
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled' // static
    }),
    new webpack.ProgressPlugin()
  ]
}
