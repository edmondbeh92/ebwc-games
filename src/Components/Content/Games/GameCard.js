import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ banner, name }) => {
  return (
    <Link to={`/games/${name}`} className="game-card">
      <img src={banner} alt={name} />
      <p className="bebas-font">{name}</p>
    </Link>
  );
};

export default GameCard;
