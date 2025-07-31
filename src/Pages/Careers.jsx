import React from "react";
import careersMain from "/careers-main.png";

const Careers = () => {
	return (
		<div className="pt-14 mb-6">
			{/* Header Section */}
			<div className="max-w-7xl mx-auto px-4 text-center">
				<h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#FE3E01] mb-4">
					Join the Dvents Team
				</h1>
				<p className="text-[17px] md:text-lg lg:text-lg text-[#1e1e1e] font-medium mb-6">
					At Dvents, we believe that meaningful events begin with passionate
					people. We're always on the lookout for talent that thrives on
					creativity, collaboration, and purpose.
				</p>
				<img
					src={careersMain}
					alt="Dvents Careers"
					className="w-full h-auto rounded-xl shadow-md mb-10 object-cover"
				/>
			</div>

			{/* Why Join Us Section */}
			<div className="bg-gray-50 py-14">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<h2 className="text-2xl md:text-3xl lg:text-3xl font-bold text-[#FE3E01] mb-4">
						Why Work With Us
					</h2>
					<p className="text-[#1e1e1e] font-medium text-md max-w-2xl mx-auto mb-10">
						We foster a people-first culture where ideas matter, diversity is
						celebrated, and every day brings new creative challenges. Here, your
						impact reaches far beyond the desk.
					</p>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
						{/* Card 1 */}
						<div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
							<h3 className="text-xl text-center font-bold text-[#FE3E01] mb-2">
								Purposeful Work
							</h3>
							<p className="text-[#1e1e1e] text-center font-medium text-sm">
								Be part of events that make a difference—social, cultural, and
								corporate experiences that matter.
							</p>
						</div>
						{/* Card 2 */}
						<div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
							<h3 className="text-xl text-center font-bold text-[#FE3E01] mb-2">
								Growth & Learning
							</h3>
							<p className="text-[#1e1e1e] text-center font-medium text-sm">
								Learn alongside a team of passionate professionals, with room
								for personal and professional growth.
							</p>
						</div>
						{/* Card 3 */}
						<div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
							<h3 className="text-xl text-center font-bold text-[#FE3E01] mb-2">
								Friendly Culture
							</h3>
							<p className="text-[#1e1e1e] text-center font-medium text-sm">
								A flat, transparent culture where collaboration beats hierarchy
								and everyone belongs.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Current Openings Section */}
			<div className="max-w-6xl mx-auto px-4 py-16">
				<h2 className="text-[28px] md:text-3xl lg:text-3xl font-bold text-[#FE3E01] text-center mb-6">
					Current Openings
				</h2>
				<p className="text-center text-[#1e1e1e] font-medium mb-10">
					We’re not actively hiring right now, but we're always interested in
					connecting with talented individuals.
				</p>

				<div className="text-center">
					<button
						type="button"
						onClick={() => window.open("/resume-form", "_blank")}
						className="py-[10px] px-4 bg-[#FE3E01] text-white text-base md:text-base lg:text-lg font-semibold rounded-lg hover:bg-[#c24222] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#FE3E01]"
					>
						Send Your Resume
					</button>
				</div>
			</div>
		</div>
	);
};

export default Careers;
