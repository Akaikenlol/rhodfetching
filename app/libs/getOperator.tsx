export default async function getOperator(name: string) {
	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator/${encodeURIComponent(name)}`
	);

	if (!response.ok) {
		throw new Error("Fail to fetch related profile operator information!");
	}

	const data = await response.json();
	console.log("data", data);

	const E2Image = data.art.find((image: any) => image.name === "E2");

	if (!E2Image) {
		throw new Error("E2 image not found for the operator.");
	}

	const imageLink = E2Image ? E2Image.link : null;

	return {
		...data,
		imageLink,
	};
}
