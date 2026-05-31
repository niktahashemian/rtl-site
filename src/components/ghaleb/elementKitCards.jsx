// src/components/ElementKitCards/ElementKitCards.jsx
import React from "react";
import '../../assets/css/style.css';
import { elementKits } from "../../assets/js/elementKitsData";
import ElementKitCard from "./elementKitCard";

const ElementKitCards = () => {
  return (
    <section className="elementKitCards">
      <div className="cards__wrapper">
        {elementKits.map((kit) => (
          <ElementKitCard key={kit.id} kit={kit} />
        ))}
      </div>
    </section>
  );
};

export default ElementKitCards;
