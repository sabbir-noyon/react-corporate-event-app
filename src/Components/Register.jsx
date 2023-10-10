import { useContext } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import { AuthContext } from "../AuthProvider";

const Register = () => {

  const {createUser} = useContext(AuthContext);





  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");

    console.log(name,email,password);

    // Password Validation
    if (password.length < 6) {
      swal("Unsuccessful", "Password Should Be At Least 6 Characters Long.", "error");
    } else if (!/[A-Z]/.test(password)) {
      swal("Unsuccessful", "Password Should Contain At Least One Capital Letter.", "error");
    } else if (!/[\W_]/.test(password)) {
      swal("Unsuccessful", "Password Should Contain At Least One Special Character.", "error");
    } else {
      // Registration Success
      swal("Congratulations!", "Registration Successful", "success");
      // You can add code to register the user here
    }

    //create user

    createUser(email,password)
    .then(result => {
      console.log(result.user)
    })

    .catch(error => {
      console.error(error)
    })

    
    
    
    
    



  };




  return (
    <div className="flex flex-col justify-center items-center lg:mt-40">
      <h1 className="text-[#FE3E01] lg:mt-6 mt-4 lg:mb-7 mb-4 text-center text-3xl lg:text-5xl font-poppins font-semibold">
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
            Register
          </button>
        </div>
      </form>
      <p className="lg:mt-4 mt-3 text-xl font-medium">
        Already have an account?
        <Link className="text-[#853dd6] font-semibold text-xl" to="/login">
          {" "}
          Login{" "}
        </Link>
      </p>
    </div>
  );
};

export default Register;
