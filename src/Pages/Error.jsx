import React from "react";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <Player
        autoplay
        loop
        src="Error.json"
        style={{ height: "300px", width: "300px" }}
      />
      <Link to="/home" className="cursor-pointer">
        <Player
          autoplay
          loop
          src="Errorbtn.json"
          style={{ height: "150px", width: "150px" }}
        />
      </Link>
    </div>
  );
};

export default Error;
