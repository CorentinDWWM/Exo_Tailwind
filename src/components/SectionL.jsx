import React, { useState } from "react";
import CardL from "./CardL";

export default function SectionL({
  user,
  invertedRow,
  darkMode,
  toggleAddLike,
  toggleDelLike,
  listings,
  suppLocation,
}) {
  // tableaux des différentes locations
  const [search, setSearch] = useState("");

  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <div className="p-4">
      {user ? (
        <>
          <div className="flex flex-wrap items-center gap-5">
            <h2
              className={`font-semibold text-2xl ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              Logements disponibles
            </h2>
            <input
              className="w-96 outline-1 placeholder:pl-1.5 rounded-lg  focus:outline-red-500"
              type="text"
              placeholder="Insérer la ville"
              onChange={handleSearch}
            />
          </div>
          {invertedRow ? (
            <div className="overflow-x-auto flex flex-row-reverse justify-end p-2">
              {/* ici on map sur le tableau pour qu'il rende un composant pour chaque donnée qu'il possède */}
              {listings
                .filter((article) =>
                  article.location
                    .split(",")[0]
                    .trim()
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                )
                .map((article) => (
                  <CardL
                    article={article}
                    key={article.id}
                    darkMode={darkMode}
                    toggleAddLike={toggleAddLike}
                    suppLocation={suppLocation}
                  />
                ))}
            </div>
          ) : (
            <div className="flex flex-wrap p-2">
              {/* ici on map sur le tableau pour qu'il rende un composant pour chaque donnée qu'il possède */}
              {listings
                .filter((article) =>
                  article.location
                    .split(",")[0]
                    .trim()
                    .toLocaleLowerCase()
                    .includes(search.toLocaleLowerCase())
                )
                .map((article) => (
                  <CardL
                    article={article}
                    key={article.id}
                    toggleAddLike={toggleAddLike}
                    toggleDelLike={toggleDelLike}
                    suppLocation={suppLocation}
                  />
                ))}
            </div>
          )}
        </>
      ) : (
        <>
          <h2
            className={`font-semibold text-center text-2xl ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            Veuillez vous connectez
          </h2>
        </>
      )}
    </div>
  );
}
