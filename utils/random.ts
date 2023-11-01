export async function getRandom() {
	try {
		// const response = await fetch(
		// 	"https://rhodesapi.up.railway.app/api/operator/",
		// 	{
		// 		cache: "no-cache",
		// 	}
		// );
		const response = await fetch(
			"https://rhodesapi.up.railway.app/api/operator/"
		);
		if (!response.ok) {
			throw new Error("Failed to fetch a random operator!");
		}
		const data = await response.json();

		const sixStarOperators = data.filter(
			(operator: any) => operator.rarity === 6
		);
		const randomIndex = Math.floor(Math.random() * sixStarOperators.length);
		const selectedOperator = sixStarOperators[randomIndex];

		const e2Image = await fetchImage(selectedOperator);
		selectedOperator.e2Image = e2Image;

		const e1Image = await fetchImage(selectedOperator);
		selectedOperator.e1Image = e1Image;

		return selectedOperator;
	} catch (error: any) {
		throw new Error(`Error fetching random operator:${error.message}`);
	}
}

async function fetchImage(operator: any) {
	const operatorName = encodeURIComponent(operator.name);

	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator/${operatorName}`,
		{
			cache: "no-cache",
		}
	);

	if (!response.ok) {
		throw new Error(`Failed to fetch E2 image for operator: ${operatorName}`);
	}

	const imageData = await response.json();
	const E2Image = imageData.art.find((image: any) => image.name === "E2");

	return E2Image || null;
}
