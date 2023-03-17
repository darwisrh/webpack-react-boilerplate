require('dotenv').config()
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const port = process.env.PORT

module.exports = {
   mode: 'development',
   entry: './src/index.js',
   output: {
      filename: 'bundle.[hash].js',
      publicPath: '/'
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   devtool: 'inline-source-map',
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
         },
         {
            test: /\.s[ac]ss$/,
            use: [
               {
                  loader: 'style-loader',
               },
               {
                  loader: 'sass-loader',
                  options: {
                     sourceMap: true,
                  }
               }
            ]
         },
         {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/
         }

      ]
   },
   plugins: [
      new HTMLWebpackPlugin({
         template: 'public/index.html'
      })
   ],
   devServer: {
      host: 'localhost',
      port: port,
      historyApiFallback: true,
      open: true
   }
}