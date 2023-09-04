import React from "react";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import App from "../src/App";

export default async (req, res) => {
	let didError = false;

	console.log("[server] Requested URl", req.url);

	const stream = renderToPipeableStream(
		<StaticRouter location={req.url}>
			<App />
		</StaticRouter>,
		{
			// `bootstrapScripts` includes the JS bundle to hydrate client components
			// comment it and you'll see that it'll be rendred but there will be no
			// user interactions available
			bootstrapScripts: ["/static/main.js"],
			onAllReady() {
				res.statusCode = didError ? 500 : 200;

				res.setHeader("content-type", "text/html");
				res.write(`
      <!DOCTYPE html>
      <html>
        <body>
          <div id="root">`);
				stream.pipe(res);
				res.write(`
          </div>
        </body>
      </html>`);
			},
			onShellError() {
				res.statusCode = 500;
				res.send(`<h1>An error occurred</h1>`);
			},
			onError(err) {
				didError = true;
				console.error(err);
			},
		}
	);
};
