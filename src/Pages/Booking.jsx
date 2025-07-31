import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Booking = () => {
	const formRef = useRef();
	const [statusMessage, setStatusMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		setStatusMessage("");

		emailjs
			.sendForm(
				"service_ginbvpp", // Service ID
				"template_n4h9aul", // Template ID
				formRef.current,
				"YramWbzUsI5gDyyVN" // Public key
			)
			.then(
				(result) => {
					setStatusMessage("✅ Your booking has been submitted successfully!");
					formRef.current.reset();
				},
				(error) => {
					setStatusMessage("❌ Something went wrong. Please try again.");
					console.error(error.text);
				}
			)
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="container mt-28 mb-28 md:mt-28 md:mb-28 lg:mt-[120px] lg:mb-[130px] mx-auto p-6">
			<h2 className="text-[#FE3E01] lg:mt-6 mt-4 lg:mb-10 mb-8 text-center text-2xl lg:text-[33px] font-poppins font-semibold">
				Book an Event
			</h2>
			<form
				ref={formRef}
				onSubmit={sendEmail}
				className="max-w-md mx-auto space-y-4"
			>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-semibold"
						htmlFor="full_name"
					>
						Full Name
					</label>
					<input
						type="text"
						name="full_name"
						required
						placeholder="Your Full Name"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold" htmlFor="email">
						Email
					</label>
					<input
						type="email"
						name="email"
						required
						placeholder="Your Email"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold" htmlFor="phone">
						Phone Number
					</label>
					<input
						type="tel"
						name="phone"
						required
						placeholder="Your Phone Number"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-semibold"
						htmlFor="message"
					>
						Message
					</label>
					<textarea
						name="message"
						required
						rows="5"
						placeholder="Type your message here..."
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					></textarea>
				</div>
				<div className="text-center">
					<button
						type="submit"
						disabled={loading}
						className="w-full py-2 px-4 bg-[#FE3E01] text-white text-lg lg:text-xl font-semibold rounded-lg hover:bg-[#c24222] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#FE3E01]"
					>
						{loading ? "Sending..." : "Submit"}
					</button>
				</div>

				{statusMessage && (
					<p className="text-center font-medium text-base lg:text-lg mt-4">
						{statusMessage}
					</p>
				)}
			</form>
		</div>
	);
};

export default Booking;
