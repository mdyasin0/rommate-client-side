import React, { useContext, useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate, useLocation } from "react-router";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { login, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        toast.success("Login success:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Login error:", error.message);
        toast.error("Invalid email or password!");
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
     toast.success("Google login success:", result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error("Google login error:", error.message);
        toast.warn("Google login failed!");
      });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg px-4 py-8 mx-4 sm:mx-auto mt-10 sm:mt-20 flex justify-center items-center max-w-6xl">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Animation Section */}
          <div className="hidden md:flex justify-center">
            <Player
              autoplay
              loop
              src="Login.json"
              style={{ height: "300px", width: "300px" }}
            />
          </div>

          {/* Login Form Section */}
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Login to Your Account
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-300"
                  placeholder="you@example.com"
                />
              </div>

              {/* Password Input */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="••••••••"
                    className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-emerald-500 focus:ring focus:ring-emerald-300"
                  />
                  <span
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-600 dark:text-gray-300 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Login
              </button>
            </form>

            {/* Google Login Button */}
            <div className="mt-6 text-center">
              <button
                onClick={handleGoogleLogin}
                className="inline-flex items-center justify-center w-full gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>
            </div>

            {/* Register Redirect */}
            <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
              You don't have an account?{" "}
              <a
                href="/register"
                className="text-emerald-600 hover:underline dark:text-emerald-400"
              >
                Signup
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
