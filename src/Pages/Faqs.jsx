import React, { useState } from "react";

const Faqs = () => {
	const [activeIndex, setActiveIndex] = useState(null);

	const faqData = [
		{
			question: "What is your company all about?",
			answer:
				"Our company specializes in corporate event planning and management services.",
		},
		{
			question: "How can I request a quote for an event?",
			answer:
				"You can request a quote by filling out the contact form on our website.",
		},
		{
			question: "Do you provide custom event themes?",
			answer:
				"Yes, we offer a range of custom event themes tailored to your needs.",
		},
		{
			question: "What types of events do you organize?",
			answer:
				"We organize a wide range of corporate events, including conferences, seminars, and team-building activities.",
		},
		{
			question: "Can you handle large-scale events?",
			answer: "Absolutely! We have experience in managing events of all sizes.",
		},
		{
			question: "How do I get in touch with your team?",
			answer:
				"You can contact us through our website or by phone. Our contact information is available on the Contact page.",
		},
	];

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<div className="max-w-3xl mx-auto px-4 lg:pb-24 mt-28 mb-32 md:mt-28 md:mb-32 lg:mt-[100px] lg:mb-[100px]">
			<h2 className="text-[#FE3E01] lg:mt-32 mt-24 lg:mb-16 mb-10 text-center text-[26px] lg:text-[33px] font-poppins font-semibold">
				Frequently Asked Questions
			</h2>

			<div className="space-y-3 lg:-mt-6">
				{faqData.map((faq, index) => (
					<div
						key={index}
						className="bg-gradient-to-r from-[#333] via-[#555] to-[#333] rounded-xl shadow-md text-white py-3 pl-3"
					>
						<button
							onClick={() => toggleAccordion(index)}
							className="w-full flex justify-between items-center p-4 focus:outline-none"
						>
							<span className="font-medium text-center md:text-center lg:text-left text-lg lg:text-xl">
								{faq.question}
							</span>
							<span className="text-white text-xl">
								{activeIndex === index ? "-" : "+"}
							</span>
						</button>

						{activeIndex === index && (
							<div className="p-4 border-t">
								<p className="text-white text-center md:text-left lg:text-left  text-lg lg:text-xl font-normal leading-relaxed">
									{faq.answer}
								</p>
							</div>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default Faqs;
