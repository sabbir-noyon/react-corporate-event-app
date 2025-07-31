import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ResumeForm = () => {
	const formRef = useRef();
	const [statusMessage, setStatusMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);
		setStatusMessage("");

		emailjs
			.sendForm(
				"service_8hpiug7", // Resume service ID
				"template_4vqsn5o", // Resume template ID
				formRef.current,
				"8f5kDkCYtRTDXBwVj" // Public key
			)
			.then(
				(result) => {
					setStatusMessage("✅ Your resume has been sent successfully!");
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
		<div className="container mt-28 mb-36 md:mt-28 md:mb-36 lg:mt-[115px] lg:mb-[145px] mx-auto p-6">
			<h2 className="text-[#FE3E01] lg:mt-6 mt-4 lg:mb-10 mb-8 text-center text-2xl md:text-[31px] lg:text-[33px] font-poppins font-semibold">
				Send Us Your Resume
			</h2>
			<form
				ref={formRef}
				onSubmit={sendEmail}
				className="max-w-md mx-auto space-y-4"
			>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-semibold"
						htmlFor="applicant_name"
					>
						Full Name
					</label>
					<input
						type="text"
						name="applicant_name"
						required
						placeholder="Your Full Name"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-semibold"
						htmlFor="applicant_email"
					>
						Email
					</label>
					<input
						type="email"
						name="applicant_email"
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
						htmlFor="resume_link"
					>
						Resume Link (Google Drive / Dropbox / etc.)
					</label>
					<input
						type="url"
						name="resume_link"
						required
						placeholder="Paste your resume link here"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					/>
				</div>
				<div className="mb-4">
					<label
						className="block text-gray-700 font-semibold"
						htmlFor="message"
					>
						Cover Letter / Additional Info
					</label>
					<textarea
						name="message"
						rows="5"
						placeholder="Write a short message if you'd like..."
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
					></textarea>
				</div>
				<div className="text-center">
					<button
						type="submit"
						disabled={loading}
						className="w-full py-2 px-4 bg-[#FE3E01] text-white text-base md:text-lg lg:text-xl font-semibold rounded-lg hover:bg-[#c24222] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#FE3E01]"
					>
						{loading ? "Sending..." : "Submit Resume"}
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

export default ResumeForm;
