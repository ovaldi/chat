const path = require('path');
const webpack = require('webpack');
const pxtorem = require('postcss-pxtorem');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const theme = require('./src/antd.theme');
const src = path.join(__dirname, 'src');

module.exports = {
  entry: {
    main: './src/index.js', // the entry point of our app
    polyfill: './src/polyfill.js',
    vendor: [
      'fastclick', 'react', 'react-dom', 'axios', 'prop-types', 'classnames', 'redux',
      'react-redux', 'react-router-dom', 'redux-saga', 'date-fns/format',
      '@friendsofreactjs/react-css-themr'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: 'https://qcdn.zhangzhongyun.com/spa/',
    filename: '[name].[chunkhash:8].js',
    chunkFilename: '[name].[chunkhash:8].bundle.js'
  },
  devtool: 'false',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'polyfill', 'manifest'] // 将其它模块的id码统一存到manifest中，防止其它模块的id码写入自身模块导致多个文件变更： http://www.cnblogs.com/myqianlan/p/5626505.html, https://github.com/webpack/webpack/issues/1315
    }),
    new HtmlWebpackPlugin({
      env: 'production',
      minify: {
        html5: true,
        collapseWhitespace: true
      },
      inject: false,
      filename: 'index.html',
      template: './index.tmpl',
      favicon: './favicon.ico'
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].css',
      allChunks: true
    }), // 使用contenthash可以将 js & css 指纹解耦: https://zhuanlan.zhihu.com/p/23595975
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false,
        ascii_only: true
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
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
  resolve: {
    mainFiles: ['index.web', 'index'],
    modules: [src, 'node_modules'],
    extensions: ['.js', '.less', '.web.js', '.json'],
    alias: {
      '@': src,
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
      test: /^((?!\.module).)*css$/,
      exclude: src,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, 'postcss-loader']
      })
    }, {
      test: /\.module\.less$/,
      include: src,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            modules: true,
            minimize: true,
            importLoaders: 1,
            localIdentName: '[local]--[hash:base64:5]'
          }
        }, 'postcss-loader', 'less-loader'
        ]
      })
    }, {
      test: /\.less$/,
      exclude: src,
      loader: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
          options: {
            minimize: true
          }
        }, 'postcss-loader', `less-loader?{"modifyVars":${JSON.stringify(theme)}}`
        ]
      })
    }, {
      test: /\.(png|jpg|gif)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1,
          outputPath: '/',
          name: '[hash:10].[ext]',
          publicPath: 'https://qcdn.zhangzhongyun.com/spa'
        }
      }]
    }]
  }
};
