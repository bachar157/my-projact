const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');


module.exports = {

    entry: './src/js/index.js',
 
    output: {
        publicPath: '',
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/main.js'
    },
    

    module: {
        rules: [
          {
            test: /\.(sass|css|scss)$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader, 
                options: {
                  publicPath: '../'
                }
              },
              "css-loader",
              "sass-loader",
            ],
          },

          {
            test: /\.(png|jpg?g|gif|mp4)$/i,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "images",
                }
              },
            ],
          },

          {
            test: /\.(svg|eot|woff|woff2|ttf)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: "fonts",
                }
              },
            ],
          },

          {
            test: /\.html$/i,
            loader: 'html-loader',
          },

          {
            test: require.resolve("jquery"),
            loader: "expose-loader",
            options: {
              exposes: ["$", "jQuery"],
            },
          },
        ],
    },
    
    
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        writeToDisk: true,
        stats: 'errors-only',
        open: true
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
          template: './src/distributors.html',
          filename: 'distributors.html',
      }),
        new HtmlWebpackPlugin({
          template: './src/proudct.html',
          filename: 'proudct.html',
      }),
        new HtmlWebpackPlugin({
          template: './src/aboutcompany.html',
          filename: 'aboutcompany.html',
      }),
     

        new MiniCssExtractPlugin({
            filename: "css/style.css"
        }),
        new HtmlWebpackPlugin({
          template: './src/Turkish Coffee.html',
          filename: 'Turkish Coffee.html',
      }),
      new HtmlWebpackPlugin({
        template: './src/coffee.html',
        filename: 'coffee.html',
    }),
    ]
}