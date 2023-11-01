"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
	const pathname = usePathname();
	return (
		<div className="flex gap-2 justify-between items-center">
			<Link
				href="/"
				className={`hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit h-fit p-1 ${
					pathname === "/" ? "bg-amber-100" : ""
				}`}
			>
				Home
			</Link>
			<Link
				href="/operators/recruitable"
				className={`hover:bg-black hover:text-white transition duration-500 ease-in-out rounded-md w-fit h-fit p-1 ${
					pathname === "/operators/recruitable" ? "bg-amber-100" : ""
				}`}
			>
				Recruitable
			</Link>
			<Link
				href="/operators"
				className={`hover:bg-black hover:text-white transition duration-500 ease-in-out  rounded-md w-fit h-fit p-1 ${
					pathname === "/operators" ? "bg-amber-100" : ""
				}`}
			>
				CN Operators
			</Link>
		</div>
	);
};

export default Navbar;
