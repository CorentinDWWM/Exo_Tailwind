import React from "react";
import CardC from "./CardC";

export default function SectionC() {
  // tableaux d'avis
  const reviews = [
    {
      id: 1,
      name: "Sophie L.",
      review: "Super séjour ! Maison très propre et bien située.",
    },
    {
      id: 2,
      name: "Thomas B.",
      review: "Hôte très sympathique, je recommande à 100% !",
    },
    { id: 3, name: "Emma D.", review: "Excellente expérience, on reviendra." },
  ];
  return (
    <div className="p-8 bg-white">
      <h2 className="font-semibold text-2xl">Avis Clients</h2>
      <div className="grid md:grid-cols-3 gap-5 p-4">
        {/* ici on map sur le tableau pour qu'il rende un composant pour chaque donnée qu'il possède */}
        {reviews.map((avis) => (
          <CardC avis={avis} key={avis.id} />
        ))}
      </div>
    </div>
  );
}
