import Image from "next/image";
import { getOperator } from "../utils/api";
import Link from "next/link";

export default async function Home() {
	const operator = await getOperator();
	console.log("Operator: ", operator);

	const imageToDisplay = "Towering is Cliff of Nostalgia";
	const selectedImage = operator.art.find(
		(image: any) => image.name === imageToDisplay
	);

	return (
		<div className="text-center mt-1 flex flex-col  justify-center items-center">
			<h1 className="text-2xl font-bold">Home</h1>
			<Link href="/operators">Go to Operators List</Link>
			{selectedImage && (
				<Image
					src={selectedImage.link}
					alt="o-picture"
					className="object-cover"
					width={500}
					height={500}
					priority
				/>
			)}
			<div className="flex flex-col gap-1">
				<p>Operator Name: {operator.name}</p>
				<p>Rarity: {operator.rarity} ⭐</p>
				<p>Class: {operator.class.join(" / ")}</p>
				<p>Tags: {operator.tags.join(" / ")}</p>
				<p>Traits: {operator.trait}</p>
				<p>Availability: {operator.availability}</p>
			</div>
		</div>
	);
}
