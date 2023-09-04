import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import NavigationMenu from "./components/NavigationMenu";
import Profile from "./components/Profile";

const AppRoot = () => {
	return (
		<div style={{ display: "flex", gap: 24 }}>
			<NavigationMenu />
			<div style={{ flex: 3 }}>
				<Outlet />
			</div>
		</div>
	);
};

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<AppRoot />}>
				<Route path="/profile" element={<Profile />} />
				<Route path="/profile/:userId" element={<Profile />} />
			</Route>
		</Routes>
	);
};

export default App;
