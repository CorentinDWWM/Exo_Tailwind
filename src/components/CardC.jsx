import React from "react";

export default function CardC({ avis }) {
  // ici on rend une carte d'un avis
  return (
    <div className="bg-white p-4 shadow-sm rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
      <h3 className="font-semibold">{avis.name}</h3>
      <p className="font-light">{avis.review}</p>
    </div>
  );
}
