
import { Link } from "react-router-dom";

const Logo = () => {
    return (
        <div className="lg:w-6/12 mb-10 lg:mb-0">
            <Link to="/">
                <img src="/logo.png" className="cursor-pointer" alt="Logo" />
            </Link>
        </div>
    );
};

export default Logo;

