"use client";

import Image from "next/image";
import { useState, useEffect, Suspense } from "react";
import { getRandom } from "@/utils/random";
import Link from "next/link";
import Button from "../components/button";

export default function GetRandomOperator() {
	const [randomOperator, setRandomOperator] = useState<any | null>(null);

	useEffect(() => {
		getRandom()
			.then((operator: any) => {
				setRandomOperator(operator);
			})
			.catch((error: any) => {
				console.log("Error fetching random operator: ", error);
			});
	}, []);

	return (
		<div className="text-center mt-1 ">
			<h1 className="text-lg mb-1">Random Operator</h1>
			{randomOperator && (
				<Link href={`/${randomOperator.name}`}>
					<div className="flex flex-col  rounded-md w-[500px] h-[650px] bg-gradient-to-t from-cyan-100  to-yellow-100">
						{randomOperator.e2Image && (
							<Image
								src={randomOperator.e2Image.link}
								alt="o-picture"
								className="object-cover"
								width={500}
								height={500}
								priority
							/>
						)}
						<div className=" h-full rounded-md grid grid-flow-col grid-cols-2 ">
							<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
								<p>Rarity: {randomOperator.rarity} ⭐</p>
								<h2>Operator Name: {randomOperator.name}</h2>
								<p>Class: {randomOperator.class.join(" / ")}</p>
							</div>
							<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
								<p>Affiliation: {randomOperator.affiliation.join(" / ")} ♟️</p>
								<h2>Race: {randomOperator.lore.race}</h2>
								<p>Class: {randomOperator.tags.join(" / ")}</p>
							</div>
						</div>
					</div>
				</Link>
			)}

			{/* <Suspense
				fallback={
					<div className=" h-full rounded-md bg-stone-300">Loading...</div>
				}
			>
				<Posts promise={getRandom} />
			</Suspense> */}
		</div>
	);
}
