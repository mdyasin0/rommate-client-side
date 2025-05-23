import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

const Home = () => {
  const [data, setData] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/roommatefinde")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  const displayedData = showAll ? data : data.slice(0, 6);

  return (
    <>
      <section className="pt-20 pb-20">
        <Swiper
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
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl"
              src="https://i.ibb.co/C3g5NfLq/download-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl"
              src="https://i.ibb.co/LDjpSCg3/download-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl"
              src="https://i.ibb.co/3mVNrhvJ/images-7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl"
              src="https://i.ibb.co/1JX9C54p/images-12.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl"
              src="https://i.ibb.co/LhBxsS8f/download.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="w-11/12 h-[600px] mx-auto rounded-2xl"
              src="https://i.ibb.co/Xk8XYF0H/images-10.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </section>

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Available Rooms</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedData.map((item) => (
            <div key={item._id} className="border rounded-xl p-4 shadow-md">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-lg mb-2"
              />
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="text-sm text-gray-600">{item.location}</p>
              <p>Rent: {item.rent} BDT</p>
              <p>Status: {item.availability}</p>
              <Link to={`/room-details/${item._id}`}>
                <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                  See More
                </button>
              </Link>
            </div>
          ))}
        </div>
        {data.length > 6 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>

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
    </>
  );
};

export default Home;
