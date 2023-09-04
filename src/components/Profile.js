import React from "react";
import { useParams } from "react-router-dom";

export default function Profile() {
	let params = useParams();

	return <div>Selected profile: {params?.userId ?? "None"}</div>;
}
