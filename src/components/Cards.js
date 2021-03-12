import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/bg.jpg"
              text="Explore beautiful mountains"
              label="Mountain"
              path="/services"
            />
            <CardItem
              src="images/bali.jpg"
              text="Take a trip through the island of Bali with aesthetic beauty"
              label="Island"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/pict.jpg"
              text="Explore other beautiful mountains from Indonesia"
              label="Mountain"
              path="/services"
            />
            <CardItem
              src="images/pict2.jpg"
              text="The Raja Ampat Islands are a series of four adjacent islands located in the western part of the Bird's Head (Vogelkoop) of Papua Island."
              label="Beach"
              path="/services"
            />
            <CardItem
              src="images/pict3.jpg"
              text="find treasure in the beautiful forest interiors"
              label="Forest"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
