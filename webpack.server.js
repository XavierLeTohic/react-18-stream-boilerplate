const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const shared = require("./webpack.shared");

module.exports = merge(shared, {
	name: "server",
	target: "node",
	entry: [path.resolve(__dirname, "./server/index.js")],
	output: {
		path: path.resolve(__dirname, "./dist/server"),
		libraryTarget: "commonjs-module",
		publicPath: "auto",
	},
	mode: "development",
	stats: {
		colors: true,
	},
});
