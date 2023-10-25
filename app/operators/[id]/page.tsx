import getOperator from "@/app/libs/getOperator";
import Image from "next/image";

export default async function OperatorProfilePage({
	params,
}: {
	params: { id: any };
}) {
	const { id } = params;
	const opData = await getOperator(id);

	return (
		<div className="text-center mt-2">
			<h1 className="text-2xl font-bold">Random Operator</h1>
			<div className="flex flex-col gap-2 mt-2">
				<h2>Operator Name: {opData.name}</h2>
				<p>Rarity: {opData.rarity} ⭐</p>
				<p>Class: {opData.class.join(" / ")}</p>
				<Image
					src={opData.e2Image.link}
					alt="o-picture"
					className="object-cover"
					width={500}
					height={500}
					priority
				/>
			</div>
		</div>
	);
}
