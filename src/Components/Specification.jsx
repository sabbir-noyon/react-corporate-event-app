const Specification = () => {
	return (
		<div>
			<div className="hero min-h-screen bg-[#222222]">
				<div className="hero-content custom-hero-4k flex-col lg:flex-row-reverse">
					<img
						data-aos="fade-down"
						data-aos-easing="linear"
						data-aos-duration="1500"
						src="/right_aside.png"
						className="specification-img lg:ml-10 mt-20 lg:mt-0 lg:w-[700px] lg:h-[700px] rounded-xl shadow-2xl"
					/>

					<div
						data-aos="fade-up"
						data-aos-duration="3000"
						className="specification-text-container lg:mt-20"
					>
						<h1 className="mt-12 lg:mt-0 text-center md:text-center lg:text-left text-[#FE3E01] text-3xl md:text-4xl lg:text-5xl font-bold font-sourceSans">
							WHO IS CORPORATE
						</h1>
						<h1 className="specification-sec-heading mt-2 lg:mt-6 text-center lg:text-justify text-white text-3xl md:text-4xl lg:text-5xl font-bold font-sourceSans">
							EVENT PLANNING FOR?
						</h1>

						{/* daisyui tick mark */}
						<div className="flex">
							<input
								type="checkbox"
								checked="checked"
								className="checkbox mt-10 bg-white border-white rounded-md"
							/>
							<p className="ml-3 md:ml-4 lg:ml-3 mt-2 lg:mt-3 py-6 text-sm md:text-base lg:text-base text-white font-poppins">
								Event-Specific Specialists: Plan events for your company and
								just need a helping hand? We’re here for you!
							</p>
						</div>

						<div className="flex -mt-3 lg:-mt-6">
							<input
								type="checkbox"
								checked="checked"
								className="checkbox mt-10 bg-white border-white rounded-md"
							/>
							<p className="ml-3 md:ml-4 lg:ml-3 mt-2 lg:mt-3 py-6 text-sm md:text-base lg:text-base text-white font-poppins">
								Large Companies: Wow your employees, your boss, your clients,
								and yourself with creative events.
							</p>
						</div>

						<div className="flex -mt-3 lg:-mt-6">
							<input
								type="checkbox"
								checked="checked"
								className="checkbox mt-10 bg-white border-white rounded-md"
							/>
							<p className="ml-3 md:ml-4 lg:ml-3 mt-2 lg:mt-3 py-6 text-sm md:text-base lg:text-base text-white font-poppins">
								Admins & Marketing Specialists: You have a lot on our plate
								already. Let us reduce your workload.
							</p>
						</div>

						<div className="lg:mt-8 text-center lg:mr-10">
							<button
								type="button"
								onClick={() => window.open("/booking", "_blank")}
								className="h-12 md:h-14 lg:h-14 w-[132px] md:w-[145px] lg:w-[166px] rounded-lg font-poppins text-base md:text-lg font-semibold hover:bg-[#ce3608] transition-colors duration-300 bg-[#FE3E01] text-white lg:text-lg btn-primary mb-10 md:mb-16 mt-5 md:mt-5 lg:mt-0"
							>
								Get Started
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Specification;
