import React, { useState, useContext } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signup, setuser } = useContext(AuthContext);

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
      alert("Password must contain at least one uppercase and one lowercase letter.");
      return;
    }

    signup(email, password)
      .then((result) => {
        const user = result.user;

        // ✅ ইউজারের প্রোফাইল আপডেট
        updateProfile(user, {
          displayName: name,
          photoURL: image,
        })
          .then(() => {
            // ✅ প্রোফাইল আপডেট হয়ে গেলে কনটেক্সটে সেট করা
            const updatedUser = {
              ...user,
              displayName: name,
              photoURL: image,
            };
            setuser(updatedUser);
            alert("Signup successful!");
          })
          .catch((error) => {
            console.error("Profile update error:", error.message);
          });
      })
      .catch((error) => {
        console.error("Signup error:", error.message);
        alert(error.message);
      });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-700 rounded-2xl shadow-lg p-8 mx-auto mt-20 flex justify-center items-center max-w-4xl">
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Animation Section */}
          <div>
            <Player
              autoplay
              loop
              src="Signup.json"
              style={{ height: "300px", width: "300px" }}
            />
          </div>

          {/* Register Form Section */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6 text-center">
              Register now
            </h2>
            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Image URL
                </label>
                <input
                  type="text"
                  name="image"
                  required
                  placeholder="https://......"
                  className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="••••••••"
                    className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-gray-100 shadow-sm"
                  />
                  <span
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-black cursor-pointer"
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
                Sign-up
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
