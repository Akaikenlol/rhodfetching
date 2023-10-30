import Link from "next/link";
import React from "react";
import Button from "./button";

const Navbar = () => {
	return (
		<div className="flex gap-2 justify-between items-center">
			<Link
				href="/"
				className="hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit h-fit p-1 "
			>
				Home
			</Link>
			<Link
				href="/operators/recruitable"
				className="hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit h-fit p-1 "
			>
				Recruitable
			</Link>
			<Link
				href="/operators"
				className="hover:bg-black hover:text-white transition duration-500 ease-in-out  rounded-md w-fit h-fit p-1"
			>
				CN Operators
			</Link>
			<Button />
		</div>
	);
};

export default Navbar;
