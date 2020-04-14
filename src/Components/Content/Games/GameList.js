import React from "react";
import GameCard from "./GameCard";

const GameList = ({ data }) => {
  const gameTags = data.map((game) => (
    <GameCard key={game.id} banner={game.banner} name={game.name} />
  ));

  return <div className="list">{gameTags}</div>;
};

export default GameList;
