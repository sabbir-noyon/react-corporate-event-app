import { NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleSignOut = () => {
		logOut().then().catch();
	};

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setIsMenuOpen(false);
	};

	return (
		<nav className="flex flex-col lg:flex-row lg:justify-between items-center px-4 lg:px-24 py-6 lg:py-8 bg-white shadow-md">
			{/* Logo and Menu Icon */}
			<div className="flex items-center justify-between w-full lg:w-auto">
				<NavLink to="/" onClick={closeMenu}>
					<div className="flex items-center justify-center w-full">
						<img src="/logo.png" className="w-28 md:w-32 lg:w-36" alt="Logo" />
					</div>
				</NavLink>

				<div className="lg:hidden flex items-center">
					<button
						onClick={toggleMenu}
						className="text-3xl text-[#FE3E01] focus:outline-none"
					>
						{isMenuOpen ? <HiX /> : <HiOutlineMenu />}
					</button>
				</div>
			</div>

			{/* Menu Items */}
			<ul
				className={`flex flex-col lg:flex-row gap-4 lg:gap-10 items-center mt-4 lg:mt-0 w-full lg:w-auto ${
					isMenuOpen ? "block" : "hidden"
				} lg:flex`}
			>
				<li className="text-lg lg:text-xl font-medium text-[#0B0B0B]">
					<NavLink
						to="/"
						onClick={closeMenu}
						className={({ isActive }) =>
							isActive ? "text-[#FE3E01] font-semibold underline" : ""
						}
					>
						Home
					</NavLink>
				</li>

				{!user && (
					<>
						<li className="text-lg lg:text-xl font-medium text-[#0B0B0B]">
							<NavLink
								to="/login"
								onClick={closeMenu}
								className={({ isActive }) =>
									isActive ? "text-[#FE3E01] font-semibold underline" : ""
								}
							>
								Login
							</NavLink>
						</li>

						<li className="text-lg lg:text-xl font-medium text-[#0B0B0B]">
							<NavLink
								to="/register"
								onClick={closeMenu}
								className={({ isActive }) =>
									isActive ? "text-[#FE3E01] font-semibold underline" : ""
								}
							>
								Register
							</NavLink>
						</li>
					</>
				)}

				{user && (
					<>
						<li className="text-lg lg:text-xl font-medium text-[#0B0B0B]">
							<NavLink
								to="/booking"
								onClick={closeMenu}
								className={({ isActive }) =>
									isActive ? "text-[#FE3E01] font-semibold underline" : ""
								}
							>
								Booking
							</NavLink>
						</li>

						<li className="text-lg lg:text-xl font-medium text-[#0B0B0B]">
							<NavLink
								to="/faqs"
								onClick={closeMenu}
								className={({ isActive }) =>
									isActive ? "text-[#FE3E01] font-semibold underline" : ""
								}
							>
								FAQs
							</NavLink>
						</li>
					</>
				)}

				{/* Right Side User Info or Login Button */}
				<div className="flex items-center mt-4 lg:mt-0 w-full lg:w-auto justify-between">
					{user ? (
						<>
							<img
								src={user.photoURL ? user.photoURL : "/user.png"}
								onError={(e) => {
									e.target.onerror = null;
									e.target.src = "/user.png";
								}}
								alt="User Avatar"
								className="custom-class-for-user-image border w-10 lg:w-12 rounded-full lg:ml-7 mr-2"
							/>
							<p className="custom-class-for-user-name text-base lg:text-lg font-medium mr-6 max-w-[180px] lg:max-w-[200px] truncate">
								{user.displayName || "User"}
							</p>
							<button
								onClick={handleSignOut}
								className="custom-class-for-sign-out bg-[#FE3E01] hover:bg-[#e43f0c] transition-colors duration-300 text-white text-base lg:text-lg font-medium px-4 py-2 rounded-md"
							>
								Sign Out
							</button>
						</>
					) : (
						<button className="custom-class-for-join-now bg-[#FE3E01] hover:bg-[#e43f0c] transition-colors duration-300 text-white text-base lg:text-lg font-medium px-4 py-2 rounded-md w-full lg:w-auto">
							<NavLink to="/login" onClick={closeMenu}>
								Join Now
							</NavLink>
						</button>
					)}
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;
