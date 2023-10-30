import Link from "next/link";
import GetRandomOperator from "./libs/getRandomOperator";
import Navbar from "./components/navbar";

export default async function Home() {
	return (
		<div className="bg-gradient-to-t from-amber-50 to-cyan-50 h-[100vh]">
			<div className="text-center flex flex-col  justify-center items-center">
				<div className="flex flex-col gap-1 mt-2 justify-center items-center w-full">
					<Navbar />
					<GetRandomOperator />
				</div>
			</div>
		</div>
	);
}
