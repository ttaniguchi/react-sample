const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env) => ({
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parallel: true,
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
          output: {
            beautify: false,
            comments: false,
          },
          safari10: true,
        },
      }),
    ],
  },
  mode: env.NODE_ENV,
  cache: true,
  context: __dirname,
  entry: './jsx/index.jsx',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, 'jsx'),
        ],
      },
      {
        test: /\.(js|jsx)$/,
        use: ['eslint-loader'],
        include: [
          path.resolve(__dirname, 'js'),
          path.resolve(__dirname, 'jsx'),
        ],
        enforce: 'pre',
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    openPage: '.',
    contentBase: `${__dirname}/dist`,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
    }),
  ],
});
