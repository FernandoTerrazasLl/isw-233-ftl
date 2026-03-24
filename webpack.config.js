import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default (_, argv) => {
  const isProduction = argv.mode === 'production';
  const shouldAnalyze = process.env.ANALYZE === 'true';

  return {
    mode: isProduction ? 'production' : 'development',
    entry: path.resolve(__dirname, 'src/main.js'),
    output: {
      filename: '[name].[contenthash].js',
      chunkFilename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/',
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        },
        {
          test: /\.(png|jpe?g|svg|webp|gif)$/i,
          type: 'asset',
          parser: { dataUrlCondition: { maxSize: 8 * 1024 } },
          generator: { filename: 'img/[name].[contenthash][ext]' },
        },
        {
          test: /\.(woff2?|ttf|eot)$/i,
          type: 'asset/resource',
          generator: { filename: 'fonts/[name].[contenthash][ext]' },
        },
      ],
    },
    devtool: isProduction ? false : 'source-map',
    devServer: {
      static: { directory: path.resolve(__dirname, 'dist') },
      historyApiFallback: true,
      hot: true,
      liveReload: true,
      open: true,
      port: 8000,
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        inject: 'body',
        minify: isProduction
          ? {
              collapseWhitespace: true,
              collapseBooleanAttributes: true,
              keepClosingSlash: true,
              minifyCSS: true,
              minifyJS: true,
              removeAttributeQuotes: true,
              removeComments: true,
              removeEmptyAttributes: true,
              removeRedundantAttributes: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true,
              useShortDoctype: true,
            }
          : false,
      }),
      new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/blocks', to: 'blocks' },
          { from: 'src/data', to: 'data' },
          { from: 'src/img', to: 'img' },
          { from: 'src/vendor', to: 'vendor' },
        ],
      }),
      ...(isProduction
        ? [
            new ImageMinimizerPlugin({
              minimizer: {
                implementation: ImageMinimizerPlugin.imageminMinify,
                options: {
                  plugins: [
                    ['gifsicle', { interlaced: true }],
                    ['jpegtran', { progressive: true }],
                    ['optipng', { optimizationLevel: 5 }],
                    [
                      'svgo',
                      {
                        plugins: [
                          {
                            name: 'preset-default',
                            params: { overrides: { removeViewBox: false } },
                          },
                        ],
                      },
                    ],
                  ],
                },
              },
            }),
          ]
        : []),
      ...(shouldAnalyze
        ? [
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
              reportFilename: 'bundle-report.html',
            }),
          ]
        : []),
    ],
    optimization: isProduction
      ? {
          minimize: true,
          minimizer: ['...', new CssMinimizerPlugin()],
          usedExports: true,
          sideEffects: true,
          concatenateModules: true,
          splitChunks: {
            chunks: 'all',
            cacheGroups: {
              vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendors',
                chunks: 'all',
              },
            },
          },
          runtimeChunk: 'single',
        }
      : undefined,
    stats: 'minimal',
  };
};
