import React from "react";

const PrivacyPolicy = () => {
	return (
		<div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 mt-10 mb-20">
			<h1 className="text-3xl text-center text-[#FE3E01] font-bold mb-6">
				Privacy Policy
			</h1>

			<p className="mb-4 text-[#1e1e1e] font-medium">
				At Dvents, we are committed to protecting your personal information and
				your right to privacy. This Privacy Policy describes how we collect,
				use, and protect your information when you use our website.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-8 mb-2">
				1. Information We Collect
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				We may collect personal information such as your name, email address,
				phone number, and any other details you provide voluntarily when you
				contact us or fill out a form on our site.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-8 mb-2">
				2. How We Use Your Information
			</h2>
			<ul className="list-disc pl-5 mb-4 space-y-1">
				<li className="text-[#1e1e1e] font-medium">
					To respond to your inquiries and provide customer support
				</li>
				<li className="text-[#1e1e1e] font-medium">
					To improve our website and services
				</li>
				<li className="text-[#1e1e1e] font-medium">
					To send you promotional content, only if you opted in
				</li>
				<li className="text-[#1e1e1e] font-medium">
					To comply with legal obligations
				</li>
			</ul>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-8 mb-2">
				3. Cookies and Tracking
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				We may use cookies and similar technologies to enhance your browsing
				experience. These help us understand user behavior and improve our
				services. You can choose to disable cookies through your browser
				settings.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-8 mb-2">
				4. Data Sharing
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				We do not sell, rent, or share your personal data with third parties
				except as required by law or with your consent.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-8 mb-2">
				5. Data Security
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				We take appropriate security measures to protect your information.
				However, no method of transmission over the Internet is 100% secure.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-8 mb-2">
				6. Your Rights
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				You have the right to access, correct, or delete your personal
				information. To make such requests, please contact us.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-8 mb-2">
				7. Changes to This Policy
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				We may update this Privacy Policy from time to time. Changes will be
				posted on this page with an updated revision date.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-8 mb-2">
				8. Contact Us
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				If you have any questions about this Privacy Policy, please contact us
				via the{" "}
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

export default PrivacyPolicy;
