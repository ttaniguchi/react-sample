const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = () => ({
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
    ]
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
