import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
           <nav className="flex flex-col lg:flex-row lg:justify-between items-center py-8 px-10 lg:py-12 lg:px-24 ">
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
                </ul>
            </nav>
            
           
            
        </div>
    );
};

export default Navbar;