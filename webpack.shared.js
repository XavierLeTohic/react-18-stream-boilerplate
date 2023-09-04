module.exports = {
	resolve: {
		extensions: [".jsx", ".js", ".json", ".css"],
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				include: /node_modules/,
				type: "javascript/auto",
			},
			{
				test: /\.(ts|js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: "esbuild-loader",
					options: {
						loader: "tsx",
						target: "es2020",
					},
				},
			},
		],
	},
};
