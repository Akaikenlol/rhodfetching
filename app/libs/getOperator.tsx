export default async function getOperator(id: any) {
	const response = await fetch(
		`https://rhodesapi.up.railway.app/api/operator/${id}`
	);

	if (!response.ok) {
		throw new Error("Fail to fetch related profile operator information!");
	}

	return response.json();
}
