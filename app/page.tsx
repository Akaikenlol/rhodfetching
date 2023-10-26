import Link from "next/link";
import GetRandomOperator from "./libs/getRandomOperator";

export default async function Home() {
	return (
		<div className="text-center mt-1 flex flex-col  justify-center items-center">
			<GetRandomOperator />
			<Link href="/operators">Go to Operators List</Link>
			<h3>
				Dude you need to implement the button for filter, where cn avaible, and
				recuritable!
			</h3>
		</div>
	);
}
