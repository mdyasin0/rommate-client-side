import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MyListings = () => {
  const { user, loading } = useContext(AuthContext);
  const [myListings, setMyListings] = useState([]);
  const navigate = useNavigate();

  // fetch data by email
  useEffect(() => {
    if (user?.email) {
      fetch("http://localhost:3000/roommatefinde")
        .then((res) => res.json())
        .then((data) => {
          const userListings = data.filter(
            (item) => item.userEmail === user.email
          );
          setMyListings(userListings);
        });
    }
  }, [user]);

  // delete handler
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
        fetch(`http://localhost:3000/roommatefinde/${id}`, {
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
    <div className="p-5">
      <h2 className="text-2xl font-bold mb-4">My Roommate Listings</h2>
      <div className="overflow-x-auto">
        <table className="table w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>Title</th>
              <th>Location</th>
              <th>Rent</th>
              <th>Room Type</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {myListings.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.location}</td>
                <td>{item.rent} BDT</td>
                <td>{item.roomType}</td>
                <td className="flex gap-2">
                  <button
                    onClick={() => navigate(`/update/${item._id}`)}
                    className="btn btn-sm btn-warning"
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {myListings.length === 0 && (
          <p className="mt-4 text-center text-gray-500">No listings found.</p>
        )}
      </div>
    </div>
  );
};

export default MyListings;
