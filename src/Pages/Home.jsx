import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import "swiper/swiper-bundle.css";
import { Link } from "react-router";

const Home = () => {
  const [roommates, setRoommates] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("FeaturedPost.json") // public ফোল্ডারে থাকলে এমনভাবে fetch করতে হবে
      .then((res) => res.json())
      .then((data) => {
        const availableOnly = data.filter(
          (item) => item.status === "Available"
        );
        setRoommates(availableOnly);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center  mt-20">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  const visibleRoommates = showAll ? roommates : roommates.slice(0, 6);

  return (
    <div className="bg-gradient-to-t from-indigo-300 via-purple-300 to-pink-200">
      {/* slider */}
      <section className="pt-20 pb-20">
        {/* Slider with Autoplay */}
        <Swiper
          className="   "
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            EffectFade,
            Autoplay,
          ]}
          spaceBetween={50}
          effect="fade"
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 1000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/C3g5NfLq/download-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/LDjpSCg3/download-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12h-[600px]  mx-auto rounded-2xl "
              src="https://i.ibb.co/3mVNrhvJ/images-7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/1JX9C54p/images-12.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/LhBxsS8f/download.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl "
              src="https://i.ibb.co/Xk8XYF0H/images-10.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <h1 className="text-indigo-600  text-center mb-10 text-5xl  font-bold  ">
        Featured Roommate Post
      </h1>

      {/* Featured Roommates Post Section */}

      <div className="p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {visibleRoommates.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded p-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h2 className="text-lg font-semibold">{post.title}</h2>

              <p>
                <strong>Location:</strong> {post.location}
              </p>

              <p>
                <strong>Date:</strong> {post.date}
              </p>

              <Link to={`/Details/${post.id}`}>
                <button className="bg-[#4338CA] py-2 px-3 rounded-lg text-white hover:text-black hover:bg-[#cbc9f3] transition-all duration-[500ms] cursor-pointer">
                  See More
                </button>
              </Link>
            </div>
          ))}
        </div>

        {roommates.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-[#4338CA] py-2 px-3 rounded-lg text-white hover:text-black hover:bg-[#cbc9f3] transition-all duration-[500ms] cursor-pointer"
            >
              {showAll ? "Show Less" : "See All"}
            </button>
          </div>
        )}
      </div>
      {/* Why Choose Us */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
              <p>
                We ensure all posts are reviewed and verified to keep you safe
                from fraud and scams.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Real-Time Availability
              </h3>
              <p>
                All roommate posts are updated regularly, so you always get
                fresh and available options.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Easy Communication</h3>
              <p>
                Contact posters directly through the platform and make decisions
                quickly with clear info.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Recent Reviews */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-indigo-600">
            Recent Reviews
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
              <p className="mb-2 italic">
                "Found my perfect roommate within 3 days. The process was super
                simple and effective."
              </p>
              <p className="font-semibold">– Jannat, Dhaka</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
              <p className="mb-2 italic">
                "The verified posts made it really easy to trust the listings.
                Loved the clean UI!"
              </p>
              <p className="font-semibold">– Nahid, Chittagong</p>
            </div>
            <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
              <p className="mb-2 italic">
                "Highly recommended for students looking for shared
                accommodations in city areas."
              </p>
              <p className="font-semibold">– Tarek, Rajshahi</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
