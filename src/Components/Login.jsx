import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider";
import swal from "sweetalert";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { signInWithGoogle } = useContext(AuthContext);
  
  const handleGoogleLogin = () => {
    signInWithGoogle();
    navigate(location?.state ? location.state : "/");
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    try {
      await signIn(email, password);

      swal("Login Successful!", "You have logged in successfully", "success");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.error(error);

      setError("An error occurred while logging in");
      swal("Invalid Login Credentials", error.message, "error");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-8 md:mt-8 mb-16 md:mb-16 lg:mb-0 lg:mt-40">
      <h1 className="text-[#FE3E01] lg:mt-6 mt-4 lg:mb-7 mb-4 text-center text-3xl lg:text-5xl font-poppins font-semibold">
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
          <label htmlFor="password" className="block text-gray-700 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-[#FE3E01]"
            required
          />
          <p className="text-sm text-[#FE3E01] mt-1">
            {/* <a href="#" className="hover:underline">
                Forgot password?
              </a> */}
          </p>
        </div>
        
        <div className="mt-6">
          <button className="w-full py-2 px-4 bg-[#FE3E01] text-white text-xl font-semibold rounded-lg hover:bg-[#FF5C33] focus:outline-none focus:ring focus:ring-[#FE3E01]">
            Login
          </button>
        </div>
      </form>
      <p className="lg:mt-4 mt-3 text-xl font-medium">
        Don't have an account?
        <Link className="text-[#853dd6] font-bold text-xl" to="/register">
          {" "}
          Register Now{" "}
        </Link>
      </p>

      <div className="lg:mt-32 mt-10">
        <button onClick={handleGoogleLogin} className="w-full py-2 px-6 bg-[#FE3E01] text-white text-xl font-semibold rounded-lg hover:bg-[#FF5C33] focus:outline-none focus:ring focus:ring-[#FE3E01]">
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
