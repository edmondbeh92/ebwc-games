import React from "react";
import { GameListTab } from "./GameListTab";
// import "../../../style/other.scss";

export const GameList = (props) => {
  const gameTags = props.ids_names.map((id_name) => (
    <GameListTab key={id_name.id} id={id_name.id} name={id_name.name} />
  ));

  return <div className="list">{gameTags}</div>;
};
