import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const { id } = useParams();
  const [roomData, setRoomData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    console.log("ID from URL params:", id);
    if (!id) {
      setError("Invalid ID");
      return;
    }

    fetch(`http://localhost:3000/roommatefinde/${id}`)
      .then((res) => {
        console.log("Fetch response status:", res.status);
        if (!res.ok) {
          throw new Error("Data not found");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched data:", data);
        setRoomData(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
        setError("❌ Data load failed or not found.");
      });
  }, [id]);

  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (!roomData) return <p className="text-center">Loading...</p>;

  return <div className="max-w-4xl mx-auto my-10 p-6 border rounded"></div>;
};

export default Details;
