import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function NavigationMenu() {
	let params = useParams();
	let navigate = useNavigate();

	const onItemClicked = (id) => {
		navigate(`/profile/${id}`);
	};

	const applyStyle = (id) => {
		return {
			textDecoration: params?.userId === id ? "line-through" : "none",
			cursor: "pointer",
		};
	};

	return (
		<ul>
			<li onClick={() => onItemClicked(1234)} style={applyStyle(1234)}>
				John
			</li>
			<li onClick={() => onItemClicked(9876)} style={applyStyle(9876)}>
				Julia
			</li>
			<li onClick={() => onItemClicked(5678)} style={applyStyle(5678)}>
				Bob
			</li>
		</ul>
	);
}
