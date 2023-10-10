import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
    
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div>
           <nav className="flex flex-col lg:flex-row lg:justify-between items-center py-8 px-4 lg:py-12 lg:px-24">
                <Logo />
                <ul className="flex flex-col lg:flex-row gap-2 lg:gap-10">
                    <li className="text-2xl font-medium text-[#0B0B0B]">
                        <NavLink
                            to="/"
                            activeClassName="text-[#FE3E01] font-semibold underline"
                            className="text-2xl"
                        >
                            Home
                        </NavLink>
                    </li>

                    <li className="text-2xl font-medium text-[#0B0B0B]">
                        <NavLink
                            to="/login"
                            activeClassName="text-[#FE3E01] font-semibold underline"
                            className="text-2xl"
                        >
                            Login
                        </NavLink>
                    </li>

                    <li className="text-2xl font-medium text-[#0B0B0B]">
                        <NavLink
                            to="/register"
                            activeClassName="text-[#FE3E01] font-semibold underline"
                            className="text-2xl"
                        >
                            Register
                        </NavLink>
                    </li>

                    {user && (
                        <>
                            <li className="text-2xl font-medium text-[#0B0B0B]">
                                <NavLink
                                    to="/booking"
                                    activeClassName="text-[#FE3E01] font-semibold underline"
                                    className="text-2xl"
                                >
                                    Booking
                                </NavLink>
                            </li>
                            <li className="text-2xl font-medium text-[#0B0B0B]">
                                <NavLink
                                    to="/faqs"
                                    activeClassName="text-[#FE3E01] font-semibold underline"
                                    className="text-2xl"
                                >
                                    FAQs
                                </NavLink>
                            </li>
                        </>
                    )}

                    <div className="flex mt-4 lg:mt-0 lg:ml-4">
                        
                            <div className="w-10 rounded-full  mt-1 mr-2  ml-[-52px] md:ml-[-52px] lg:-ml-0">
                               {user && <img src="/user.png" alt="User Avatar" />} 
                            </div>
                        
                        
                        {user ? (
                            <button
                                onClick={handleSignOut}
                                type="submit"
                                className="font-sourceSans w-24 rounded-md text-lg font-semibold text-white h-12 hover:bg-[#e43f0c] bg-[#FE3E01]"
                            >
                                Sign Out
                            </button>
                        ) : (
                            <NavLink to="/login">
                                <button
                                    onClick={() => {}}
                                    type="submit"
                                    className="font-sourceSans w-24 rounded-md text-lg font-semibold text-white h-12 hover:bg-[#e43f0c] bg-[#FE3E01]"
                                >
                                    Login
                                </button>
                            </NavLink>
                        )}
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
