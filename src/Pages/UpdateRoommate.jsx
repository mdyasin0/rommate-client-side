import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const UpdateRoommate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://assignment-10-server-side-five-ivory.vercel.app/roommatefinde/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error(`Failed to fetch listing data (status: ${res.status})`);
                return res.json();
            })
            .then((data) => {
                setFormData(data);
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Fetch error:", error);
                Swal.fire("Error", error.message, "error");
                setLoading(false);
            });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://assignment-10-server-side-five-ivory.vercel.app/roommatefinde/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (!res.ok) throw new Error(`Update failed with status: ${res.status}`);
                return res.json();
            })
            .then((data) => {
                if (data.modifiedCount > 0 || data.acknowledged) {
                    Swal.fire("Success!", "Your listing has been updated.", "success");
                    navigate("/mylistings");
                } else {
                    Swal.fire("Warning", "No changes detected to update.", "info");
                }
            })
            .catch((error) => {
                toast.error("Update error:", error);
                Swal.fire("Error", "Something went wrong while updating.", "error");
            });
    };

    if (loading)
        return (
            <p className="text-center text-lg mt-10">Loading...</p>
        );

    if (!formData)
        return (
            <p className="text-center text-lg mt-10 text-red-600">Listing not found.</p>
        );

    return (
        <div className="max-w-xl mx-auto p-5 sm:p-8 md:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Update Roommate Post</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    name="title"
                    value={formData.title || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Title"
                    required
                />
                <input
                    name="location"
                    value={formData.location || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Location"
                    required
                />
                <input
                    name="rent"
                    value={formData.rent || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Rent"
                    type="number"
                    required
                />
                <input
                    name="roomType"
                    value={formData.roomType || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Room Type"
                    required
                />
                <input
                    name="lifestyle"
                    value={formData.lifestyle || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Lifestyle"
                    required
                />
                <input
                    name="contact"
                    value={formData.contact || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Contact"
                    type="tel"
                    required
                />
                <input
                    name="availability"
                    value={formData.availability || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Availability"
                    required
                />
                <input
                    name="image"
                    value={formData.image || ""}
                    onChange={handleChange}
                    className="input input-bordered w-full"
                    placeholder="Image URL"
                    type="url"
                    required
                />
                <textarea
                    name="description"
                    value={formData.description || ""}
                    onChange={handleChange}
                    className="textarea textarea-bordered w-full"
                    placeholder="Description"
                    rows={4}
                    required
                ></textarea>

                <input
                    type="text"
                    value={formData.userName || ""}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                />
                <input
                    type="email"
                    value={formData.userEmail || ""}
                    readOnly
                    className="input input-bordered w-full bg-gray-100 cursor-not-allowed"
                />

                <button
                    type="submit"
                    className="btn btn-primary w-full text-lg sm:text-xl py-3"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default UpdateRoommate;
