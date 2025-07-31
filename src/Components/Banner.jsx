import { useState, useEffect, useRef } from "react";

const slides = [
	{
		id: 1,
		img: "/banner_1.png",
		title1: "WE PERSONALIZE YOUR",
		title2: "CORPORATE EVENTS",
		title1Color: "text-white",
		title2Color: "text-[#FE3E01]",
		overlayOpacity: "opacity-80",
	},
	{
		id: 2,
		img: "/banner_2.png",
		title1: "OUR SPECIAL LOUNGE",
		title2: "FOR BUSINESS PARTY",
		title1Color: "text-[#FE3E01]",
		title2Color: "text-white",
		overlayOpacity: "opacity-70",
	},
	{
		id: 3,
		img: "/banner_3.png",
		title1: "LUNCH AND DINNER",
		title2: "FOR BUSINESS MEETING",
		title1Color: "text-white",
		title2Color: "text-[#FE3E01]",
		overlayOpacity: "opacity-50",
	},
	{
		id: 4,
		img: "/banner_4.png",
		title1: "WE TAKE CARE YOUR",
		title2: "BUSINESS DEALS",
		title1Color: "text-[#FE3E01]",
		title2Color: "text-white",
		overlayOpacity: "opacity-80",
	},
];

const Banner = () => {
	const [currentSlide, setCurrentSlide] = useState(1);
	const timeoutRef = useRef(null);

	const clearTimer = () => {
		if (timeoutRef.current) clearInterval(timeoutRef.current);
	};

	const startAutoSlide = (delay = 6000) => {
		clearTimer();
		timeoutRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev === slides.length ? 1 : prev + 1));
		}, delay);
	};

	useEffect(() => {
		startAutoSlide();

		return () => clearTimer();
	}, []);

	const handleManualNav = (direction) => {
		clearTimer();

		setCurrentSlide((prev) => {
			if (direction === "prev") {
				return prev === 1 ? slides.length : prev - 1;
			} else {
				return prev === slides.length ? 1 : prev + 1;
			}
		});

		// Restart auto-slide after delay (1 second pause)
		setTimeout(() => {
			startAutoSlide();
		}, 1000);
	};

	return (
		<div className="relative w-full overflow-hidden h-[500px] sm:h-[700px] lg:h-[750px]">
			{slides.map((slide) => (
				<div
					key={slide.id}
					className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
						slide.id === currentSlide
							? "opacity-100 z-10"
							: "opacity-0 z-0 pointer-events-none"
					}`}
				>
					<img
						src={slide.img}
						alt={`Slide ${slide.id}`}
						className="w-full h-full object-cover"
					/>
					<div
						className={`absolute inset-0 bg-black ${slide.overlayOpacity}`}
					></div>

					<div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
						<h1
							data-aos="zoom-in"
							className={`custom-heading-1 font-sourceSans font-bold leading-snug
                text-3xl sm:text-4xl md:text-[55px] lg:text-7xl ${slide.title1Color}`}
						>
							{slide.title1}
						</h1>
						<h2
							data-aos="zoom-in"
							className={`custom-heading-2 mt-0 md:mt-4 lg:mt-4 font-sourceSans font-semibold leading-relaxed
                text-2xl sm:text-2xl md:text-4xl lg:text-5xl ${slide.title2Color}`}
						>
							{slide.title2}
						</h2>
					</div>
				</div>
			))}

			{/* Arrows */}
			<div className="absolute inset-y-0 left-4 right-4 flex items-center justify-between z-30">
				<button
					onClick={() => handleManualNav("prev")}
					className="custom-carousel-arrow btn btn-circle w-12 h-12 lg:w-14 lg:h-14 md:ml-2 lg:ml-12"
					aria-label="Previous Slide"
				>
					❮
				</button>
				<button
					onClick={() => handleManualNav("next")}
					className="custom-carousel-arrow btn btn-circle w-12 h-12 lg:w-14 lg:h-14 md:mr-2 lg:mr-12"
					aria-label="Next Slide"
				>
					❯
				</button>
			</div>
		</div>
	);
};

export default Banner;
