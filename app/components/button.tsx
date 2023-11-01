"use client";

import { getRandom } from "@/utils/random";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Props {
	randomOperator: any;
}

const Button: React.FC<Props> = ({ randomOperator }: any) => {
	// const [randomOperator, setRandomOperator] = useState<any | null>(null);
	console.log("randomOperator", randomOperator);

	// useEffect(() => {
	// 	getRandom()
	// 		.then((operator: any) => {
	// 			setRandomOperator(operator);
	// 		})
	// 		.catch((error: any) => {
	// 			console.log("Error fetching random operator: ", error);
	// 		});
	// }, []);

	const e1Path = randomOperator ? `/${randomOperator.name}/E1` : "/";
	return (
		<div className="flex gap-2 mt-2">
			<Link
				href={e1Path}
				className="hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit p-1"
			>
				E1
			</Link>
		</div>
	);
};

export default Button;
