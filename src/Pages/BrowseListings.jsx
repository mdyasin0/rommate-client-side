import { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-side-five-ivory.vercel.app/roommatefinde")
      .then((res) => res.json())
      .then((data) => setListings(data));
  }, []);

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center md:text-left">Browse Listings</h1>

      {/* Desktop/Table View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table-auto w-full text-left border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Title</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Rent</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Posted By</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {listings.map((post) => (
              <tr key={post.id} className="border-t">
                <td className="px-4 py-2">{post.title}</td>
                <td className="px-4 py-2">{post.location}</td>
                <td className="px-4 py-2">{post.rent}</td>
                <td className="px-4 py-2">{post.status}</td>
                <td className="px-4 py-2">{post.postBy}</td>
                <td className="px-4 py-2">
                  <Link
                    to={`/room-details/${post.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
                  >
                    See More
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {listings.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow-sm bg-white">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p><span className="font-medium">Location:</span> {post.location}</p>
            <p><span className="font-medium">Rent:</span> {post.rent}</p>
            <p><span className="font-medium">Status:</span> {post.status}</p>
            <p><span className="font-medium">Posted By:</span> {post.postBy}</p>
            <div className="mt-2">
              <Link
                to={`/room-details/${post.id}`}
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
              >
                See More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BrowseListings;
