import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [roomData, setRoomData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) {
      setError("Invalid ID");
      return;
    }

    fetch(`https://assignment-10-server-side-five-ivory.vercel.app/roommatefinde/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Data not found");
        }
        return res.json();
      })
      .then((data) => {
        setRoomData(data);
      })
      .catch(() => {
        setError("Data load failed or not found.");
      });
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!roomData) return <p className="text-center">Loading...</p>;

  return (
    <div className="max-w-5xl mx-auto my-10 p-4 sm:p-6 md:p-10 bg-white rounded-xl shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        {/* Image */}
        <img
          src={roomData.image}
          alt={roomData.title}
          className="w-full h-64 object-cover rounded-lg"
        />

        {/* Info */}
        <div className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{roomData.title}</h2>
          <p className="text-gray-600 text-sm md:text-base">{roomData.description}</p>
          <div className="text-gray-700">
            <p><span className="font-semibold"> Location:</span> {roomData.location}</p>
            <p><span className="font-semibold"> Rent:</span> ৳{roomData.rent} / month</p>
            <p><span className="font-semibold"> Contact:</span> {roomData.contact}</p>
          </div>
          <button className="mt-4 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition duration-300">
            Contact Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
