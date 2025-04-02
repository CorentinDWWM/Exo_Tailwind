import React from "react";

export default function Footer({ darkMode }) {
  // composant pour le footer
  return (
    <footer
      className={`text-white mt-10 p-8 ${
        darkMode ? "bg-black" : "bg-gray-800"
      }`}
    >
      <div className="mx-auto max-w-4xl grid gap-6 md:grid-cols-4">
        <div className="flex flex-col p-2">
          <h4 className="font-semibold mb-2">A propos</h4>
          <p>Nous aidons les voyageurs à trouver le logement idéal.</p>
        </div>
        <div className="flex flex-col p-2">
          <h4 className="font-semibold mb-2">Support</h4>
          <a className="hover:underline" href="#">
            Contact
          </a>
          <a className="hover:underline" href="#">
            FAQ
          </a>
        </div>
        <div className="flex flex-col p-2">
          <h4 className="font-semibold mb-2">Suivez-nous</h4>
          <a className="hover:underline" href="#">
            Facebook
          </a>
          <a className="hover:underline" href="#">
            Instagram
          </a>
        </div>
        <div className="flex flex-col p-2">
          <h4 className="font-semibold mb-2">Mentions légales</h4>
          <a className="hover:underline" href="#">
            Conditions générales
          </a>
          <a className="hover:underline" href="#">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
}
