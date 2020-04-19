import React from "react";
import { Link } from "react-router-dom";

const GameCard = ({ banner, name }) => {
  return (
    <Link to={`/games/${name}`} className="game-card text-center">
      <img src={banner} alt={name} className="w-100" />
      <p className="bebas-font">{name}</p>
    </Link>
  );
};

export default GameCard;
