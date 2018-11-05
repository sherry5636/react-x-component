process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const path = require('path');
const UglifyJsParallelPlugin = require('webpack-uglify-parallel');
const { filePreName, fileName } = require('./dllconfig')
const os = require('os');

const currPath = process.cwd();
module.exports = {
	context: currPath,
	devtool: false,
	entry: {
		[filePreName]: [
			'axios',
			'react',
			'react-dom',
			'react-router',
			'react-router-dom',
			'mobx',
			'mobx-react',
		]
	},
	output: {
		path: path.resolve(__dirname, '../dll'),
		filename: `[name]${fileName}`,
		library: '[name]_[hash]',
	},
	plugins: [
		new UglifyJsParallelPlugin({
			workers: os.cpus().length,
			mangle: true,
			exclude: /\.min\.js$/,
			output: { comments: false },
			compressor: {
				warnings: false,
				drop_console: true,
				drop_debugger: true
			}
		}),
		new webpack.DllPlugin({
			context: currPath,
			path: path.join(currPath, 'dll', '[name]-manifest.json'),
			name: '[name]_[hash]',
		}),
	]
};
