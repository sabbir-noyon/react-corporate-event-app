import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { FaUserCircle, FaGoogle } from 'react-icons/fa';
import {  FcGoogle } from 'react-icons/fc';



const Navbar = () => {
    return (
        <div>
           <nav className="flex flex-col  lg:flex-row lg:justify-center items-center py-8 px-10 lg:py-12 lg:px-24 ">
                <Logo></Logo>
                <ul className="flex gap-10">
                    <li className="text-2xl font-medium text-[#0B0B0B]">
                    <NavLink to="/"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl text-[#FE3E01] font-semibold underline":""}>Home
                    </NavLink>
                    </li>

                    <li className="text-2xl font-medium text-[#0B0B0B]" >
                    <NavLink to="/login"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl text-[#FE3E01] font-semibold underline":""}>Login
                    </NavLink>
                    </li>

                    <li className="text-2xl font-medium text-[#0B0B0B]" >
                    <NavLink to="/register"
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-2xl text-[#FE3E01] font-semibold underline":""}>Register
                    </NavLink>
                    </li>

                    <div className="lg:ml-52 lg:text-right flex">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img  src="/user.png" />
                            </div>
                        </label>
                        <NavLink to="/login">
                            <button onClick={{}} type="submit" className=" font-sourceSans w-24 rounded-md text-lg font-semibold text-white h-12 hover:bg-[#e43f0c] bg-[#FE3E01]">Login</button>
                        </NavLink>
                    </div>



                     <div className="flex">
                        <h2 className="text-base lg:mt-2 text-[#853dd6] font-bold font-poppins">Login With</h2>
                        <NavLink to="/login">
                            {/* <button onClick={{}} type="submit" className=" font-sourceSans w-24 rounded-md text-lg font-semibold text-white h-12 hover:bg-[#e43f0c] bg-[#FE3E01]">Login</button> */}
                            <button className=" rounded-lg lg:-ml-4 w-24 h-14 pt-2 pb-4 btn hover:bg-[#6b20c0] bg-[#853dd6] text-white font-sourceSans font-medium btn-outline ">
                                <FcGoogle></FcGoogle>
  
                                    Google
                            </button>
                        </NavLink>
                    </div> 



                    
                    
                </ul>
                
            </nav>

            
            
           
            
        </div>
    );
};

export default Navbar;