import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider";

const Register = () => {
	const { createUser } = useContext(AuthContext);
	const location = useLocation();
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);

	const handleRegister = (e) => {
		e.preventDefault();
		const form = new FormData(e.currentTarget);
		const name = form.get("name");
		const email = form.get("email");
		const password = form.get("password");

		if (password.length < 6) {
			return swal(
				"Unsuccessful",
				"Password Should Be At Least 6 Characters Long.",
				"error"
			);
		}
		if (!/[A-Z]/.test(password)) {
			return swal(
				"Unsuccessful",
				"Password Should Contain At Least One Capital Letter.",
				"error"
			);
		}
		if (!/[\W_]/.test(password)) {
			return swal(
				"Unsuccessful",
				"Password Should Contain At Least One Special Character.",
				"error"
			);
		}

		createUser(name, email, password)
			.then((result) => {
				console.log(result.user);
				swal({
					title: "Congratulations!",
					text: "Registration Successful",
					icon: "success",
					timer: 3000,
					button: true,
				});
				navigate(location?.state ? location.state : "/");
			})
			.catch((error) => {
				console.error(error);

				let message = "Something went wrong. Please try again.";

				if (error.code === "auth/email-already-in-use") {
					message = "This email is already in use.";
				} else if (error.code === "auth/invalid-email") {
					message = "Please enter a valid email address.";
				} else if (error.code === "auth/weak-password") {
					message = "Password is too weak.";
				}

				swal("Registration Failed", message, "error");
			});
	};

	return (
		<div className="flex flex-col justify-center items-center mt-32 mb-32 md:mb-32 lg:mb-40">
			<h1 className="text-[#FE3E01] lg:mt-6 mt-4 lg:mb-7 mb-4 text-center text-2xl lg:text-[33px] font-poppins font-semibold">
				Register Now
			</h1>

			<form onSubmit={handleRegister} className="w-full max-w-md">
				<div className="mb-4">
					<label htmlFor="name" className="block text-gray-700 font-semibold">
						Your Name
					</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Your Name"
						className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
						required
					/>
				</div>
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
						Register
					</button>
				</div>
			</form>

			<p className="lg:mt-4 mt-3 text-base lg:text-lg font-medium">
				Already have an account?
				<Link
					className="text-[#853dd6] font-bold text-[18px] lg:text-[20px]"
					to="/login"
				>
					{" "}
					Login{" "}
				</Link>
			</p>
		</div>
	);
};

export default Register;
