import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SectionC from "./components/SectionC";
import SectionL from "./components/SectionL";
import listingsData from "./data.json";

function App() {
  const [listings, setListings] = useState(listingsData.listings);
  const [user, setUser] = useState(true);
  const [invertedRow, setInvertedRow] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [nbLike, setNbLike] = useState(0);
  const [newAdd, setNewAdd] = useState(false);

  const toggleUser = () => {
    setUser(!user);
    {
      user ? setNbLike(0) : null;
    }
  };

  const toggleRow = () => {
    setInvertedRow(!invertedRow);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleAddLike = () => {
    setNbLike(nbLike + 1);
  };

  const toggleDelLike = () => {
    setNbLike(nbLike - 1);
  };

  const newLocation = {
    id: 12,
    image: "https://images.pexels.com/photos/280222/pexels-photo-280222.jpeg",
    title: "Maison Familliale",
    location: "Montpellier, France",
    price: "370",
  };

  function addNewLocation() {
    setListings([...listings, newLocation]);
    setNewAdd(true);
  }

  function suppNewLocation() {
    setListings((prevListing) => prevListing.slice(0, -1));
    setNewAdd(false);
  }

  // ici on rend tout nos composants pour afficher l'application
  return (
    <div
      className={`min-h-screen flex flex-col ${
        darkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <Header
        user={user}
        toggleUser={toggleUser}
        toggleRow={toggleRow}
        toggleDarkMode={toggleDarkMode}
        darkMode={darkMode}
        nbLike={nbLike}
        addNewLocation={addNewLocation}
        newAdd={newAdd}
        suppNewLocation={suppNewLocation}
      />
      <div className="flex-grow">
        <SectionL
          user={user}
          invertedRow={invertedRow}
          darkMode={darkMode}
          toggleAddLike={toggleAddLike}
          toggleDelLike={toggleDelLike}
          setNbLike={setNbLike}
          newLocation={newLocation}
          listings={listings}
        />
        <SectionC />
      </div>
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
