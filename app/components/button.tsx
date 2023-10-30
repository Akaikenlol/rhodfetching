"use client";

import { useState } from "react";

const Button = ({ operatorImage, setDisplayedArt }: any) => {
	const handleE1Click = () => {
		setDisplayedArt(
			operatorImage.art.find((image: any) => image.name === "E1")
		);
	};

	const handleE2Click = () => {
		setDisplayedArt(
			operatorImage.art.find((image: any) => image.name === "E2")
		);
	};

	return (
		<div className="flex gap-2">
			<button
				className="hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit p-1"
				onClick={handleE1Click}
			>
				E1
			</button>
			<button
				className="hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit p-1"
				onClick={handleE2Click}
			>
				E2
			</button>
		</div>
	);
};

export default Button;
