import React from "react";
import { FaMoon } from "react-icons/fa";
import { MdSunny } from "react-icons/md";

export default function Header({
  user,
  toggleUser,
  toggleRow,
  toggleDarkMode,
  darkMode,
  nbLike,
  addNewLocation,
  newAdd,
}) {
  // composant pour le header
  return (
    <div className="bg-white w-full flex justify-between p-4 items-center shadow-md">
      <h1 className="text-red-500 font-bold text-xl">Airbed & Breakfast</h1>
      {user ? (
        <nav className="flex justify-evenly w-auto gap-4 items-center nav">
          {nbLike >= 1 ? (
            <p className="font-semibold">Favoris : {nbLike}</p>
          ) : null}
          {newAdd ? null : (
            <a
              onClick={addNewLocation}
              className="text-gray-600 hover:text-black cursor-pointer"
            >
              Ajoutez une nouvelle location
            </a>
          )}
          <a
            onClick={toggleRow}
            className="text-gray-600 hover:text-black"
            href="#"
          >
            Maisons
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            Appartements
          </a>
          <a className="text-gray-600 hover:text-black" href="#">
            Villas
          </a>
          <a
            onClick={toggleUser}
            className="text-gray-600 hover:text-black"
            href="#"
          >
            Déconnexion
          </a>
          {darkMode ? (
            <MdSunny onClick={toggleDarkMode} />
          ) : (
            <FaMoon onClick={toggleDarkMode} />
          )}
        </nav>
      ) : (
        <nav className="flex justify-evenly items-center gap-4 nav">
          <a
            onClick={toggleUser}
            className="text-gray-600 hover:text-black"
            href="#"
          >
            Connexion
          </a>
          {darkMode ? (
            <MdSunny onClick={toggleDarkMode} />
          ) : (
            <FaMoon onClick={toggleDarkMode} />
          )}
        </nav>
      )}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-6 burger"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    </div>
  );
}
