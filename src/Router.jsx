import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./Pages/MainLayout";
import Error404 from "./Pages/Error404";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import EachCard from "./EachCard";
import PrivateRoute from "./Pages/PrivateRoute";
import Booking from "./Pages/Booking";
import Faqs from "./Pages/Faqs";
import Portfolio from "./Pages/Portfolio";
import OurStory from "./Pages/OurStory";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CookiePolicy from "./Pages/CookiePolicy";
import ResumeForm from "./Pages/ResumeForm";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout></MainLayout>,
		errorElement: <Error404></Error404>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
				loader: () => fetch("/api.json"),
			},

			{
				path: "/login",
				element: <Login></Login>,
			},

			{
				path: "/register",
				element: <Register></Register>,
			},

			{
				path: "/booking",
				element: (
					<PrivateRoute>
						<Booking></Booking>
					</PrivateRoute>
				),
			},

			{
				path: "/faqs",
				element: (
					<PrivateRoute>
						<Faqs></Faqs>
					</PrivateRoute>
				),
			},

			{
				path: "/services-data/:id",
				element: (
					<PrivateRoute>
						<EachCard></EachCard>
					</PrivateRoute>
				),
				loader: () => fetch("/api.json"),
			},

			{
				path: "/portfolio",
				element: <Portfolio></Portfolio>,
			},

			{
				path: "/our-story",
				element: <OurStory></OurStory>,
			},

			{
				path: "/careers",
				element: <Careers></Careers>,
			},

			{
				path: "/contact",
				element: (
					<PrivateRoute>
						<Contact></Contact>
					</PrivateRoute>
				),
			},

			{
				path: "/terms-and-conditions",
				element: <TermsAndConditions></TermsAndConditions>,
			},

			{
				path: "/privacy-policy",
				element: <PrivacyPolicy></PrivacyPolicy>,
			},

			{
				path: "/cookie-policy",
				element: <CookiePolicy></CookiePolicy>,
			},

			{
				path: "/resume-form",
				element: (
					<PrivateRoute>
						<ResumeForm></ResumeForm>
					</PrivateRoute>
				),
			},
		],
	},
]);

export default router;
