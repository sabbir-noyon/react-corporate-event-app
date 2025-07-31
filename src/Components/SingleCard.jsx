const SingleCard = ({ eachCard }) => {
	const { id, img_url, title, description_short } = eachCard || {};

	const handleOpen = () => {
		window.open(`/services-data/${id}`, "_blank");
	};

	return (
		<div className="card-wrapper">
			<div
				onClick={handleOpen}
				data-aos="flip-left"
				data-aos-easing="ease-out-cubic"
				data-aos-duration="2000"
				className="card lg:mt-[-30px] flex flex-col rounded-xl shadow-2xl h-full hover:scale-105 transition-transform duration-300 cursor-pointer"
			>
				<div className="w-full h-40 sm:h-52 md:h-60 lg:h-72 overflow-hidden">
					<img
						className="w-full h-full object-cover rounded-t-xl"
						src={img_url}
						alt={title}
					/>
				</div>

				<div className="px-3 py-4 flex flex-col flex-grow justify-between">
					<h2 className="single-card-title text-lg text-center font-semibold font-poppins text-[#FE3E01]">
						{title}
					</h2>
					<hr className="single-card-hr mt-2 w-3/4 mx-auto border border-[#FE3E01]" />

					<p className="mt-3 text-center text-base  text-[#1e1e1e] font-poppins">
						{description_short}
					</p>
				</div>

				<div className="flex justify-center mb-4">
					<button
						onClick={(e) => {
							e.stopPropagation(); // Stop bubbling to parent
							handleOpen();
						}}
						type="button"
						className="bg-[#FE3E01] hover:bg-[#d83504] transition-colors duration-400 text-white text-base sm:text-lg font-medium rounded-lg px-4 py-2 mt-2"
					>
						Service Details
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleCard;
