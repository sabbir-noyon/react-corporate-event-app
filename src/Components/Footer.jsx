import React from "react";
import { Link } from "react-router-dom";
const currentYear = new Date().getFullYear();

const Footer = () => {
	// Mapping for links and their routes
	const topLinks = [
		{ label: "Our Story", route: "/our-story" },
		{ label: "Careers", route: "/careers" },
		{ label: "Contact Us", route: "/contact" },
	];

	const bottomLinks = [
		{ label: "Terms and Conditions", route: "/terms-and-conditions" },
		{ label: "Privacy Policy", route: "/privacy-policy" },
		{ label: "Cookie Policy", route: "/cookie-policy" },
	];

	const openInNewTab = (path) => {
		window.open(path, "_blank");
	};

	return (
		<footer className="bg-[#222222] pt-10 pb-5 md:pb-10 lg:pb-10 md:px-12 lg:px-14">
			<div className="container mx-auto">
				<div className="flex flex-col items-center md:flex-row md:justify-between">
					<Link to="/">
						<div
							data-aos="zoom-out-up"
							className="flex items-center mb-6 md:mb-0"
						>
							<img
								src="/logo-dark-mode.png"
								alt="Dvents Logo"
								className="w-40 md:w-40 lg:w-44"
							/>
						</div>
					</Link>

					<ul
						data-aos="zoom-out-up"
						className="flex flex-wrap justify-center md:flex-row mt-0"
					>
						{topLinks.map((item, idx) => (
							<li key={idx} className="mr-6 mb-2 last:mr-0">
								<button
									onClick={() => openInNewTab(item.route)}
									className="text-white hover:text-red-600 transition-colors duration-300"
								>
									{item.label}
								</button>
							</li>
						))}
					</ul>
				</div>

				<div
					data-aos="zoom-out-up"
					className="flex justify-center mt-3 md:mt-6 lg:mt-6"
				>
					<ul className="flex items-center space-x-6">
						{["facebook", "twitter", "youtube", "linkedin"].map(
							(platform, idx) => (
								<li key={idx}>
									<a
										href="javascript:void(0)"
										className="text-white hover:text-red-600 transition-colors duration-300"
									>
										<i
											className={`fab fa-${platform} text-xl md:text-2xl lg:text-2xl`}
										></i>
									</a>
								</li>
							)
						)}
					</ul>
				</div>

				<ul
					data-aos="zoom-out-up"
					className="flex flex-wrap justify-center mt-3 md:mt-6 lg:mt-6"
				>
					{bottomLinks.map((item, idx) => (
						<li key={idx} className="mr-6 mb-2 last:mr-0">
							<button
								onClick={() => openInNewTab(item.route)}
								className="text-white hover:text-red-600 text-sm lg:text-base transition-colors duration-300"
							>
								{item.label}
							</button>
						</li>
					))}
				</ul>

				<p
					data-aos="zoom-out-up"
					className="text-center text-sm md:text-base lg:text-base  mt-3 md:mt-6 lg:mt-6 text-white text-opacity-60 pb-10 md:pb-0 lg:pb-0"
				>
					&copy; {currentYear} Dvents. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
