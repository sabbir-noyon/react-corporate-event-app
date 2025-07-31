import React from "react";

const TermsAndConditions = () => {
	return (
		<div className="max-w-4xl mx-auto p-6 mt-10 mb-20 text-gray-800">
			<h1 className="text-3xl text-[#FE3E01] text-center font-bold mb-6">
				Terms and Conditions
			</h1>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				Welcome to Dvents. These terms and conditions outline the rules and
				regulations for the use of our website and services. By accessing this
				website, we assume you accept these terms and conditions in full. Do not
				continue to use Dvents' website if you do not accept all of the terms
				and conditions stated on this page.
			</p>
			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				1. Services
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				Dvents provides event planning and management services. All bookings and
				service engagements are subject to availability and confirmation.
			</p>
			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				2. User Responsibilities
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				You agree to use our website for lawful purposes only. You must not use
				it in a way that causes, or may cause, damage to the website or impair
				the availability or accessibility of Dvents.
			</p>
			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				3. Payments and Bookings
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				All bookings must be confirmed through our official communication
				channels. A deposit may be required to confirm certain services. Final
				payment terms will be communicated during the booking process.
			</p>
			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				4. Cancellations and Refunds
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				Cancellation requests must be submitted in writing. Refund eligibility
				depends on the notice period and service type. We reserve the right to
				deduct administrative charges where applicable.
			</p>
			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				5. Intellectual Property
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				All content on this website, including text, images, and branding, is
				the property of Dvents and may not be copied, reproduced, or used
				without permission.
			</p>
			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				6. Limitation of Liability
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				Dvents shall not be liable for any indirect or consequential loss or
				damage arising out of or in connection with the use of our services or
				website.
			</p>
			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				7. Changes to Terms
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				We reserve the right to update or change these terms at any time.
				Continued use of the site after any changes constitutes acceptance of
				the new terms.
			</p>
			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				8. Contact Us
			</h2>

			<p className="text-[#1e1e1e] font-medium">
				If you have any questions about these Terms and Conditions, please
				contact us via the{" "}
				<span
					onClick={() => window.open("/contact", "_blank")}
					className="text-blue-600 underline cursor-pointer"
				>
					Contact Us
				</span>{" "}
				page.
			</p>
		</div>
	);
};

export default TermsAndConditions;
