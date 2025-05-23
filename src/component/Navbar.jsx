import { Link, NavLink } from "react-router-dom"; 
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useContext, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    logout()
      .then(() => {
         toast.success("User logged out successfully");
      })
      .catch((error) => {
        toast.error("Logout error:", error);
      });
  };

  if (loading) {
    return (
      <div className="bg-[#FFFFFF] text-[#111827] py-5 shadow-2xl px-5 sticky top-0 z-20 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] text-[#111827] py-5 shadow-2xl px-5 sticky top-0 z-20">
      <nav className="flex items-center justify-between flex-wrap max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0 mr-6">
          <h1 className="text-3xl font-bold">
            <span>Roomie</span>
            <span className="text-emerald-500">
              <Typewriter
                words={["Match"]}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={200}
                deleteSpeed={100}
                delaySpeed={5000}
              />
            </span>
          </h1>
        </div>

        {/* Hamburger button for mobile */}
        <div className="block lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center px-3 py-2 border rounded text-[#111827] border-gray-400 hover:text-emerald-500 hover:border-emerald-500"
            aria-label="Toggle menu"
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              ) : (
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              )}
            </svg>
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          {/* Left side links */}
          <ul className="text-sm lg:flex-grow lg:flex lg:gap-7">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `block mt-4 lg:inline-block lg:mt-0 font-medium border-b-2 ${
                    isActive ? "border-blue-500" : "border-transparent"
                  } hover:border-blue-500`
                }
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/FindRoommateForm"
                className={({ isActive }) =>
                  `block mt-4 lg:inline-block lg:mt-0 font-medium border-b-2 ${
                    isActive ? "border-blue-500" : "border-transparent"
                  } hover:border-blue-500`
                }
                onClick={() => setMenuOpen(false)}
              >
                Add to Find Roommate
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/BrowseListings"
                className={({ isActive }) =>
                  `block mt-4 lg:inline-block lg:mt-0 font-medium border-b-2 ${
                    isActive ? "border-blue-500" : "border-transparent"
                  } hover:border-blue-500`
                }
                onClick={() => setMenuOpen(false)}
              >
                Browse Listing
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MyListings"
                className={({ isActive }) =>
                  `block mt-4 lg:inline-block lg:mt-0 font-medium border-b-2 ${
                    isActive ? "border-blue-500" : "border-transparent"
                  } hover:border-blue-500`
                }
                onClick={() => setMenuOpen(false)}
              >
                My Listings
              </NavLink>
            </li>
          </ul>

          {/* Right side user/login */}
          <ul className="lg:flex lg:items-center lg:ml-6">
            {user ? (
              <>
                <li
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="block mt-4 lg:inline-block lg:mt-0 bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-500 cursor-pointer text-center"
                >
                  Log out
                </li>
                <li className="mt-4 lg:mt-0 lg:ml-4 flex justify-center">
                  <img
                    data-tooltip-id="user-tooltip"
                    data-tooltip-content={user.displayName || "User"}
                    className="w-10 h-10 rounded-full border border-indigo-500 cursor-pointer"
                    src={
                      user.photoURL ||
                      "https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
                    }
                    alt="user"
                  />
                  <Tooltip id="user-tooltip" place="bottom" />
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/login"
                    onClick={() => setMenuOpen(false)}
                    className="block mt-4 lg:inline-block lg:mt-0 bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-500 cursor-pointer text-center"
                  >
                    Login
                  </Link>
                </li>
                <li className="lg:ml-4">
                  <Link
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="block mt-4 lg:inline-block lg:mt-0 bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-500 cursor-pointer text-center"
                  >
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
