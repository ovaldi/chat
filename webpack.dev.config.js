const path = require('path');
const mock = require('./mock');
const webpack = require('webpack');
const pxtorem = require('postcss-pxtorem');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const theme = require('./src/antd.theme');
const src = path.join(__dirname, 'src');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/index.js' // the entry point of our app
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: './index.tmpl',
      favicon: './favicon.ico'
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: src,
        postcss: () => {
          return [
            require('precss'),
            require('autoprefixer'),
            pxtorem({
              replace: true,
              rootValue: 100,
              propList: ['*']
            })
          ];
        }
      }
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
    disableHostCheck: true,
    historyApiFallback: true,
    before: mock
  },
  resolve: {
    mainFiles: ['index.web', 'index'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.less', '.web.js', '.json'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'react-css-themr': '@friendsofreactjs/react-css-themr'
    }
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: [
        'babel-loader'
      ]
    }, {
      test: /\.js$/,
      enforce: 'pre',
      loader: 'source-map-loader'
    }, {
      test: /^((?!\.module).)*css$/, // Do not build less files use css-modules
      exclude: src,
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.module\.less$/, // Build less files use css-modules
      include: [src],
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true,
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:5]'
          }
        },
        'postcss-loader',
        'less-loader'
      ]
    }, {
      test: /\.less$/,
      exclude: [src],
      use: [
        'style-loader',
        'css-loader',
        'postcss-loader',
        `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
      ]
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          outputPath: './',
          publicPath: '/',
          name: '[hash].[ext]'
        }
      }]
    }]
  }
};
