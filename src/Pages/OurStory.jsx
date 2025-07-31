import React from "react";

const OurStory = () => {
	return (
		<div className="px-4 mt-5 mb-5 lg:mb-12 md:mb-8 sm:px-6 lg:px-20 py-10 bg-white text-gray-800">
			{/* Hero Section */}
			<div className="mb-10">
				<img
					src="/our-story-main.png"
					alt="Our Story Banner"
					className="w-full h-auto max-h-[400px] object-cover rounded-xl shadow-md"
				/>
			</div>

			{/* Intro Text */}
			<div className="max-w-4xl mx-auto mb-12 text-center">
				<h1 className="text-3xl sm:text-4xl text-[#FE3E01] font-bold mb-4">
					Our Journey, Our Passion
				</h1>
				<p className="text-[#1e1e1e] font-medium text-base sm:text-lg leading-relaxed">
					At Dvents, we believe every event tells a story. Our journey started
					with a mission to transform ordinary gatherings into extraordinary
					experiences. From corporate conferences to weddings and product
					launches — we've brought visions to life with creativity, passion, and
					precision.
				</p>
			</div>

			{/* Team / Culture Section */}
			<div className="mb-12 mt-16">
				<h2 className="text-2xl font-bold text-center text-[#FE3E01] mb-8">
					Meet Our Culture
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
					<img
						src="/our-story-team-image-1.png"
						alt="Team Culture 1"
						className="w-full h-[250px] object-cover rounded-lg shadow"
					/>
					<img
						src="/our-story-team-image-2.png"
						alt="Team Culture 2"
						className="w-full h-[250px] object-cover rounded-lg shadow"
					/>
					<img
						src="/our-story-team-image-3.png"
						alt="Team Culture 3"
						className="w-full h-[250px] object-cover rounded-lg shadow"
					/>
					<img
						src="/careers-2.png"
						alt="Team Culture 4"
						className="w-full h-[250px] object-cover rounded-lg shadow"
					/>
				</div>
			</div>

			{/* Closing Message */}
			<div className="max-w-[95%] mx-auto text-center">
				<p className="text-[#1e1e1e] font-medium text-base md:text-lg lg:text-lg">
					With over a decade of experience in curating exceptional events,
					Dvents has grown into more than just an event management company — we
					are a passionate team of storytellers, dream builders, and
					detail-driven planners. From intimate celebrations to grand corporate
					galas, we bring your vision to life with creativity, precision, and
					heart. Your journey is our canvas, and every event we design is a
					masterpiece waiting to unfold. Let's create unforgettable memories —
					together.
				</p>
			</div>
		</div>
	);
};

export default OurStory;
