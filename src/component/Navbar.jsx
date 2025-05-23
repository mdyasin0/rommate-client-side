import { Link, NavLink } from "react-router-dom"; 
import { AuthContext } from "../Provider/AuthProvider";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useContext } from "react";
import { Typewriter } from "react-simple-typewriter";

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);

  const handleLogout = () => {
    logout()
      .then(() => {
        console.log("User logged out successfully");
      })
      .catch((error) => {
        console.error("Logout error:", error);
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
      <nav className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-center ">
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
        <ul className="flex items-center gap-7">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              `font-medium cursor-pointer border-b-2 ${
                isActive ? "border-blue-500" : "border-transparent"
              } hover:border-blue-500`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/FindRoommateForm"
            className={({ isActive }) =>
              `font-medium cursor-pointer border-b-2 ${
                isActive ? "border-blue-500" : "border-transparent"
              } hover:border-blue-500`
            }
          >
            Add to Find Roommate
          </NavLink>
          <NavLink
            to="/BrowseListings"
            className={({ isActive }) =>
              `font-medium cursor-pointer border-b-2 ${
                isActive ? "border-blue-500" : "border-transparent"
              } hover:border-blue-500`
            }
          >
            Browse Listing
          </NavLink>
          <NavLink
            to="/MyListings"
            className={({ isActive }) =>
              `font-medium cursor-pointer border-b-2 ${
                isActive ? "border-blue-500" : "border-transparent"
              } hover:border-blue-500`
            }
          >
            My Listings
          </NavLink>
        </ul>

        <ul className="flex items-center font-medium gap-5">
          {user ? (
            <>
              <li
                onClick={handleLogout}
                className="bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-500 cursor-pointer"
              >
                Log out
              </li>
              <li>
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
              <Link
                to="/login"
                className="bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-500 cursor-pointer"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-500 cursor-pointer"
              >
                Signup
              </Link>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
