import getOperator from "@/app/libs/getOperator";
import Image from "next/image";
import Navbar from "@/app/components/navbar";
import Button from "@/app/components/button";

interface OperatorE1Page {
	params: {
		name: string;
	};
}

export default async function OperatorE1Page({ params }: OperatorE1Page) {
	const { name } = params;
	const opData = await getOperator(name);

	return (
		<div className="text-center  flex justify-center items-center flex-col bg-gradient-to-t from-amber-50 to-cyan-50 h-[100vh]">
			<div className="flex gap-5 justify-center items-center w-full">
				<h1 className="text-lg">{opData.name}</h1>
				<Navbar />
				<Button randomOperator={opData.name} />
			</div>

			<div className="flex justify-center items-center flex-col gap-2 mt-2 w-[500px] h-[650px] bg-gradient-to-t from-cyan-100  to-yellow-100 rounded-md">
				{opData.image1Link && (
					<Image
						src={opData.image1Link}
						alt="o-picture"
						className="object-cover"
						width={500}
						height={500}
						priority
					/>
				)}
				<div className="h-full rounded-md grid grid-flow-col grid-cols-2">
					<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
						<h2>Operator Name: {opData.name}</h2>
						<p>Rarity: {opData.rarity} ⭐</p>
						<p>Class: {opData.class.join(" / ")}</p>
					</div>
					<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
						<p>Affiliation: {opData.affiliation.join(" / ")} ♟️</p>
						<h2>Race: {opData.lore.race}</h2>
						<p>Class: {opData.tags.join(" / ")}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
