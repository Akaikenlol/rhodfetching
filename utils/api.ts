export async function getOperator() {
	// const response = await fetch("https://rhodesapi.up.railway.app/api/operator");
	const response = await fetch(
		"https://rhodesapi.up.railway.app/api/operator/ling"
	);
	const data = await response.json();

	if (typeof data.tags && data.class === "string") {
		data.tags = data.tags.split("/");
		data.class = data.class.split("/");
	} else {
		console.log("Data tags and class is not a string");
	}

	return data;
}
