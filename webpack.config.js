const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env, options) => {
    const isProduction = options.mode === 'production';

    const config = {
        mode: isProduction ? 'production' : 'development',
        devtool: isProduction ? 'none' : 'source-map',
        watch: !isProduction,
        entry: ['./src/index.js', './src/sass/style.scss'],
        output: {
            path: path.join(__dirname, '/dist'),
            filename: 'script.js',
        },
        module: {
          rules: [
              {
                  test: /\.js$/,
                  exclude: /node_modules/,
                  use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env']
                    }
                  }
              }, {
                  test: /\.scss$/,
                  use: [
                      MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' 
                  ]
              }, {
                test: /\.(jpe?g|png|svg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      outputPath: 'img',
                      name: '[name].[ext]'
                    }},
                  {
                    loader: 'image-webpack-loader',
                    options: {
                      bypassOnDebug : true,
                      mozjpeg: {
                        progressive: true,
                        quality: 75
                      },
                      // optipng.enabled: false will disable optipng
                      optipng: {
                        enabled: false,
                      },
                      pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                      },
                      gifsicle: {
                        interlaced: false,
                        optimizationLevel: 1
                      },
                      // the webp option will enable WEBP
                      webp: {
                        quality: 75
                      }
                    }
                  }
                ]
              }, {
                  test: /\.(png|svg|jpe?g|gif)$/,
                      use: [
                          {
                              loader: 'file-loader',
                          }
                      ]
                  }, {
                      test: /\.html$/,
                      loader: 'html-loader',
                  }, {
                      test: /\.(woff|woff2|ttf|otf|eot)$/,
                      use: [{
                        loader: 'file-loader',
                        options: {
                          outputPath: 'fonts'
                        }
                      }]
                  },
            ]
        },
        plugins: [
          new CleanWebpackPlugin(),
          new HtmlWebpackPlugin({
              template: 'index.html'
          }),
          new MiniCssExtractPlugin({
              filename: 'style.css'
          })
      ]
  }

  return config;
}