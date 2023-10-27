import getOperators from "../libs/getOperators";
import { getOperator } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const OperatorsPage = async () => {
	const operators = await getOperators();

	return (
		<div className="text-center my-2 flex flex-col justify-center items-center ">
			<div className="flex gap-5 justify-center items-center w-full">
				<h1 className="text-xl">CN Released Operators</h1>
				<Link
					href="/"
					className="hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit h-fit p-2 text-xl"
				>
					Go to Home
				</Link>
			</div>

			{operators
				.filter((operator: any) => operator.rarity === 6)
				.map(async (operator: any) => {
					const operatorImages = await getOperator(operator.name);
					return (
						<Link href={`/operators/${operator.name}`}>
							<div
								className="flex flex-col text-center mt-2 w-[500px] h-[95vh] bg-gradient-to-t from-amber-50 to-cyan-50 rounded-md"
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
								<div className=" h-full rounded-md grid grid-flow-col grid-cols-2 gap-2">
									<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
										<h2>Operator Name: {operator.name}</h2>
										<p>Rarity: {operator.rarity}⭐</p>
										<p>Class: {operator.class.join(" / ")}</p>
									</div>
									<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
										<p>Affiliation: {operator.affiliation.join(" / ")} ♟️</p>
										<h2>Race: {operator.lore.race}</h2>
										<p>Class: {operator.tags.join(" / ")}</p>
									</div>
								</div>
							</div>
						</Link>
					);
				})}
		</div>
	);
};

export default OperatorsPage;
