// export default async function getOperatorE1(name: string) {
// 	const response = await fetch(
// 		`https://rhodesapi.up.railway.app/api/operator/${name}`
// 	);

// 	console.log(response);

// 	if (!response.ok) {
// 		throw new Error("Fail to fetch related profile operator information!");
// 	}

// 	const data = await response.json();
// 	// console.log("data", data);

// 	const E1Image = data.art.find((image: any) => image.name === "E1");

// 	if (!E1Image) {
// 		throw new Error("E1 image not found for the operator.");
// 	}
// 	const image1Link = E1Image ? E1Image.link : null;

// 	return {
// 		...data,
// 		image1Link,
// 	};
// }
