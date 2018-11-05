const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const { fullName } = require('./dllconfig')

module.exports = {
    /*设置生产环境*/
    mode: 'production',
    entry: {
        base: ['babel-polyfill', 'react', 'classnames', 'react-router', 'react-dom', 'axios'],
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname,'../build'),
        filename: 'js/[name].[chunkhash:6].js',
        chunkFilename: "js/[name].[chunkhash:6].js",
        publicPath: '/'
    },
    resolve: {
        modules: [path.resolve(__dirname, '../src'), 'node_modules'],
        alias: {
            components: path.resolve(__dirname, '../src/components'),
            services: path.resolve(__dirname, '../src/services')
        }
    },
    optimization: {
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    priority: -20,
                    chunks: "all"
                }
            }
        }
    },
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            chunks: "all",
            minSize: 30000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: true
        }),
        new ExtractTextPlugin({
            'filename': 'css/styles.[hash:6].css'
        }),
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            sourceMap: false,
            uglifyOptions: {
                warnings: false,
                output: {
                    comments: false,
                    beautify: false
                },
                compressor: {
                    sequences: true,
                    drop_debugger: true,
                    drop_console: true
                }
            }
        }),
        new OptimizeCSSPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {
                discardComments: {removeAll: true},
                safe: true
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: path.resolve(__dirname, '../build/index.html'),
            inject: 'body'
        }),
        new CleanWebpackPlugin(['build']),
        new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require('../dll/vendor-manifest.json'),
        }),
        new AddAssetHtmlPlugin({ filepath: require.resolve(`../dll/${fullName}`), includeSourcemap: false }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader!css-loader']
            },
            {
                test: /\.scss$/,
                use: [{loader:"style-loader"},{loader:"css-loader"},{loader:"sass-loader"}]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'img/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.(woff|svg|eot|ttf|woff2)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            name: 'fonts/[name].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.swf$/,
                loader: 'file?name=js/[name].[ext]'
            }
        ]
    }
};