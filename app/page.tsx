import Link from "next/link";
import GetRandomOperator from "./libs/getRandomOperator";

export default async function Home() {
	return (
		<div className="text-center mt-1 flex flex-col  justify-center items-center">
			<div className="flex flex-col gap-1 justify-center items-center w-full">
				<GetRandomOperator />
				<Link
					href="/operators"
					className="hover:bg-black hover:text-white transition duration-500 ease-in-out border border-black rounded-md w-fit h-fit p-2"
				>
					Go to Operators List
				</Link>
			</div>
		</div>
	);
}
