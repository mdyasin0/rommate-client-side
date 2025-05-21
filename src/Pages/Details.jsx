import React, { useEffect, useState } from "react";
import { BsCalendar2Date } from "react-icons/bs";
import { FaPhoneVolume } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAttachMoney, MdMarkEmailRead } from "react-icons/md";
import { useParams } from "react-router";
import LikeButton from "./LikeButton";

const Details = () => {
  const { id } = useParams();
  const [roommate, setRoommate] = useState(null);

  useEffect(() => {
    fetch("/FeaturedPost.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setRoommate(found);
      });
  }, [id]);

  if (!roommate)
    return (
      <div className="flex justify-center items-center  mt-20">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );

  return (
    <div className="p-6 max-w-xl mx-auto my-20 bg-white rounded shadow">
      <img
        src={roommate.image}
        alt={roommate.title}
        className="w-full h-60 object-cover rounded mb-4"
      />
      <h1 className="text-2xl font-bold mb-2">{roommate.title}</h1>
      <p className="flex gap-2 items-center">
        <strong>
          <BsCalendar2Date />
        </strong>{" "}
        {roommate.date}
      </p>
      <p className="flex gap-2 items-center">
        <strong>
          <MdAttachMoney />
        </strong>{" "}
        {roommate.rent}
      </p>
      <p className="flex gap-2 items-center">
        <strong>
          <FaLocationDot />
        </strong>{" "}
        {roommate.location}
      </p>
      <p className="flex gap-2 items-center">
        <strong>Posted By:</strong> {roommate.postBy}
      </p>
      
      <p className="flex gap-2 items-center">
        <strong>Availability :</strong> {roommate.status}
      </p>
      <p className="flex gap-2 items-center">
        <strong>Room-Type :</strong> {roommate.roomType}
      </p>
      <p className="flex gap-2 items-center">
        <strong>Lifestyle-Preferences :</strong> {roommate.lifestylePreferences}
      </p>
      <p className="flex gap-2 items-center">
        <strong>
          <FaPhoneVolume />{" "}
        </strong>{" "}
        {roommate.contactInfo}
      </p>

      <p className="flex gap-2 items-center">
        <strong>
          <MdMarkEmailRead />{" "}
        </strong>{" "}
        {roommate.userEmail}
      </p>
      <p className="mt-2">{roommate.description}</p>

        <LikeButton />
    </div>
    
  );
};

export default Details;
