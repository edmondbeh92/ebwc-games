import React from "react";
import GameList from "./GameList";
import GameContent from "./GameContent";
import Footer from "../../Footer/Footer";
import games from "../../../data/games";
import { useParams } from "react-router-dom";
import "../../../style/game.scss";

const Games = () => {
  const { name } = useParams();
  const game = games.find((game) => game.name === name);

  return (
    <>
      <section>
        <GameList data={games} />
        {name ? <GameContent game={game} /> : null}
      </section>
      <Footer />
    </>
  );
};

export default Games;
