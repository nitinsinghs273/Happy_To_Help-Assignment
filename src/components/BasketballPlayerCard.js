import React from "react";
import "./BasketballPlayerCard.css";
import ButtonWithArrow from "./ArrowButton";

const BasketballPlayerCard = ({ name, image, position, stats, about }) => {
  return (
    <div className="player-card">
      <div className="container">
        <div className="player-image-container">
          <img src={image} alt={`${name}`} className="player-image" />
          <h2 className="player-name">{name}</h2>
          <p className="player-position">{position}</p>
        </div>
        <div className="player-info">
          <div className="player-stats">
            <p>Points per Game: {stats.pointsPerGame}</p>
            <p>Assists per Game: {stats.assistsPerGame}</p>
            <p>Rebounds per Game: {stats.reboundsPerGame}</p>
          </div>
        </div>
      </div>
      <div className="button">
        <ButtonWithArrow buttonText="About" additionalInfo={about} />
      </div>
    </div>
  );
};

export default BasketballPlayerCard;
