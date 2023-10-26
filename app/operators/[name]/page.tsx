import getOperator from "@/app/libs/getOperator";
import Image from "next/image";
import Link from "next/link";

interface OperatorProfilePage {
	params: {
		name: string;
	};
}

export default async function OperatorProfilePage({
	params,
}: OperatorProfilePage) {
	const { name } = params;
	const opData = await getOperator(name);

	return (
		<div className="text-center mt-2">
			<h1 className="text-2xl font-bold">Random Operator</h1>
			<div className="flex justify-center items-center flex-col gap-2 mt-2">
				<h2>Operator Name: {opData.name}</h2>
				<p>Rarity: {opData.rarity} ⭐</p>
				<p>Class: {opData.class.join(" / ")}</p>
				{opData.imageLink && (
					<Image
						src={opData.imageLink}
						alt="o-picture"
						className="object-cover"
						width={500}
						height={500}
						priority
					/>
				)}
			</div>
			<Link href="/operators">Go Back To Operator List</Link>
		</div>
	);
}
