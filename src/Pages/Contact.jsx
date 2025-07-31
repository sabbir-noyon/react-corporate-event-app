import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef();
	const [statusMessage, setStatusMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		setStatusMessage("");

		emailjs
			.sendForm(
				"service_1n20x5k", // Service ID for Contact/Support
				"template_jyz3na9", // Template ID for Contact/Support
				formRef.current,
				"oqWlv9CRDLjwQDzRD" // Public Key
			)
			.then(
				() => {
					setStatusMessage("✅ Your message has been sent successfully!");
					formRef.current.reset();
				},
				(error) => {
					setStatusMessage("❌ Something went wrong. Please try again.");
					console.error(error.text);
				}
			)
			.finally(() => setLoading(false));
	};

	return (
		<div className="container mt-28 mb-32 md:mt-28 md:mb-32 lg:mt-[120px] lg:mb-[140px] mx-auto p-6">
			<h2 className="text-[#FE3E01] lg:mt-6 mt-4 lg:mb-10 mb-8 text-center text-2xl md:text-3xl lg:text-[33px] font-poppins font-semibold">
				Contact Us
			</h2>

			<form
				ref={formRef}
				onSubmit={sendEmail}
				className="max-w-md mx-auto space-y-4"
			>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold" htmlFor="name">
						Your Name
					</label>
					<input
						type="text"
						name="name"
						required
						placeholder="Enter your name"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					/>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 font-semibold" htmlFor="email">
						Email Address
					</label>
					<input
						type="email"
						name="email"
						required
						placeholder="Your email"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 font-semibold" htmlFor="email">
						Phone Number (Optional)
					</label>
					<input
						type="text"
						name="phone"
						placeholder="Your Phone Number"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					/>
				</div>

				<div className="mb-4">
					<label
						className="block text-gray-700 font-semibold"
						htmlFor="subject"
					>
						Subject
					</label>
					<input
						type="text"
						name="subject"
						required
						placeholder="Reason for contacting"
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
						rows="5"
						required
						placeholder="Write your message..."
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					></textarea>
				</div>

				<div className="text-center">
					<button
						type="submit"
						disabled={loading}
						className="w-full py-2 px-4 bg-[#FE3E01] text-white text-base md:text-lg lg:text-xl font-semibold rounded-lg hover:bg-[#c24222] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#FE3E01]"
					>
						{loading ? "Sending..." : "Send Message"}
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

export default Contact;
