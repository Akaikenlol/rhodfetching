export default async function getRecruitableOperators(limit = 30) {
	const response = await fetch("https://rhodesapi.up.railway.app/api/operator");

	if (!response.ok) {
		throw new Error("Fail to fetch operators!");
	}

	const operators = await response.json();

	const sixStarOperators = operators.filter(
		(operator: any) => operator.rarity === 6
	);
	const limitedSixStarOperators = sixStarOperators.filter(
		(operator: any) => operator.recruitable === "Yes"
	);

	const imagePromises = limitedSixStarOperators.map(async (operator: any) => {
		const response = await fetch(
			`https://rhodesapi.up.railway.app/api/operator/${operator.name}`
		);

		if (!response.ok) {
			throw new Error("Fail to fetch operator image!");
		}

		const imageData = await response.json();

		const E2Image = imageData.art.find((image: any) => image.name === "E2");
		const imageLink = E2Image ? E2Image.link : null;

		return {
			...operator,
			imageLink,
		};
	});

	return Promise.all(imagePromises);
}
