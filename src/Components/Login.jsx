import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import swal from "sweetalert";

const Login = () => {
	const { signIn, signInWithGoogle } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [error, setError] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleGoogleLogin = () => {
		signInWithGoogle();
		navigate(location?.state ? location.state : "/");
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const email = form.get("email");
		const password = form.get("password");

		try {
			await signIn(email, password);
			swal({
				title: "Login Successful!",
				text: "You have logged in successfully",
				icon: "success",
				timer: 3000,
				button: true,
			});
			navigate(location?.state ? location.state : "/");
		} catch (error) {
			console.error(error);
			setError("An error occurred while logging in");

			let errorMessage = "Please check your email and password.";

			if (error.code === "auth/user-not-found") {
				errorMessage = "No user found with this email.";
			} else if (error.code === "auth/wrong-password") {
				errorMessage = "Incorrect password. Try again.";
			} else if (error.code === "auth/invalid-email") {
				errorMessage = "Invalid email format.";
			} else if (error.code === "auth/too-many-requests") {
				errorMessage = "Too many attempts. Please try again later.";
			}

			swal("Invalid Login Credentials", errorMessage, "error");
		}
	};

	return (
		<div className="flex flex-col justify-center items-center mt-32 mb-32 md:mb-32 lg:mb-40">
			<h1 className="text-[#FE3E01] lg:mt-6 mt-4 lg:mb-7 mb-4 text-center text-2xl lg:text-[33px] font-poppins font-semibold">
				Please Login
			</h1>

			<form onSubmit={handleLogin} className="w-full max-w-md">
				<div className="mb-4">
					<label htmlFor="email" className="block text-gray-700 font-semibold">
						Email
					</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Email"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
						required
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="password"
						className="block text-gray-700 font-semibold"
					>
						Password
					</label>
					<input
						type={showPassword ? "text" : "password"}
						id="password"
						name="password"
						placeholder="Password"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
						required
					/>
					<div className="mt-4 flex items-center text-sm">
						<input
							type="checkbox"
							id="showPassword"
							checked={showPassword}
							onChange={() => setShowPassword(!showPassword)}
							className="mr-2 lg:w-4 lg:h-4"
						/>
						<label
							htmlFor="showPassword"
							className="text-gray-600 select-none font-medium text-base"
						>
							Show password
						</label>
					</div>
				</div>

				<div className="mt-6">
					<button className="w-full py-2 px-4 bg-[#FE3E01] text-white text-base lg:text-lg font-semibold rounded-lg hover:bg-[#c24222] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#FE3E01]">
						Login
					</button>
				</div>
			</form>

			<p className="lg:mt-4 mt-3 text-base lg:text-lg font-medium">
				Don't have an account?
				<Link
					className="text-[#853dd6] font-bold text-lg lg:text-xl"
					to="/register"
				>
					{" "}
					Register Now{" "}
				</Link>
			</p>

			<div className="lg:mt-12 mt-10">
				<button
					onClick={handleGoogleLogin}
					className="w-full py-2 px-6 bg-[#FE3E01] text-white text-base lg:text-lg font-semibold rounded-lg hover:bg-[#c24222] transition-colors duration-300 focus:outline-none focus:ring focus:ring-[#FE3E01]"
				>
					Login with Google
				</button>
			</div>
		</div>
	);
};

export default Login;
