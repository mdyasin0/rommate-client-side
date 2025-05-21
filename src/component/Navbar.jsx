import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

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
    // ইউজার স্টেট চেক হতে না পারা পর্যন্ত লোডিং দেখাবে
    return (
      <div className="bg-[#FFFFFF] text-[#111827] py-5 shadow-2xl px-5 sticky top-0 z-20 flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="bg-[#FFFFFF] text-[#111827] py-5 shadow-2xl px-5 sticky top-0 z-20">
      <nav className="flex items-center justify-between ">
        <div>
          <h1 className="text-indigo-600  text-2xl  font-bold  ">
            RoomieMatch
          </h1>
        </div>
        <ul className="flex items-center gap-7 ">
          <Link
            to="/home"
            className="hover:border-blue-500 border-b-2 font-medium border-transparent cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="/FindRoommateForm"
            className="hover:border-blue-500 border-b-2 font-medium border-transparent cursor-pointer"
          >
            Add to Find Roommate
          </Link>
          <Link
            to="/BrowseListings"
            className="hover:border-blue-500 border-b-2 font-medium border-transparent cursor-pointer"
          >
            Browse Listing
          </Link>
          <Link
            to="/MyListings"
            className="hover:border-blue-500 border-b-2 font-medium border-transparent cursor-pointer"
          >
            My Listings
          </Link>
        </ul>
        <ul className="flex items-center font-medium  gap-7">
          {user ? (
            <li
              onClick={handleLogout} // যদি log out কাজ করতে চাও
              className="bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-[500ms] cursor-pointer"
            >
              Log out
            </li>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-[500ms] cursor-pointer mr-2"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-[500ms] cursor-pointer"
              >
                Signup
              </Link>
            </>
          )}

          <li className="">
            <img
              className="w-10"
              src="https://static-00.iconduck.com/assets.00/user-icon-1024x1024-dtzturco.png"
              alt="user photo"
            />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
