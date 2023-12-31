import Navbar from "@/app/components/navbar";
import getRecruitableOperators from "@/app/libs/filter";
import { getOperator } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";

const OperatorsPage = async () => {
	const operators = await getRecruitableOperators();

	return (
		<div className="text-center flex flex-col justify-center items-center bg-gradient-to-t from-amber-50 to-cyan-50">
			<div className="flex gap-5 mt-2 justify-center items-center w-full">
				<h1 className="text-lg">Recruitable Operators</h1>
				<Navbar />
			</div>

			{operators
				.filter((operator: any) => operator.rarity === 6)
				.map(async (operator: any) => {
					const operatorImages = await getOperator(operator.name);
					return (
						<Link href={`/operators/${operator.name}`}>
							{/* <section> */}
							<div
								className="flex flex-col text-center mt-2 w-[500px] p-5 mb-5 bg-gradient-to-t from-cyan-100  to-yellow-100 rounded-md"
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
								<div className=" h-fit rounded-md grid grid-flow-col grid-cols-2 gap-2">
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
							{/* </section> */}
						</Link>
					);
				})}
		</div>
	);
};

export default OperatorsPage;
