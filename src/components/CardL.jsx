import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FiMinus } from "react-icons/fi";

export default function CardL({
  article,
  toggleAddLike,
  toggleDelLike,
  suppLocation,
}) {
  // ici on rend une carte de location
  const [like, setLike] = useState(false);

  function handleLikeAdd() {
    toggleAddLike();
    setLike(!like);
  }

  function handleLikeDel() {
    toggleDelLike();
    setLike(!like);
  }

  return (
    <div
      className="m-4 p-4 w-3xs rounded-2xl flex-shrink-0 bg-white shadow-sm cursor-pointer"
      key={article.id}
    >
      <img
        className="object-cover w-full h-40 rounded-md"
        src={article.image}
        alt={article.title}
      />
      <h3 className="font-semibold">{article.title}</h3>
      <p className="font-light">{article.location}</p>
      <div className="flex justify-between items-center">
        <span className="text-red-500 font-semibold">
          {article.price} € / nuit
        </span>
        <div className="flex gap-2">
          <FiMinus onClick={() => suppLocation(article.id)} />
          {like === true ? (
            <FaHeart onClick={handleLikeDel} />
          ) : (
            <CiHeart onClick={handleLikeAdd} />
          )}
        </div>
      </div>
    </div>
  );
}
