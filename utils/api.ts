export async function getOperator(operatorName: string) {
	// const response = await fetch(
	// 	`https://rhodesapi.up.railway.app/api/operator/${operatorName}`,
	// 	{
	// 		cache: "no-cache",
	// 	}
	// );
	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator/${operatorName}`
	);

	if (!response.ok) {
		throw new Error(`Fail to fetch operator ${operatorName} data!`);
	}

	const data = await response.json();

	return data;
}
