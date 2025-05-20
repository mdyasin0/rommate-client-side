import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#FFFFFF] text-[#111827] py-2 px-5">
      <nav className="flex items-center justify-between ">
        <div>
          <h1 className="text-indigo-600  text-2xl  font-bold  ">
            RoomieMatch
          </h1>
        </div>
        <ul className="flex items-center gap-7 ">
          <li className="hover:border-blue-500 border-b-2 font-medium border-transparent cursor-pointer">
            Home
          </li>
          <li className="hover:border-blue-500 border-b-2 font-medium border-transparent cursor-pointer">
            Add to Find Roommate
          </li>
          <li className="hover:border-blue-500 border-b-2 font-medium border-transparent cursor-pointer">
            Browse Listing
          </li>
          <li className="hover:border-blue-500 border-b-2 font-medium border-transparent cursor-pointer">
            My Listings
          </li>
        </ul>
        <ul className="flex items-center font-medium  gap-7">
          <li className="bg-[#4338CA] py-2 px-3 rounded-lg text-white hover:text-black hover:bg-[#cbc9f3] transition-all duration-[500ms] cursor-pointer">
            Login
          </li>
          <li className="bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-[500ms] cursor-pointer">
            Signup
          </li>
          <li className="bg-[#4338CA] hover:text-black py-2 px-3 rounded-lg text-white hover:bg-[#cbc9f3] transition-all duration-[500ms] cursor-pointer">
            Log out
          </li>
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
