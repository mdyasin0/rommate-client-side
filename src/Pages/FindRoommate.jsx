import { useState, useContext } from "react";
import swal from "sweetalert";
import {
  FaMapMarkerAlt,
  FaDollarSign,
  FaHome,
  FaInfoCircle,
  FaUserAlt,
  FaEnvelope,
  FaCalendarCheck,
  FaPhone,
} from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import { MdInsertPhoto } from "react-icons/md";

export default function FindRoommateForm() {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    rent: "",
    roomType: "",
    lifestyle: "",
    description: "",
    contact: "",
    availability: "",
    image: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fullData = {
      ...formData,
      userName: user?.displayName || "",
      userEmail: user?.email || "",
    };

    console.log("Submitted Data:", fullData);
    fetch("http://localhost:3000/roommatefinde", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after adding data to the data base", data);
        swal("Success!", "Roommate post submitted successfully!", "success");
       
        setFormData({
          title: "",
          location: "",
          rent: "",
          roomType: "",
          lifestyle: "",
          description: "",
          contact: "",
          availability: "",
          image: "",
        });
      })
      .catch((err) => {
        console.error(err);
        swal("Error!", "Failed to submit post.", "error");
      });
  };

  if (!user) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-300 mt-10">
        Loading user info...
      </p>
    );
  }

  return (
    <section className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl mt-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600 dark:text-indigo-400">
        Find Roommate
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Title
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
            <FaInfoCircle className="mr-2 text-gray-500" />
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={formData.title}
              required
              className="w-full bg-transparent focus:outline-none"
              placeholder="Looking for a roommate in NYC"
            />
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Location
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
            <FaMapMarkerAlt className="mr-2 text-gray-500" />
            <input
              type="text"
              name="location"
              onChange={handleChange}
              value={formData.location}
              required
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Rent */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Rent Amount
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
            <FaDollarSign className="mr-2 text-gray-500" />
            <input
              type="number"
              name="rent"
              onChange={handleChange}
              value={formData.rent}
              required
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Room Type */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Room Type
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
            <FaHome className="mr-2 text-gray-500" />
            <input
              type="text"
              name="roomType"
              onChange={handleChange}
              value={formData.roomType}
              required
              className="w-full bg-transparent focus:outline-none"
              placeholder="Single, Shared, etc."
            />
          </div>
        </div>

        {/* Lifestyle */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Lifestyle Preferences
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
            <FaInfoCircle className="mr-2 text-gray-500" />
            <input
              type="text"
              name="lifestyle"
              onChange={handleChange}
              value={formData.lifestyle}
              required
              className="w-full bg-transparent focus:outline-none"
              placeholder="Pets, Smoking, Night Owl, etc."
            />
          </div>
        </div>

        {/* Image URL */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Image URL
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
            <MdInsertPhoto className="mr-2 text-gray-500" />
            <input
              type="text"
              name="image"
              onChange={handleChange}
              value={formData.image}
              required
              className="w-full bg-transparent focus:outline-none"
              placeholder="Enter the room photo URL"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Description
          </label>
          <textarea
            name="description"
            onChange={handleChange}
            value={formData.description}
            required
            className="w-full border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800 focus:outline-none"
            rows="4"
            placeholder="Tell us more about the roommate preferences..."
          />
        </div>

        {/* Contact */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Contact Info
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
            <FaPhone className="mr-2 text-gray-500" />
            <input
              type="text"
              name="contact"
              onChange={handleChange}
              value={formData.contact}
              required
              className="w-full bg-transparent focus:outline-none"
              placeholder="Phone number or social link"
            />
          </div>
        </div>

        {/* Availability */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
            Availability
          </label>
          <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
            <FaCalendarCheck className="mr-2 text-gray-500" />
            <input
              type="text"
              name="availability"
              onChange={handleChange}
              value={formData.availability}
              required
              className="w-full bg-transparent focus:outline-none"
              placeholder="Available / Not Available"
            />
          </div>
        </div>

        {/* User Info (read only) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              User Name
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100 dark:bg-slate-700">
              <FaUserAlt className="mr-2 text-gray-500" />
              <input
                type="text"
                value={user?.displayName || ""}
                readOnly
                className="w-full bg-transparent focus:outline-none cursor-not-allowed"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">
              Email
            </label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100 dark:bg-slate-700">
              <FaEnvelope className="mr-2 text-gray-500" />
              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className="w-full bg-transparent focus:outline-none cursor-not-allowed"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
