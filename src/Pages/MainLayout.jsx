import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const MainLayout = () => {
    return (
        <div className="px-4 py-3 lg:py-0 lg:px-0">
            <Navbar></Navbar>
            <h1>I am Main Layout Upper Outlet</h1>
            <Outlet></Outlet>
            <h1>I am Main Layout Lower Outlet</h1>
        </div>
    );
};

export default MainLayout;