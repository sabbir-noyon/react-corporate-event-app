import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider";

const Navbar = () => {
    
    const { user, logOut } = useContext(AuthContext);

    console.log(user);

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
                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-2xl text-[#FE3E01] font-semibold underline":""}>


                            
                            
                        
                            Home
                        </NavLink>
                    </li>

                    <li className="text-2xl font-medium text-[#0B0B0B]">
                        <NavLink
                            to="/login"

                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-2xl text-[#FE3E01] font-semibold underline":""}>


                            
                        
                            Login
                        </NavLink>
                    </li>

                    <li className="text-2xl font-medium text-[#0B0B0B]">
                        <NavLink
                            to="/register"

                            className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-2xl text-[#FE3E01] font-semibold underline":""}>


                            
                        
                            Register
                        </NavLink>
                    </li>

                    {user && (
                        <>
                            <li className="text-2xl font-medium text-[#0B0B0B]">
                                <NavLink
                                    to="/booking"

                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-2xl text-[#FE3E01] font-semibold underline":""}>


                                    
                                    
                                
                                    Booking
                                </NavLink>
                            </li>
                            <li className="text-2xl font-medium text-[#0B0B0B]">
                                <NavLink
                                    to="/faqs"

                                    className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-2xl text-[#FE3E01] font-semibold underline":""}>


                                    
                                    
                                
                                    FAQs
                                </NavLink>
                            </li>
                        </>
                    )}

                    <div className=" mt-4 lg:mt-0 lg:ml-4 lg:flex">
                        
                            <div className="flex w-auto rounded-full lg:mb-0 mb-4 mt-1 mr-2  ml-[-52px] md:ml-[-52px]  lg:-ml-0">
                               {user && <img src={user.photoURL?user.photoURL: "/user.png"}  alt="User Avatar" className="border w-10 lg:w-12 rounded-full"/>}
                               {user && <p className="ml-2 lg:mt-0 mt-1  " >{user.displayName}</p>}

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
