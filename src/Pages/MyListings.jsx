import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyListings = () => {
  const { user, loading } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      fetch("https://assignment-10-server-side-five-ivory.vercel.app/roommatefinde")
        .then((res) => res.json())
        .then((data) => {
          const userListings = data.filter(
            (item) => item.userEmail === user.email
          );
          setMyListings(userListings);
        });
    }
  }, [user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-10-server-side-five-ivory.vercel.app/roommatefinde/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setMyListings(myListings.filter((item) => item._id !== id));
              Swal.fire(
                "Deleted!",
                "Your listing has been deleted.",
                "success"
              );
            }
          });
      }
    });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">My Roommate Listings</h2>

      {/* Desktop & Tablet: Table */}
      <div className="hidden md:block overflow-x-auto border rounded">
        <table className="table w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">Title</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Location</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Rent</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Room Type</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myListings.map((item) => (
              <tr key={item._id} className="border border-gray-300 hover:bg-gray-50">
                <td className="border border-gray-300 px-4 py-2">{item.title}</td>
                <td className="border border-gray-300 px-4 py-2">{item.location}</td>
                <td className="border border-gray-300 px-4 py-2">{item.rent} BDT</td>
                <td className="border border-gray-300 px-4 py-2">{item.roomType}</td>
                <td className="border border-gray-300 px-4 py-2 flex gap-2">
                  <button
                    onClick={() => navigate(`/update/${item._id}`)}
                    className="btn btn-sm btn-warning"
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile: Card view */}
      <div className="md:hidden flex flex-col gap-4">
        {myListings.map((item) => (
          <div
            key={item._id}
            className="border rounded-lg p-4 shadow-sm bg-white"
          >
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Rent:</strong> {item.rent} BDT</p>
            <p><strong>Room Type:</strong> {item.roomType}</p>
            <div className="mt-3 flex gap-3">
              <button
                onClick={() => navigate(`/update/${item._id}`)}
                className="btn btn-sm btn-warning flex-1"
              >
                Update
              </button>
              <button
                onClick={() => handleDelete(item._id)}
                className="bg-red-500 text-white px-3 py-1 rounded flex-1 text-center hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {myListings.length === 0 && (
        <p className="mt-6 text-center text-gray-500">No listings found.</p>
      )}
    </div>
  );
};

export default MyListings;
