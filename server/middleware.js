module.exports = (express, app, done) => {
	app.disable("x-powered-by");

	app.use(express.static("./dist/client"));
	app.use(express.static("./dist/server"));
	app.use(express.static("public"));

	// static path where files such as images and js will be served from
	app.use("/static", express.static("./dist/client"));
	app.use("/public", express.static("./public"));

	// =================== WARNING ===================
	// ATTENTION this will expose ALL server files
	// =================== WARNING ===================
	app.use("/server", express.static("./dist/server"));

	const renderThunk = require("./server-entry").default;
	const serverRender = renderThunk();

	app.get("/*", serverRender);

	done();
};
