import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <section className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8  mx-auto mt-20 flex justify-center items-center max-w-4xl">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Animation Section */}
          <div className="">
            <Player
              autoplay
              loop
              src="Login.json"
              style={{ height: "300px", width: "300px" }}
            />
          </div>

          {/* Login Form Section */}
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Login to Your Account
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-300"
                  placeholder="you@example.com"
                />
              </div>
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
                    className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm focus:border-indigo-600 focus:ring focus:ring-indigo-300"
                  />
                  <span
                    className="absolute top-1/2 right-3  -translate-y-1/2 text-black cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
              >
                Login
              </button>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
                You don't have an account?{" "}
                <a
                  href="/register"
                  className="text-indigo-600 hover:underline dark:text-indigo-400"
                >
                  Signup
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
