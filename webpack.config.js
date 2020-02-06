const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin')
const path = require('path');

module.exports = (env, { mode }) => ({
  cache: true,
  context: __dirname,
  entry: './jsx/index.jsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist',
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
        test: /\.(png|jpg)$/,
        use: 'file-loader',
        include: [
          path.resolve(__dirname, 'src'),
        ],
      },
    ]
  },
  optimization: {
    minimize: (mode === 'production'),
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
        },
      }),
    ],
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    open:true,
    openPage: '.',
    contentBase: `${__dirname}/dist`,
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.jsx', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    })
  ],
});
