import React, { useState } from "react";
import { GameList } from "./GameList";
import { GameContent } from "./GameContent";
import "../../../style/iframe.scss";

export const Games = () => {
  const [chosen, setChosen] = useState(null);

  const gameList = [
    {
      id: 1,
      name: "Celestial Raid",
      engine: "GameMaker Studio 1.4",
      splash_url: require("../../../images/splash.png"),
      description:
        "A 60fps vertical shmup with 6 missions, each with their own bosses. Ships have a few upgrades. Available on PC or Android.",
      game_link: "https://ebwc-games.itch.io/celestial-raid",
      youtube_link: "https://www.youtube.com/embed/EKzkaFqvT4Y",
      img_url: [
        require("../../../images/CS_pic1.png"),
        require("../../../images/CS_pic2.png"),
        require("../../../images/CS_pic3.png"),
        require("../../../images/CS_pic4.png"),
        require("../../../images/CS_pic5.png"),
      ],
    },
    {
      id: 2,
      name: "Top-down shooter",
    },
    {
      id: 3,
      name: "rpg",
    },
  ];

  const games_id_name = gameList.map((game) => ({
    id: game.id,
    name: game.name,
  }));

  return (
    <div>
      <GameList ids_names={games_id_name} />
      <GameContent selectedGame={gameList[0]} />
    </div>
  );
};
