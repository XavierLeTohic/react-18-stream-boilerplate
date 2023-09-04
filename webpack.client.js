const path = require("path");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const shared = require("./webpack.shared");

module.exports = merge(shared, {
	name: "client",
	target: "web",
	entry: path.resolve(__dirname, "./src/index.js"),
	mode: "development",
	devtool: "source-map",
	output: {
		path: path.resolve(__dirname, "./dist/client"),
		filename: "[name].js",
		publicPath: "http://localhost:1337/static/",
	},
});
