import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom"; 

const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      {/* Main Lottie Error Animation */}
      <Player
        autoplay
        loop
        src="Error.json"
        className="w-60 h-60 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]"
      />

      {/* Go Back / Button Animation */}
      <Link to="/home" className="mt-4">
        <Player
          autoplay
          loop
          src="Errorbtn.json"
          className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 hover:scale-105 transition-transform duration-300"
        />
      </Link>
    </div>
  );
};

export default Error;
