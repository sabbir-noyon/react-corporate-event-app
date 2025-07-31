const OurPortfolio = () => {
	return (
		<div>
			<div className="our-portfolio hero bg-white">
				<div
					data-aos="flip-left"
					data-aos-easing="ease-out-cubic"
					data-aos-duration="2000"
					className="our-portfolio-content w-10/12 lg:my-0 mx-auto py-16 md:py-24 lg:py-36 lg:px-20 hero-content flex-col lg:flex-row"
				>
					<div className="our-portfolio-img lg:ml-20">
						<img
							src="/asset 22.png"
							className="lg:-ml-4 w-[200px] h-[100px] md:w-[250px] md:h-[110px] lg:w-[300px] lg:h-[160px] rounded-xl shadow-2xl"
						/>
						<img
							src="/asset 19.png"
							className="lg:-ml-3 w-[200px] h-[100px] md:w-[250px] md:h-[110px] lg:w-[300px] lg:h-[160px] rounded-xl shadow-2xl"
						/>
					</div>

					<div>
						<img
							src="/asset 21.png"
							className="lg:-ml-4 w-[200px] h-[100px] md:w-[250px] md:h-[110px] lg:w-[300px] lg:h-[160px] rounded-xl shadow-2xl"
						/>
						<img
							src="/asset 24.png"
							className="lg:-ml-3 w-[200px] h-[100px] md:w-[250px] md:h-[110px] lg:w-[300px] lg:h-[160px] rounded-xl shadow-2xl"
						/>
					</div>

					<div className="our-portfolio-text-container w-12/12 lg:w-6/12 lg:p-14 mt-10 lg:mt-0">
						<h1 className="our-portfolio-h1 text-[#FE3E01] text-2xl text-center md:text-center lg:text-left md:text-3xl lg:text-[40px] lg:leading-[45px] font-bold font-sourceSans">
							CHECK OUT OUR EVENT PLANNING SKILLS
						</h1>
						<p
							id="our-portfolio-paragraph"
							className="text-[#1e1e1e] text-center md:text-center lg:text-left py-6 font-poppins text-base md:text-[17px] lg:text-lg font-normal"
						>
							We have been providing Corporate and business management services
							with huge success. Our Clients are very familiar and well
							established. They trust us and our services.
						</p>
						<div className="text-center md:text-center lg:text-justify">
							<button
								type="button"
								onClick={() => window.open("/portfolio", "_blank")}
								className="h-12 md:h-14 lg:h-14 w-[132px] md:w-[145px] lg:w-[166px] rounded-lg font-poppins text-base md:text-lg font-semibold hover:bg-[#ce3608] transition-colors duration-300 bg-[#FE3E01] text-white lg:text-lg btn-primary"
							>
								Our Portfolio
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurPortfolio;
