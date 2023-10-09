
const Login = () => {
    return (
        <div>
            <h1 className=" text-[#FE3E01] lg:mt-6 mt-4 lg:mb-7 mb-4 text-center text-5xl font-poppins font-semibold">Please Login</h1>

            <form >
            <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>

            </form>
        </div>
    );
};

export default Login;