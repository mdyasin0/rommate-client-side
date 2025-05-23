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
import { toast } from "react-toastify";

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

    fetch("https://assignment-10-server-side-five-ivory.vercel.app/roommatefinde", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fullData),
    })
      .then((res) => res.json())
      .then((data) => {
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
        toast.error(err);
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
    <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl mt-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-indigo-600 dark:text-indigo-400">
        Find Roommate
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Fields Start */}
        {[
          { label: "Title", name: "title", icon: <FaInfoCircle />, placeholder: "Looking for a roommate in NYC" },
          { label: "Location", name: "location", icon: <FaMapMarkerAlt /> },
          { label: "Rent Amount", name: "rent", type: "number", icon: <FaDollarSign /> },
          { label: "Room Type", name: "roomType", icon: <FaHome />, placeholder: "Single, Shared, etc." },
          { label: "Lifestyle Preferences", name: "lifestyle", icon: <FaInfoCircle />, placeholder: "Pets, Smoking, etc." },
          { label: "Image URL", name: "image", icon: <MdInsertPhoto />, placeholder: "Enter image URL" },
          { label: "Contact Info", name: "contact", icon: <FaPhone />, placeholder: "Phone or social link" },
          { label: "Availability", name: "availability", icon: <FaCalendarCheck />, placeholder: "Available / Not Available" },
        ].map(({ label, name, icon, placeholder, type = "text" }) => (
          <div key={name}>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">{label}</label>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 dark:bg-slate-800">
              <span className="mr-2 text-gray-500">{icon}</span>
              <input
                type={type}
                name={name}
                onChange={handleChange}
                value={formData[name]}
                required
                className="w-full bg-transparent focus:outline-none"
                placeholder={placeholder}
              />
            </div>
          </div>
        ))}

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Description</label>
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

        {/* User Info (Read-only) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">User Name</label>
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
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-200">Email</label>
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition duration-300 ease-in-out"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
