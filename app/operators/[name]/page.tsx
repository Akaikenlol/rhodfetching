import getOperator from "@/app/libs/getOperator";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface OperatorProfilePage {
	params: {
		name: string;
	};
}

export default async function OperatorProfilePage({
	params,
}: OperatorProfilePage) {
	const { name } = params;
	const opData = await getOperator(name);

	return (
		<div className="text-center mt-2 flex justify-center items-center flex-col">
			<div className="flex gap-5 justify-center items-center w-full">
				<h1 className="text-xl">{opData.name}</h1>
				<Link
					href="/operators"
					className="hover:bg-black hover:text-white rounded-md w-fit h-fit p-2 text-xl transition duration-500 ease-in-out"
				>
					Go Back To Operator List
				</Link>
				<Link
					href="/"
					className="hover:bg-black hover:text-white rounded-md w-fit h-fit p-2 text-xl transition duration-500 ease-in-out"
				>
					Go Back Home
				</Link>
			</div>

			<div className="flex justify-center items-center flex-col gap-2 mt-2 w-[500px] h-[90vh] bg-gradient-to-t from-amber-50 to-cyan-50 rounded-md">
				{opData.imageLink && (
					<Image
						src={opData.imageLink}
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
