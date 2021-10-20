import React from "react";
import { GreatStyled } from "./Great";

const GreatPlayers = ({ players }) => {
  const { name, image } = players;
  return (
    <GreatStyled>
      <img src={image} alt="" />
      <p>{name}</p>
    </GreatStyled>
  );
};

export default GreatPlayers;
