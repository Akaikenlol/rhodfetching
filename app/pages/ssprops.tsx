import Image from "next/image";
import { getRandom } from "@/utils/random";

const Ssprops = ({ randomOperator }: any) => {
	return (
		<div className="text-center">
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
};

export default Ssprops;

export async function getServerSideProps() {
	try {
		const randomOperator = await getRandom();
		return {
			props: {
				randomOperator,
			},
		};
	} catch (error: any) {
		console.log("Error fetching random operator!", error);
		return {
			props: {
				randomOperator: null,
			},
		};
	}
}
