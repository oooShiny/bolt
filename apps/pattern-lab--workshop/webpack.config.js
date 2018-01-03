// const { resolve, join } = require('path');
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const exportJson = require('node-sass-export');
const npmSass = require('npm-sass');
const fs = require('fs-extra');
const globby = require('globby');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const WebpackShellPlugin = require('@bolt/build-tools/webpack-shell-plugin');
const EventHooksPlugin = require('event-hooks-webpack-plugin');
const globImporter = require("node-sass-glob-importer");
const onceImporter = require('node-sass-once-importer');
// const magicImporter = require("node-sass-magic-importer");
// const plPath = resolve('../../');
// const plPath = path.resolve(__dirname, './');


// const plCompile = require('./build-patternlab')(plPath);

const config = {
  entry: {
    'bolt': './src/bolt',
    // 'bolt-critical': './src/bolt-critical'
  },
  data: './src/_data'
}

const sassExportData = require('@theme-tools/sass-export-data')({
  path: config.data
});


module.exports = {
  entry: config.entry,
  output: {
    path: `${process.cwd()}/dist/assets`,
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".svg", ".scss"]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true,
                modules: false, // re-enable if/when using css-modules. was adding duplicate output of CSS to JS output
                importLoaders: true,
                localIdentName: "[local]"
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: function() {
                  return [require("autoprefixer")];
                }
              }
            },
            {
              loader: "clean-css-loader",
              options: {
                skipWarn: true,
                compatibility: "ie9",
                level: process.env.NODE_ENV === "production" ? 2 : 0,
                inline: ["remote"]
              }
            },
            {
              loader: "sass-loader",
              options: {
                importer: [
                  onceImporter(),
                  npmSass.importer,
                ],
                functions: sassExportData,
                outputStyle: "expanded",
                precision: 2
              }
            }
          ]
        })
      },
      {
        test: /\.js$/,
        // exclude: /\.es6.js$/,
        // exclude: /(native-shim\.js|node_modules\/\@webcomponents\/webcomponentsjs\/custom-elements-es5-adapter\.js|\@webcomponents\/webcomponentsjs\/custom-elements-es5-adapter\.js|custom-elements-es5-adapter\.js|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"].map(require.resolve),
            cacheDirectory: true,
            babelrc: false,
            plugins: [
              // [
              //   'jsx-pragmatic',
              //   {
              //     module: 'preact',
              //     export: 'h',
              //     import: 'h'
              //   }
              // ],
              [
                // 'babel-plugin-transform-class-properties',
                "babel-plugin-transform-class-properties",
                "babel-plugin-syntax-dynamic-import",
                // 'babel-plugin-dynamic-import-node',
                "babel-plugin-transform-react-jsx",
                // 'babel-plugin-dynamic-import-node',
                "babel-plugin-transform-object-assign",
                "babel-plugin-transform-object-rest-spread"
                // 'babel-plugin-transform-object-assign',
                // 'babel-plugin-transform-object-rest-spread',
              ].map(require.resolve)
              // [
              //   'transform-react-jsx',
              //   {
              //     pragma: 'h'
              //   }
              // ],
              // ['module-resolver',
              //   {
              //     root: [
              //       './src'
              //     ],
              //     alias: {
              //       h: 'preact'
              //     }
              //   }
              // ],
              // [
              //   'babel-plugin-transform-class-properties',
              //   // 'babel-plugin-dynamic-import-node',
              //   'babel-plugin-transform-object-assign',
              //   'babel-plugin-transform-object-rest-spread',
              //   // 'babel-plugin-syntax-dynamic-import'
              // ].map(require.resolve),

              // require.resolve('babel-plugin-transform-class-properties'),
              // require.resolve('babel-plugin-transform-object-assign'),
              // require.resolve('babel-plugin-transform-object-rest-spread'),
              // require.resolve('babel-plugin-syntax-dynamic-import'),
              // ['babel-plugin-transform-class-properties'].map(require.resolve),
              // 'transform-object-assign',
              // 'transform-object-rest-spread',
              // 'syntax-dynamic-import'
              // 'transform-custom-element-classes',
              // 'transform-es2015-classes',
              // 'inline-react-svg'
            ],

            presets: [
              [
                require.resolve("babel-preset-env"),
                {
                  targets: {
                    browsers: ["last 3 versions", "not ie < 9"]
                  },
                  modules: false,
                  debug: false
                }
              ],
              require.resolve("babel-preset-flow"),
              require.resolve("babel-preset-react")
              // "flow",
              // "react",
            ]
          }
        }
      }
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: [[
      //         'env'
      //       ]]
      //     }
      //   }
      // }
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      // filename: '[name].css?[hash]-[chunkhash]-[contenthash]-[name]',
      filename: "[name].css",
      // disable: false,
      allChunks: true
    }),
    // https://github.com/1337programming/webpack-shell-plugin/pull/46
    new WebpackShellPlugin({
      onBeforeBuild: ['php -d memory_limit=4048M core/console --generate'],
      dev: true
    }),
    // new EventHooksPlugin({
    // new HtmlWebpackPlugin({
    // // excludeAssets: [/.*/]
    // }),
    // new HtmlWebpackExcludeAssetsPlugin()
  ],
  devServer: {
    contentBase: path.resolve('dist'),
    compress: true,
    port: 8080,
    overlay: {
      errors: true
    },
    host: '0.0.0.0',
    disableHostCheck: true,
    hot: true,
    inline: true,
    watchContentBase: true,
  }
};