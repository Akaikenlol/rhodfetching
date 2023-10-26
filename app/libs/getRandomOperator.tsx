"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getRandom } from "@/utils/random";

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
		<div className="text-center mt-2">
			<h1 className="text-2xl font-bold">Random Operator</h1>
			{randomOperator && (
				<div className="flex flex-col gap-2 mt-2">
					<h2>Operator Name: {randomOperator.name}</h2>
					<p>Rarity: {randomOperator.rarity} ⭐</p>
					<p>Class: {randomOperator.class.join(" / ")}</p>
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
				</div>
			)}
		</div>
	);
}
