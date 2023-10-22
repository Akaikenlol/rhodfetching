async function getOperator() {
	const response = await fetch(
		"https://rhodesapi.up.railway.app/api/operator/ling"
	);
	const data = await response.json();
	data.tags = data.tags.split("/");
	return data;
}

export default async function Home() {
	const operator = await getOperator();
	console.log("Operator: ", operator);
	return (
		<div className="text-center mt-10">
			<h1 className="text-5xl font-bold">Home</h1>
			<div className="flex flex-col gap-2 mt-5">
				<p>{operator.name}</p>
				<p>{operator.rarity}</p>
				<p>{operator.class}</p>
				<p>{operator.tags.join("/")}</p>
				<p>{operator.traits}</p>
				<p>{operator.availability}</p>
			</div>
		</div>
	);
}
