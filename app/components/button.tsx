"use client";

import Link from "next/link";
import { useState } from "react";

const Button = ({ randomOperator }: any) => {
	// const [randomOperator, setRandomOperator] = useState<any | null>(null);

	if (randomOperator && randomOperator.name) {
		return (
			<div className="flex gap-2 mt-2">
				<Link
					href={`/${randomOperator.name}/E1`}
					className="hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit p-1"
				>
					E1
				</Link>
				<Link
					href={`/${randomOperator.name}`}
					className=" border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit p-1"
				>
					E2
				</Link>
			</div>
		);
	}
	return (
		<div className="flex gap-2 mt-2">
			<Link
				href={`/${randomOperator.name}/E1`}
				className="hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit p-1"
			>
				E1
			</Link>
			<Link
				href={`/${randomOperator.name}`}
				className=" border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit p-1"
			>
				E2
			</Link>
		</div>
	);
};

export default Button;
