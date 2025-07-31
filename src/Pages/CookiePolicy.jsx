import React from "react";

const CookiePolicy = () => {
	const handleContactClick = (e) => {
		e.preventDefault();
		window.open("/contact", "_blank");
	};

	return (
		<div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 mt-10 mb-16 md:mb-20 lg:mb-20">
			<h1 className="text-3xl text-center text-[#FE3E01] font-bold mb-6">
				Cookie Policy
			</h1>

			<p className="mb-4 text-[#1e1e1e] font-medium">
				This Cookie Policy explains how Dvents uses cookies and similar
				technologies when you visit our website.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				What are Cookies?
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				Cookies are small text files that are placed on your device to help the
				site provide a better user experience.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				How We Use Cookies
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">We use cookies to:</p>
			<ul className="list-disc list-inside mb-4">
				<li className="text-[#1e1e1e] font-medium">
					Understand how you interact with our website
				</li>
				<li className="text-[#1e1e1e] font-medium">
					Remember your preferences
				</li>
				<li className="text-[#1e1e1e] font-medium">
					Improve our services and user experience
				</li>
			</ul>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				Types of Cookies We Use
			</h2>
			<ul className="list-disc list-inside mb-4">
				<li className="text-[#1e1e1e] font-medium">
					<strong className="text-[#FE3E01]">Essential Cookies:</strong>{" "}
					Required for core functionality.
				</li>
				<li className="text-[#1e1e1e] font-medium">
					<strong className="text-[#FE3E01]">Analytics Cookies:</strong> Help us
					analyze how users interact with our site.
				</li>
				<li className="text-[#1e1e1e] font-medium">
					<strong className="text-[#FE3E01]">Preference Cookies:</strong>{" "}
					Remember your settings and preferences.
				</li>
			</ul>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-2">
				Managing Cookies
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				You can change your cookie settings in your browser at any time.
				However, disabling certain cookies may affect the functionality of the
				site.
			</p>

			<h2 className="text-xl text-[#FE3E01] font-bold mt-6 mb-4">
				Changes to This Policy
			</h2>
			<p className="mb-4 text-[#1e1e1e] font-medium">
				We may update this Cookie Policy from time to time. Please review it
				periodically for changes.
			</p>

			<p className="mb-4 text-[#1e1e1e] font-medium">
				If you have any questions about this Cookie Policy, please contact us
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

export default CookiePolicy;
