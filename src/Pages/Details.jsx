import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Details = () => {
  const { id } = useParams();
  const [roommate, setRoommate] = useState(null);

  useEffect(() => {
    fetch("/FeaturedPost.json")
      .then(res => res.json())
      .then(data => {
        const found = data.find(item => item.id === id);
        setRoommate(found);
      });
  }, [id]);

  if (!roommate) return  <div className='flex justify-center items-center  mt-20'><span className="loading loading-spinner loading-xl"></span></div>   ;

  return (
    <div className="p-6 max-w-xl mx-auto my-20 bg-white rounded shadow">
      <img src={roommate.image} alt={roommate.title} className="w-full h-60 object-cover rounded mb-4" />
      <h1 className="text-2xl font-bold mb-2">{roommate.title}</h1>
      <p><strong>Rent:</strong> {roommate.rent}</p>
      <p><strong>Location:</strong> {roommate.location}</p>
      <p><strong>Posted By:</strong> {roommate.postBy}</p>
      <p><strong>Date:</strong> {roommate.date}</p>
      <p className="mt-2">{roommate.description}</p>
    </div>
  );
};

export default Details;
