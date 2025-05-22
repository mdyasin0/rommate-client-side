import { useEffect, useState } from "react";
import { Link } from "react-router";

const BrowseListings = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/roommatefinde") // or local JSON
      .then(res => res.json())
      .then(data => setListings(data));
  }, []);

  return (
    <section className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Browse Listings</h1>
      <div className="overflow-x-auto">
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
    </section>
  );
};

export default BrowseListings;
