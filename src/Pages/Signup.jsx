import React, { useState, useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, setUser, googleSignIn } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const email = form.email.value;
    const password = form.password.value;

    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);

    if (!hasUppercase || !hasLowercase) {
      toast.warn("Password must contain at least one uppercase and one lowercase letter.");
      return;
    }

    signup(email, password)
      .then((result) => {
        const user = result.user;

        updateProfile(user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            const updatedUser = {
              ...user,
              displayName: name,
              photoURL: image,
            };
            setUser(updatedUser);
            toast.success("Signup successful!");
          })
          .catch((error) => {
            toast.error("Profile update error:", error.message);
          });
      })
      .catch((error) => {
        toast.error("Signup error:", error.message);
        toast.error(error.message);
      });
  };

  // Google SignIn হ্যান্ডলার
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Google Sign-in successful!");
        
      })
      .catch((error) => {
        toast.error("Google Sign-in error:", error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 p-4">
      <section className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Animation Section */}
        <div className="flex justify-center">
          <Player
            autoplay
            loop
            src="Signup.json"
            style={{ height: "300px", width: "300px", maxWidth: "100%" }}
          />
        </div>

        {/* Register Form Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center md:text-left">
            Register now
          </h2>
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Image URL
              </label>
              <input
                type="text"
                name="image"
                required
                placeholder="https://......"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email address
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                />
                <span
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-700 dark:text-gray-300 cursor-pointer select-none"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-md transition-colors shadow-md"
            >
              Sign-up
            </button>
          </form>

          {/* Google Sign-up Button */}
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors shadow-md flex items-center justify-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="24px"
              height="24px"
            >
              <path fill="#4285F4" d="M24 9.5c3.54 0 6.69 1.22 9.18 3.23l6.86-6.86C34.57 2.96 29.54 1 24 1 14.68 1 6.49 6.85 2.6 14.69l7.99 6.21C12.35 14.45 17.72 9.5 24 9.5z"/>
              <path fill="#34A853" d="M46.5 24c0-1.64-.15-3.23-.44-4.76H24v9.04h12.58c-.54 2.91-2.18 5.37-4.65 7.04l7.16 5.55C43.62 34.95 46.5 29.9 46.5 24z"/>
              <path fill="#FBBC05" d="M10.59 28.9c-.44-1.31-.69-2.7-.69-4.1s.25-2.79.69-4.1l-7.99-6.21C.93 19.64 0 21.74 0 24s.93 4.36 2.6 6.41l7.99-6.21z"/>
              <path fill="#EA4335" d="M24 46c5.54 0 10.57-1.83 14.21-4.96l-7.16-5.55c-2.04 1.37-4.65 2.19-7.05 2.19-6.28 0-11.65-4.95-12.81-11.33l-7.99 6.21C6.49 41.15 14.68 47 24 47z"/>
              <path fill="none" d="M0 0h48v48H0z"/>
            </svg>
            Sign up with Google
          </button>

          <p className="text-center text-sm text-gray-600 dark:text-gray-300 mt-4">
            You already have an account?{" "}
            <a
              href="/login"
              className="text-indigo-600 hover:underline dark:text-indigo-400"
            >
              Login
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signup;
