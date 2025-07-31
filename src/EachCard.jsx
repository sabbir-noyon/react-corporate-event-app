import { useEffect, useState } from "react";
import { useLoaderData, useParams, Link } from "react-router-dom";

const EachCard = () => {
	const [newData, setNewData] = useState({});

	const { id } = useParams();
	console.log(id, typeof id);

	const loadedData = useLoaderData();
	console.log(loadedData);

	useEffect(() => {
		const findLoadedData = loadedData?.find((xyz) => xyz.id == id);
		setNewData(findLoadedData);
	}, []);

	return (
		<div className="lg:pt-10 lg:pb-10 lg:px-10">
			<img
				className="rounded-xl lg:w-[1400px] lg:h-[700px] my-0 mx-auto"
				src={newData.img_url}
				alt={newData.title || "Card Image"}
			/>

			<h1 className="font-poppins text-center mt-6 lg:mt-8 text-[25px] md:text-[30px] lg:text-[40px] font-bold text-[#FE3E01]">
				{newData.title}
			</h1>

			<p className="service-card-description font-poppins text-justify md:text-center lg:text-justify font-medium lg:px-52 mt-4 lg:mt-6 text-[12px] md:text-[16px] lg:text-[18px] text-[#1e1e1e]">
				{newData.description_long}
			</p>

			<div className="text-center mt-3 lg:mt-8">
				<button
					type="submit"
					className="text-left bg-[#FE3E01] hover:bg-[#be3207] text-white text-base md:text-lg lg:text-lg font-medium max-w-fit rounded-lg px-4 py-2 mt-3 mb-12 md:mb-14 ml-3"
				>
					<Link to={`/`}>Back Home</Link>
				</button>
			</div>
		</div>
	);
};

export default EachCard;
