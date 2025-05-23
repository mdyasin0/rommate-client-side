import { useState } from "react";
import { Heart } from "lucide-react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 mt-5 py-2 rounded-2xl shadow-sm transition-all duration-200 ${
        liked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600"
      }`}
    >
      <p>Like</p>
      <Heart fill={liked ? "red" : "none"} className="w-5 h-5" />
      <span>{likeCount}</span>
    </button>
  );
};

export default LikeButton;
