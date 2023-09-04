import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

const root = document.getElementById("root");

const render = async () => {
	ReactDOMClient.hydrateRoot(
		root,
		<BrowserRouter>
			<App />
		</BrowserRouter>
	);
};

render();
