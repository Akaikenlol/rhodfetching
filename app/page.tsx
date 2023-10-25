import Image from "next/image";
import { getOperator } from "../utils/api";
import Link from "next/link";
import GetRandomOperator from "./libs/getRandomOperator";

export default async function Home() {
	return (
		<div className="text-center mt-1 flex flex-col  justify-center items-center">
			<GetRandomOperator />
			<Link href="/operators">Go to Operators List</Link>
		</div>
	);
}
