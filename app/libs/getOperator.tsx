export default async function getOperator(name: string) {
	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator/${name}`
	);

	console.log(response);

	if (!response.ok) {
		throw new Error("Fail to fetch related profile operator information!");
	}

	const data = await response.json();
	// console.log("data", data);

	const E2Image = data.art.find((image: any) => image.name === "E2");
	if (!E2Image) {
		throw new Error("E2 image not found for the operator.");
	}

	const E1Image = data.art.find((image: any) => image.name === "E1");
	console.log("E1Image.link", E1Image.link);
	if (!E1Image) {
		throw new Error("E1 image not found for the operator.");
	}

	const imageLink = E2Image ? E2Image.link : null;

	const image1Link = E1Image ? E1Image.link : null;

	return {
		...data,
		imageLink,
		image1Link,
	};
}
