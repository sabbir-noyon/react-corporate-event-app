import React, { useState } from "react";

const portfolioData = [
	{
		id: 1,
		title: "Annual Corporate Summit",
		description:
			"Successfully executed a 3-day annual summit for over 500 executives, including branding, logistics, and keynote sessions.",
		image: "/project-1.png",
	},
	{
		id: 2,
		title: "Product Launch Gala",
		description:
			"Orchestrated a high-impact product launch for a tech firm with stage design, AV setup, and live streaming.",
		image: "/project-2.png",
	},
	{
		id: 3,
		title: "Employee Engagement Carnival",
		description:
			"Fun-filled event with team-building activities, food courts, and performance zones to boost morale.",
		image: "/project-3.png",
	},
	{
		id: 4,
		title: "Luxury Client Appreciation Dinner",
		description:
			"A premium dining experience for high-value clients with custom decor, entertainment, and gift hampers.",
		image: "/project-4.png",
	},
	{
		id: 5,
		title: "Hybrid Training Conference",
		description:
			"Arranged a dual-format event with on-site sessions and remote accessibility for 300+ employees worldwide.",
		image: "/project-5.png",
	},
	{
		id: 6,
		title: "New Year Kickoff Event",
		description:
			"Vibrant celebration to welcome the year with DJ, countdown, interactive games, and corporate giveaways.",
		image: "/project-6.png",
	},
	{
		id: 7,
		title: "CSR Initiative Activation",
		description:
			"Organized a public campaign event to promote social awareness and community volunteering.",
		image: "/project-7.png",
	},
	{
		id: 8,
		title: "Leadership Workshop Retreat",
		description:
			"Weekend leadership workshop at an offsite venue with curated sessions and executive lodging.",
		image: "/project-8.png",
	},
	{
		id: 9,
		title: "Internal Awards Night",
		description:
			"Managed end-to-end internal recognition ceremony including trophies, scripts, and celebrity MC.",
		image: "/project-9.png",
	},
];

const Portfolio = () => {
	const [visibleProjects, setVisibleProjects] = useState(3);

	const handleLoadMore = () => {
		setVisibleProjects((prev) => prev + 3);
	};

	return (
		<div className="max-w-6xl mx-auto px-4 py-12 mt-8 mb-12">
			<h2 className="text-3xl lg:text-4xl font-bold text-center text-[#FE3E01] mb-4">
				Our Recent Events
			</h2>
			<p className="mt-3 text-[#1e1e1e] font-medium max-w-none mx-auto mb-12 text-center text-base lg:text-[17px]">
				A glimpse into the events we’ve crafted — corporate, creative, and
				unforgettable.
			</p>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{portfolioData.slice(0, visibleProjects).map((item) => (
					<div
						key={item.id}
						className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
					>
						<img
							src={item.image}
							alt={item.title}
							className="w-full h-56 object-cover"
						/>
						<div className="p-5">
							<h3 className="text-xl text-center font-bold mb-2 text-[#FE3E01]">
								{item.title}
							</h3>
							<p className="text-[#1e1e1e] text-center text-base font-medium">
								{item.description}
							</p>
						</div>
					</div>
				))}
			</div>

			{visibleProjects < portfolioData.length && (
				<div className="mt-12 text-center">
					<button
						onClick={handleLoadMore}
						className="bg-[#FE3E01] hover:bg-[#c93103] text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
					>
						Load More
					</button>
				</div>
			)}
		</div>
	);
};

export default Portfolio;
