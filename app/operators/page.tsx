import getOperators from "../libs/getOperators";
import { getOperator } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const OperatorsPage = async () => {
	const operators = await getOperators();

	return (
		<div className="text-center mt-2">
			<h1 className="text-2xl font-bold">Operators</h1>
			{operators
				.filter((operator: any) => operator.rarity === 6)
				.map(async (operator: any) => {
					const operatorImages = await getOperator(operator.name);
					return (
						<Link href={`/operators/${operator.id}`}>
							<div
								className="flex justify-center items-center flex-col gap-2 mt-2"
								key={operator.name}
							>
								{operatorImages.art && (
									<Image
										src={
											operatorImages.art.find(
												(image: any) => image.name === "E2"
											).link
										}
										alt="Operator E2 Art"
										className="object-cover"
										width={500}
										height={500}
										priority
									/>
								)}
								<h2>Operator Name: {operator.name}</h2>
								<p>Rarity: {operator.rarity}⭐</p>
								<p>Class: {operator.class.join(" / ")}</p>
							</div>
						</Link>
					);
				})}
			<Link href="/">Go to Home</Link>
		</div>
	);
};

export default OperatorsPage;
