import Image from "next/image";

const Posts = async ({ promise }: any) => {
	const randomOperator = await promise();
	return (
		<div>
			{randomOperator && (
				<div className="flex flex-col  rounded-md w-[500px] h-[650px] bg-gradient-to-t from-amber-50 to-cyan-50">
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
					<div className=" h-full rounded-md grid grid-flow-col grid-cols-2 ">
						<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
							<p>Rarity: {randomOperator.rarity} ⭐</p>
							<h2>Operator Name: {randomOperator.name}</h2>
							<p>Class: {randomOperator.class.join(" / ")}</p>
						</div>
						<div className="flex flex-col text-center justify-center items-center gap-2 rounded-md">
							<p>Affiliation: {randomOperator.affiliation.join(" / ")} ♟️</p>
							<h2>Race: {randomOperator.lore.race}</h2>
							<p>Class: {randomOperator.tags.join(" / ")}</p>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Posts;
