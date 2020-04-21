import React from "react";
import GameList from "./GameList";
import GameContent from "./GameContent";
import Footer from "../../Footer/Footer";
import games from "../../../data/games";
import { useParams } from "react-router-dom";
import "../../../style/game.scss";

const Games = () => {
  const { name } = useParams();
  const gameName = "Celestial Raid"; //TEMPORARY
  const game = games.find((game) => game.name === gameName);

  return (
    <>
      <section>
        {game ? <GameContent game={game} /> : <GameList games={games} />}
      </section>
      <Footer />
    </>
  );
};

export default Games;
