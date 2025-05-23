import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Details */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <p className="flex items-center gap-2 mb-2 text-gray-400">
            <FaPhoneAlt /> +880 123 456 789
          </p>
          <p className="flex items-center gap-2 mb-2 text-gray-400">
            <FaEnvelope /> support@roomfinder.com
          </p>
          <p className="flex items-center gap-2 text-gray-400">
            <FaMapMarkerAlt /> Dhaka, Bangladesh
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Navigation</h3>
          <ul className="space-y-2">
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
            <li>
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
            </li>
          </ul>
        </div>

        {/* Terms & Conditions */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Legal</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/Terms" className="hover:text-indigo-500 transition-colors">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/Privacy" className="hover:text-indigo-500 transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/Refund" className="hover:text-indigo-500 transition-colors">
                Refund Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-500 transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-8">
        © {new Date().getFullYear()} RoomFinder. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
