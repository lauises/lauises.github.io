// This library allows us to combine paths easily
const path = require('path');
const webpack = require('webpack');
module.exports = {
   mode: 'production',
   entry: path.resolve(__dirname, 'src', 'index.jsx'),
   output: {
      path: path.resolve(__dirname, 'output'),
      filename: 'index.bundle.js'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   module: {
      rules: [
         {
             test: /\.jsx/,
             use: {
                loader: 'babel-loader',
                options: { presets: ['react', 'es2015'] }
             }
         },
         {
            test: /\.scss/,
            use: ['style-loader', 'css-loader', 'sass-loader']
         }
      ]
   },
   devtool: 'inline-source-map',
   devServer: {
     contentBase: './src',
     publicPath: '/output'
  }
};
