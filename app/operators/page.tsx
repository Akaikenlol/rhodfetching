import getOperators from "../libs/getOperators";
import { getOperator } from "@/utils/api";
import Image from "next/image";

const OperatorsPage = async () => {
	const operators = await getOperators();
	const operatorImages = await getOperator();

	return (
		<div className="text-center mt-2">
			<h1 className="text-2xl font-bold">Operators</h1>

			{operators
				.filter((operator: any) => operator.rarity === 6)
				.map((operator: any) => (
					<div
						className="flex justify-center items-center flex-col gap-2 mt-2"
						key={operator.name}
					>
						<h2>Operator Name: {operator.name}</h2>
						<p>Rarity: {operator.rarity} ⭐</p>
						<p>Class: {operator.class.join(" / ")}</p>
						{operatorImages.art && (
							<Image
								src={
									operatorImages.art.find((image: any) => image.name === "E2")
										.link
								}
								alt="Operator E2 Art"
								className="object-cover"
								width={500}
								height={500}
								priority
							/>
						)}
					</div>
				))}
		</div>
	);
};

export default OperatorsPage;
