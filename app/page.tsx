async function getOperator() {
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

export default async function Home() {
	const operator = await getOperator();
	console.log("Operator: ", operator);

	return (
		<div className="text-center mt-10">
			<h1 className="text-5xl font-bold">Home</h1>
			<div className="flex flex-col gap-2 mt-5">
				<p>Operator Name: {operator.name}</p>
				<p>Rarity: {operator.rarity} ⭐</p>
				<p>Class: {operator.class.join(" / ")}</p>
				<p>Tags: {operator.tags.join(" / ")}</p>
				<p>Traits: {operator.traits}</p>
				<p>Availability: {operator.availability}</p>
			</div>
		</div>
	);
}
