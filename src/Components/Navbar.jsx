import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from 'react-icons/fa';
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

  return (
    <nav className="flex flex-col lg:flex-row lg:justify-between items-center px-4 lg:px-24 py-6 lg:py-8 bg-white shadow-md">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="flex items-center">
          <img src="/logo.png" className="w-28 md:w-32 lg:w-36" alt="Logo" />
        </div>

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-3xl text-[#FE3E01] focus:outline-none">
            {isMenuOpen ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>

      <ul className={`flex flex-col lg:flex-row gap-4 lg:gap-10 items-center mt-4 lg:mt-0 w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:flex`}>
        <li className="text-xl lg:text-xl font-medium text-[#0B0B0B]">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-[#FE3E01] font-semibold underline" : "")}>Home</NavLink>
        </li>

        <li className="text-xl lg:text-xl font-medium text-[#0B0B0B]">
          <NavLink to="/login" className={({ isActive }) => (isActive ? "text-[#FE3E01] font-semibold underline" : "")}>Login</NavLink>
        </li>

        <li className="text-xl lg:text-xl font-medium text-[#0B0B0B]">
          <NavLink to="/register" className={({ isActive }) => (isActive ? "text-[#FE3E01] font-semibold underline" : "")}>Register</NavLink>
        </li>

        {user && (
          <>
            <li className="text-xl lg:text-xl font-medium text-[#0B0B0B]">
              <NavLink to="/booking" className={({ isActive }) => (isActive ? "text-[#FE3E01] font-semibold underline" : "")}>Booking</NavLink>
            </li>

            <li className="text-xl lg:text-xl font-medium text-[#0B0B0B]">
              <NavLink to="/faqs" className={({ isActive }) => (isActive ? "text-[#FE3E01] font-semibold underline" : "")}>FAQs</NavLink>
            </li>
          </>
        )}

        {user && (
          <div className="flex items-center mt-4 lg:mt-0 w-full lg:w-auto justify-between">
            <img src={user.photoURL ? user.photoURL : "/user.png"} alt="User Avatar" className="border w-10 lg:w-12 rounded-full mr-2" />
            <p className="text-base lg:text-lg font-medium mr-4">{user.displayName}</p>
            <button onClick={handleSignOut} className="bg-[#FE3E01] hover:bg-[#e43f0c] text-white text-base lg:text-lg font-medium px-4 py-2 rounded-md">Sign Out</button>
          </div>
        )}

        {!user && (
          <div className="flex items-center mt-4 lg:mt-0 w-full lg:w-auto justify-between">
            <button className="bg-[#FE3E01] hover:bg-[#e43f0c] text-white text-base lg:text-lg font-medium px-4 py-2 rounded-md w-full lg:w-auto">
              <NavLink to="/login">Login</NavLink>
            </button>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
